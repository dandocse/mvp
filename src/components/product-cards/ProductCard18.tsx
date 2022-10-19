import { AddShoppingCart, Favorite, FavoriteBorder } from "@mui/icons-material";
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
const Card = styled(Box)(() => ({
  ":hover": {
    "& .product-actions": { right: 10 },
    "& img": { transform: "scale(1.1)" },
    "& .product-view-action": { opacity: 1 },
  },
}));

const CardMedia = styled(Box)(({ theme }) => ({
  maxHeight: 300,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.grey[300],
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

const QuickViewButton = styled(Button)(() => ({
  left: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: 0,
  position: "absolute",
  transition: "all 0.3s",
}));

// ==============================================================
type ProductCard18Props = {
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

const ProductCard18: FC<ProductCard18Props> = ({ product }) => {
  const { state, dispatch } = useAppContext();
  const [openDialog, setOpenDialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const cartItem: CartItem | undefined = state.cart.find(
    (item) => item.id === product.id
  );

  // handle favourite
  const handleFavorite = () => setIsFavorite((fav) => !fav);

  // handle add to cart
  const handleAddToCart = (product: ProductCard18Props["product"]) => {
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
    <Card>
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
          onClick={() => handleAddToCart(product)}
        >
          <AddShoppingCart color="disabled" fontSize="small" />
        </AddToCartButton>

        <FavouriteButton className="product-actions" onClick={handleFavorite}>
          {isFavorite ? (
            <Favorite color="primary" fontSize="small" />
          ) : (
            <FavoriteBorder color="disabled" fontSize="small" />
          )}
        </FavouriteButton>

        <QuickViewButton
          fullWidth
          size="large"
          color="dark"
          variant="contained"
          className="product-view-action"
          onClick={() => setOpenDialog(true)}
        >
          Quick View
        </QuickViewButton>
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

      <Box p={1} textAlign="center">
        <Small color="grey.500">{product.category}</Small>
        <Paragraph fontWeight="bold">{product.name}</Paragraph>
        <H4 fontWeight={700} py={0.5}>
          {currency(product.price, { separator: "," }).format()}
        </H4>

        <FlexRowCenter gap={1}>
          <Rating name="read-only" value={4} readOnly sx={{ fontSize: 16 }} />
          <Small fontWeight={600} color="grey.500">
            ({product.reviews} Reviews)
          </Small>
        </FlexRowCenter>
      </Box>
    </Card>
  );
};

export default ProductCard18;
