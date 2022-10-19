import { Card, Container, Grid, List, ListItem, styled } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/CarouselStyled";
import NavLink3 from "components/nav-link/NavLink3";
import ProductCard20 from "components/product-cards/ProductCard20";
import { H3 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { FC, useEffect, useState } from "react";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  fontSize: 13,
  fontWeight: 500,
  cursor: "pointer",
  padding: "10px 0 0 0",
  transition: "all 0.3s",
  ":hover": { color: theme.palette.primary.main },
}));

// ======================================================================
type Section5Props = { products: any[] };
// ======================================================================

const Section5: FC<Section5Props> = ({ products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1200) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Card
            elevation={0}
            sx={{
              px: 4,
              height: "100%",
              py: 2,
              borderRadius: "3px",
              border: 0,
            }}
          >
            <H3>Electronic</H3>

            <List sx={{ mb: 2 }}>
              <StyledListItem>Wireless Speaker</StyledListItem>
              <StyledListItem>Tablet</StyledListItem>
              <StyledListItem>Smartphone</StyledListItem>
              <StyledListItem>Laptop</StyledListItem>
              <StyledListItem>iMac</StyledListItem>
              <StyledListItem>Game Controller</StyledListItem>
              <StyledListItem>Drone</StyledListItem>
              <StyledListItem>Apple</StyledListItem>
            </List>

            <NavLink3
              href="#"
              text="Browse All"
              color="dark.main"
              hoverColor="dark.main"
            />
          </Card>
        </Grid>

        <Grid item md={9} xs={12}>
          <Carousel
            totalSlides={products.length}
            visibleSlides={visibleSlides}
            sx={carouselStyled}
          >
            {products.map((product) => (
              <ProductCard20 product={product} key={product.id} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section5;
