import { Box, Container } from "@mui/material";
import CarouselCard1 from "components/carousel-cards/CarouselCard1";
import Carousel from "components/carousel/Carousel";
import { FC } from "react";

// ======================================================
type Props = { data?: any[] };
// ======================================================
const data = [
  {
    title: "Fashionable Collection",
    imgUrl: "/assets/images/products/bag.png",
    description: "Get Free Shipping on all orders over $99.00",
    buttonText: "Shop Now",
    buttonLik: "#",
  },
  {
    title: "Fashionable Collection",
    imgUrl: "/assets/images/products/nike-black.png",
    description: "Get Free Shipping on all orders over $99.00",
    buttonText: "Shop Now",
    buttonLik: "#",
  },
];

const Section1: FC<Props> = () => {
  return (
    <Box bgcolor="grey.100" mb={7.5}>
      <Container sx={{ py: 4 }}>
        <Carousel
          spacing="0px"
          totalSlides={2}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}
        >
          {data.map((item, ind) => (
            <CarouselCard1 {...item} buttonColor="dark" key={ind} />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Section1;
