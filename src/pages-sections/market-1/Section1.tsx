import { Box, Container } from "@mui/material";
import CarouselCard1 from "components/carousel-cards/CarouselCard1";
import Carousel from "components/carousel/Carousel";
import { NextPage } from "next";
import Models from "models";

// ======================================================
type Props = { carouselData: Models["MainCarouselItem"][] };
// ======================================================

const Section1: NextPage<Props> = ({ carouselData }) => {
  return (
    <Box bgcolor="white" mb={7.5}>
      <Container sx={{ py: 4 }}>
        <Carousel
          totalSlides={2}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}
          spacing="0px"
        >
          {carouselData.map((data, ind) => {
            return <CarouselCard1 {...data} key={ind} />;
          })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Section1;
