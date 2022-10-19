import { Container, Grid } from "@mui/material";
import BannerCard3 from "components/banners/BannerCard3";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/CarouselStyled";
import { FlexBetween } from "components/flex-box";
import NavLink3 from "components/nav-link/NavLink3";
import ProductCard20 from "components/product-cards/ProductCard20";
import { H2, H4, Paragraph, Span } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { FC, useEffect, useState } from "react";

// ======================================================================
type Section4Props = { products: any[] };
// ======================================================================

const Section4: FC<Section4Props> = ({ products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else if (width < 1200) setVisibleSlides(4);
    else setVisibleSlides(5);
  }, [width]);

  return (
    <Container sx={{ py: 8 }}>
      <FlexBetween mb={3}>
        <H2 fontSize={20}>Deals Of The Day</H2>

        <NavLink3 text="More Products" href="#" hoverColor="dark.main" />
      </FlexBetween>

      <Carousel
        totalSlides={products.length}
        visibleSlides={visibleSlides}
        sx={carouselStyled}
      >
        {products.map((product) => (
          <ProductCard20 product={product} key={product.id} />
        ))}
      </Carousel>

      {/* OFFER BANNERS */}
      <Grid container spacing={3} pt={8}>
        <Grid item md={4} xs={12}>
          <BannerCard3 img="/assets/images/banners/banner-18.jpg">
            <Paragraph fontSize={13} letterSpacing={1.2}>
              NEW ARRIVALS
            </Paragraph>

            <H4 fontSize={20} lineHeight={1} my={2}>
              SKI CLOTHES SALE
              <br />
              <Span fontWeight={400} color="primary.main">
                Up to 35% Off
              </Span>
            </H4>

            <NavLink3
              href="#"
              text="Shop Now"
              color="dark.main"
              hoverColor="dark.main"
            />
          </BannerCard3>
        </Grid>

        <Grid item md={4} xs={12}>
          <BannerCard3 img="/assets/images/banners/banner-19.jpg">
            <Paragraph color="white" fontSize={13} letterSpacing={1.2}>
              BEST SELLER
            </Paragraph>

            <H4 color="white" fontSize={20} lineHeight={1} my={2}>
              TRENDING WOMEN
              <br />
              <Span fontWeight={400}>SUNGLASSES</Span>
            </H4>

            <NavLink3
              href="#"
              text="Shop Now"
              color="white"
              hoverColor="white"
            />
          </BannerCard3>
        </Grid>

        <Grid item md={4} xs={12}>
          <BannerCard3 img="/assets/images/banners/banner-20.jpg">
            <Paragraph fontSize={13} letterSpacing={1.2}>
              NEW ARRIVALS
            </Paragraph>

            <H4 fontSize={20} lineHeight={1} my={2}>
              NEW LATEST BAG
              <br />
              <Span fontWeight={400}>COLLECTION</Span>
            </H4>

            <NavLink3
              href="#"
              text="Shop Now"
              color="dark.main"
              hoverColor="dark.main"
            />
          </BannerCard3>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
