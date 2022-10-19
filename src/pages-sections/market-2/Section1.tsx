import { Box, Button, Container, CSSObject, Grid, Stack } from "@mui/material";
import BannerCard3 from "components/banners/BannerCard3";
import CarouselCard4 from "components/carousel-cards/CarouselCard4";
import Carousel from "components/carousel/Carousel";
import NavLink3 from "components/nav-link/NavLink3";
import { H1, H4, Paragraph, Span } from "components/Typography";
import { FC } from "react";

// ======================================================
type Props = { data?: any[] };
// ======================================================

const Section1: FC<Props> = () => {
  // custom css
  const carouselStyles: CSSObject = {
    overflow: "hidden",
    borderRadius: "3px",
    "& .carousel__dot-group": {
      mt: 0,
      left: 0,
      right: 0,
      bottom: 10,
      position: "absolute",
      "& div": {
        borderColor: "dark.main",
        "::after": { backgroundColor: "dark.main" },
      },
    },
  };

  // CAROUSEL TEXT CONTENTS
  const carouselContent1 = (
    <>
      <Box pl={{ md: 10 }}>
        <H4
          lineHeight={1}
          fontWeight={400}
          textTransform="uppercase"
          fontSize={{ sm: 30, xs: 24 }}
          mb={1}
        >
          Lifestyle collection
        </H4>

        <H1
          fontSize={{ sm: 60, xs: 44 }}
          lineHeight={1}
          textTransform="uppercase"
        >
          Men
        </H1>

        <H4
          fontSize={{ sm: 30, xs: 24 }}
          lineHeight={1}
          mt={1.5}
          textTransform="uppercase"
        >
          SALE UP TO <Span color="primary.main">30% OFF</Span>
        </H4>

        <Paragraph fontSize={{ sm: 18, xs: 14 }} mb={4}>
          Get Free Shipping on orders over $99.00
        </Paragraph>
        <Button variant="contained" size="large" color="dark">
          Shop Now
        </Button>
      </Box>
    </>
  );

  const carouselContent2 = (
    <>
      <Box pl={{ md: 10 }}>
        <H4
          lineHeight={1}
          fontWeight={400}
          textTransform="uppercase"
          fontSize={{ sm: 30, xs: 24 }}
          mb={1}
        >
          Lifestyle collection
        </H4>

        <H1
          fontSize={{ sm: 60, xs: 44 }}
          lineHeight={1}
          textTransform="uppercase"
        >
          Women
        </H1>

        <H4
          fontSize={{ sm: 30, xs: 24 }}
          lineHeight={1}
          mt={1.5}
          textTransform="uppercase"
        >
          SALE UP TO <Span color="primary.main">35% OFF</Span>
        </H4>

        <Paragraph fontSize={{ sm: 18, xs: 14 }} mb={4}>
          Get Free Shipping on orders over $99.00
        </Paragraph>
        <Button variant="contained" size="large" color="dark">
          Shop Now
        </Button>
      </Box>
    </>
  );

  return (
    <Box pt={3}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={9} xs={12}>
            <Carousel
              spacing="0px"
              totalSlides={2}
              infinite={true}
              showDots={true}
              autoPlay={false}
              visibleSlides={1}
              showArrow={false}
              sx={carouselStyles}
            >
              <CarouselCard4
                content={carouselContent1}
                mode="light"
                bgImage="/assets/images/banners/banner-15.jpg"
              />
              <CarouselCard4
                content={carouselContent2}
                mode="light"
                bgImage="/assets/images/banners/banner-25.jpg"
              />
            </Carousel>
          </Grid>

          <Grid item md={3} xs={12}>
            <Stack
              height="100%"
              direction={{ md: "column", sm: "row", xs: "column" }}
              spacing={2}
            >
              <BannerCard3 flex={1} img="/assets/images/banners/banner-17.jpg">
                <Paragraph fontSize={13} letterSpacing={1.2}>
                  NEW ARRIVALS
                </Paragraph>

                <H4 fontSize={20} lineHeight={1.2} mb={2}>
                  SUMMER
                  <br />
                  SALE 20% OFF
                </H4>

                <NavLink3 href="#" text="Shop Now" color="dark.main" />
              </BannerCard3>

              <BannerCard3 flex={1} img="/assets/images/banners/banner-16.jpg">
                <Paragraph fontSize={13} letterSpacing={1.2}>
                  GAMING 4K
                </Paragraph>

                <H4 fontSize={20} lineHeight={1.2} mb={2}>
                  DESKTOPS &
                  <br />
                  LAPTOPS
                </H4>

                <NavLink3 href="#" text="Shop Now" color="dark.main" />
              </BannerCard3>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section1;
