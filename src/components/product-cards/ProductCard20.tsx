import { Favorite, FavoriteBorder, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, IconButton, Rating, styled } from "@mui/material";
import { FlexRowCenter } from "components/flex-box";
import ProductViewDialog from "components/products/ProductViewDialog";
import { H4, Paragraph, Small } from "components/Typography";
import { CartItem, useAppContext } from "contexts/AppContext";
import currency from "currency.js";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

// custom styled components
const Card = styled(Box)(({ theme }) => ({
  borderRadius: "3px",
  transition: "all 0.3s",
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[100]}`,
  ":hover": {
    "& .product-actions": { right: 5 },
    "& img": { transform: "scale(1.1)" },
    border: `1px solid ${theme.palette.dark.main}`,
  },
}));

const CardMedia = styled(Box)(() => ({
  width: "100%",
  maxHeight: 300,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  "& img": { transition: "0.3s" },
}));

const AddToCartButton = styled(IconButton)(() => ({
  top: 10,
  right: -40,
  position: "absolute",
  transition: "right 0.3s .1s",
}));

const FavouriteButton = styled(IconButton)(() => ({
  top: 45,
  right: -40,
  position: "absolute",
  transition: "right 0.3s .2s",
}));

// ==============================================================
type ProductCard20Props = {
  product: {
    img: string;
    name: string;
    price: number;
    reviews: number;
    category: string;
    id: string | number;
  };
};
// ==============================================================

const ProductCard20: FC<ProductCard20Props> = ({ product }) => {
  const { state, dispatch } = useAppContext();
  const [openDialog, setOpenDialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const cartItem: CartItem | undefined = state.cart.find(
    (item) => item.id === product.id
  );

  // handle favourite
  const handleFavorite = () => setIsFavorite((fav) => !fav);

  // handle add to cart
  const handleAddToCart = (product: ProductCard20Props["product"]) => {
    const payload = {
      id: product.id,
      name: product.name,
      imgUrl: product.img,
      price: product.price,
      qty: (cartItem?.qty || 0) + 1,
    };

    dispatch({ type: "CHANGE_CART_AMOUNT", payload });
  };

  return (
    <Card height="100%">
      <CardMedia>
        <Link href={`/product/${product.id}`}>
          <a>
            <Image
              width={300}
              height={300}
              alt="category"
              objectFit="cover"
              layout="responsive"
              className="product-img"
              src={product.img}
            />
          </a>
        </Link>

        <AddToCartButton
          className="product-actions"
          onClick={() => setOpenDialog(true)}
        >
          <RemoveRedEye color="disabled" fontSize="small" />
        </AddToCartButton>

        <FavouriteButton className="product-actions" onClick={handleFavorite}>
          {isFavorite ? (
            <Favorite color="primary" fontSize="small" />
          ) : (
            <FavoriteBorder color="disabled" fontSize="small" />
          )}
        </FavouriteButton>
      </CardMedia>

      <ProductViewDialog
        openDialog={openDialog}
        handleCloseDialog={() => setOpenDialog(false)}
        product={{
          id: product.id,
          title: product.name,
          price: product.price,
          imgGroup: [product.img, product.img],
        }}
      />

      <Box p={2} textAlign="center">
        <Paragraph>{product.name}</Paragraph>
        <H4 fontWeight={700} py={0.5}>
          {currency(product.price, { separator: "," }).format()}
        </H4>

        <FlexRowCenter gap={1} mb={2}>
          <Rating name="read-only" value={4} readOnly sx={{ fontSize: 14 }} />
          <Small fontWeight={600} color="grey.500">
            ({product.reviews})
          </Small>
        </FlexRowCenter>

        <Button
          fullWidth
          color="dark"
          variant="outlined"
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard20;
