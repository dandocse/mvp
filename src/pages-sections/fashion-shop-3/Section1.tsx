import { Box, Button, Container, Grid } from "@mui/material";
import BannerCard1 from "components/banners/BannerCard1";
import CarouselCard4 from "components/carousel-cards/CarouselCard4";
import Carousel from "components/carousel/Carousel";
import { H1, H4, Paragraph, Span } from "components/Typography";
import WhiteButton from "components/WhiteButton";
import { FC } from "react";

// ======================================================
type Props = { data?: any[] };
// ======================================================

const Section1: FC<Props> = () => {
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
        <WhiteButton size="large">Shop Now</WhiteButton>
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
        <WhiteButton size="large">Shop Now</WhiteButton>
      </Box>
    </>
  );

  return (
    <Box pt={3}>
      <Container>
        <Carousel
          spacing="0px"
          totalSlides={2}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}
          sx={{
            mb: 3,
            overflow: "hidden",
            "& .carousel__dot-group": {
              mt: 0,
              left: 0,
              right: 0,
              bottom: 10,
              position: "absolute",
              "& div": {
                borderColor: "#fff",
                "::after": { backgroundColor: "#fff" },
              },
            },
          }}
        >
          <CarouselCard4
            content={carouselContent1}
            mode="dark"
            bgImage="/assets/images/banners/banner-24.jpg"
          />
          <CarouselCard4
            content={carouselContent2}
            mode="dark"
            bgImage="/assets/images/banners/banner-23.jpg"
          />
        </Carousel>

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <BannerCard1
              url="#"
              title="For Men's"
              subTitle="Starting At $29"
              img="/assets/images/banners/men.jpg"
              sx={{ borderRadius: 0 }}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <BannerCard1
              url="#"
              subTitle="25% Off"
              title="For Women's"
              contentPosition="right"
              img="/assets/images/banners/banner-12.jpg"
              sx={{ borderRadius: 0 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section1;
