import { Container, Grid } from "@mui/material";
import ProductCard19 from "components/product-cards/ProductCard19";
import { H3 } from "components/Typography";
import { FC } from "react";
import { FashionShop2ProductType } from "./Section4";

// ======================================================================
type Section8Props = {
  saleProducts: FashionShop2ProductType[];
  latestProducts: FashionShop2ProductType[];
  popularProducts: FashionShop2ProductType[];
  bestWeekProducts: FashionShop2ProductType[];
};
// ======================================================================

const Section8: FC<Section8Props> = (props) => {
  const { saleProducts, popularProducts, bestWeekProducts, latestProducts } =
    props;

  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xs={12}>
          <H3 mb={3}>Sale Products</H3>

          {saleProducts.map((product) => (
            <ProductCard19
              key={product.id}
              id={product.id}
              image={product.img}
              title={product.name}
              price={product.price}
            />
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <H3 mb={3}>Latest Products</H3>

          {latestProducts.map((product) => (
            <ProductCard19
              key={product.id}
              id={product.id}
              image={product.img}
              title={product.name}
              price={product.price}
            />
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <H3 mb={3}>Best of the Week</H3>

          {bestWeekProducts.map((product) => (
            <ProductCard19
              key={product.id}
              id={product.id}
              image={product.img}
              title={product.name}
              price={product.price}
            />
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <H3 mb={3}>Popular Products</H3>

          {popularProducts.map((product) => (
            <ProductCard19
              key={product.id}
              id={product.id}
              image={product.img}
              title={product.name}
              price={product.price}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section8;
