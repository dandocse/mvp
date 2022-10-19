/* eslint-disable react-hooks/exhaustive-deps */
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PreviewIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Chip, Divider, styled, useTheme } from "@mui/material";
import BazaarRating from "components/BazaarRating";
import { FlexBetween, FlexRowCenter } from "components/flex-box";
import LazyImage from "components/LazyImage";
import ProductViewDialog from "components/products/ProductViewDialog";
import { H3, Span } from "components/Typography";
import { CartItem, useAppContext } from "contexts/AppContext";
import Link from "next/link";
import { CSSProperties, FC, useCallback, useState } from "react";

const StyledCard = styled(Box)(({ theme }) => ({
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",
  position: "relative",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .css-1i2n18j": { display: "flex" },
    "& .controlBox": { display: "flex", bottom: 0 },
  },
}));

const ImgBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  padding: "0 40px 20px 40px",
  background: theme.palette.primary[100],
}));

const ItemController = styled(FlexBetween)(({ theme }) => ({
  width: 35,
  right: 15,
  height: 120,
  bottom: -120,
  background: "#fff",
  overflow: "hidden",
  position: "absolute",
  flexDirection: "column",
  transition: "bottom 0.3s ease-in-out",
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "8px 10px",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
      background: theme.palette.primary.main,
      "& svg": { color: "#fff" },
    },
  },
  "& svg": { fontSize: 18, color: theme.palette.grey[600] },
}));

const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  zIndex: 11,
  top: "16px",
  left: "0px",
  paddingLeft: 3,
  paddingRight: 3,
  borderRadius: 0,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
  background: theme.palette.primary.main,
}));

// ============================================================
type Props = {
  off: number;
  title: string;
  price: number;
  imgUrl: string;
  rating?: number;
  className?: string;
  id: string | number;
  hideRating?: boolean;
  style?: CSSProperties;
  showProductSize?: boolean;
  sx?: { [key: string]: any };
};
// ============================================================

const ProductCard16: FC<Props> = (props) => {
  const { sx, off, id, title, price, imgUrl, rating, hideRating } = props;

  const { palette } = useTheme();
  const { state, dispatch } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleIsFavorite = () => setIsFavorite((fav) => !fav);
  const toggleDialog = useCallback(() => setOpenModal((open) => !open), []);

  const cartItem: CartItem | undefined = state.cart.find(
    (item) => item.id === id
  );

  const handleCartAmountChange = useCallback(
    (qty) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: { price, imgUrl, id, name: title, qty },
      });
    },
    []
  );

  return (
    <StyledCard sx={sx}>
      <ImgBox id="imgBox">
        {off !== 0 && (
          <StyledChip color="primary" size="small" label={`${off}% off`} />
        )}
        <Link href={`/product/${id}`}>
          <a>
            <LazyImage
              src={imgUrl}
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </Link>

        <ItemController className="controlBox">
          <Span onClick={toggleDialog}>
            <PreviewIcon />
          </Span>

          <Divider orientation="horizontal" flexItem />

          <Span onClick={toggleIsFavorite}>
            {isFavorite ? (
              <Favorite color="primary" fontSize="small" />
            ) : (
              <FavoriteBorder fontSize="small" color="primary" />
            )}
          </Span>

          <Divider orientation="horizontal" flexItem />

          <Span
            onClick={handleCartAmountChange(
              cartItem?.qty ? cartItem.qty - 1 : 1
            )}
          >
            <ShoppingCartIcon />
          </Span>
        </ItemController>
      </ImgBox>

      <ProductViewDialog
        openDialog={openModal}
        handleCloseDialog={toggleDialog}
        product={{ title, price, id, imgGroup: [imgUrl, imgUrl] }}
      />

      <ContentWrapper>
        <FlexRowCenter>
          <Box pr={1} fontWeight="500" color="primary.main">
            ${(price - (price * off) / 100).toFixed(2)}
          </Box>

          {off !== 0 && (
            <Box color="grey.600" fontWeight="500">
              <del>{price?.toFixed(2)}</del>
            </Box>
          )}
        </FlexRowCenter>

        <Link href={`/product/${id}`}>
          <a>
            <H3
              my="6px"
              title={title}
              fontSize="15px"
              fontWeight="600"
              className="title"
              textAlign="center"
              color="text.secondary"
            >
              {title}
            </H3>
          </a>
        </Link>

        {!hideRating && (
          <FlexRowCenter>
            <BazaarRating value={rating || 0} color="warn" readOnly />{" "}
            <Span sx={{ color: palette.grey[600] }}>{`(${rating}.0)`}</Span>
          </FlexRowCenter>
        )}
      </ContentWrapper>
    </StyledCard>
  );
};

export default ProductCard16;
