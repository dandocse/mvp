import { Box, Container, Grid, styled } from "@mui/material";
import { FlexRowCenter } from "components/flex-box";
import ProductCard18 from "components/product-cards/ProductCard18";
import { H2, H4, Span } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { FC, useEffect, useState } from "react";
import { FashionShop2ProductType } from "../fashion-shop-2/Section4";

const services = [
  { title: "Fast Delivery", subtitle: "Start from $10" },
  { title: "Money Guarantee", subtitle: "7 Days Back" },
  { title: "365 Days", subtitle: "For free return" },
  { title: "Payment", subtitle: "Secure system" },
];

// custom styled components
const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "grid",
  padding: "2rem 0",
  gridTemplateColumns: "repeat(4, 1fr)",
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  [theme.breakpoints.down("md")]: {
    gap: 30,
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 30,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    gridTemplateColumns: "1fr",
  },
}));

// ======================================================================
type Section5Props = { products: FashionShop2ProductType[] };
// ======================================================================

const Section5: FC<Section5Props> = ({ products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <Container sx={{ mt: 8 }}>
      <H2 textAlign="center" mb={4}>
        Featured Products
      </H2>

      <Grid container spacing={3}>
        {products.slice(0, 4).map((product) => (
          <Grid item md={3} sm={6} xs={12} key={product.id}>
            <ProductCard18 product={product} />
          </Grid>
        ))}
      </Grid>

      <StyledFlexBox mt={8}>
        {services.map((item, ind) => (
          <FlexRowCenter flexDirection="column" key={ind}>
            <H4 lineHeight={1.3}>{item.title}</H4>
            <Span color="grey.600">{item.subtitle}</Span>
          </FlexRowCenter>
        ))}
      </StyledFlexBox>
    </Container>
  );
};

export default Section5;
