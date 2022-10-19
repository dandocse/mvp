import { Box, Container } from "@mui/material";
import BazaarImage from "components/BazaarImage";
import Carousel from "components/carousel/Carousel";
import { FlexRowCenter } from "components/flex-box";
import { H2 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useState } from "react";

const brands = [
  "/assets/images/brands/alibaba.png",
  "/assets/images/brands/amazon.png",
  "/assets/images/brands/levis.png",
  "/assets/images/brands/lotto.png",
  "/assets/images/brands/raymond.png",
  "/assets/images/brands/samsung.png",
  "/assets/images/brands/alibaba.png",
];

const Section8 = () => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);

  useEffect(() => {
    if (width < 650) setVisibleSlides(2);
    else if (width < 800) setVisibleSlides(3);
    else if (width < 1024) setVisibleSlides(4);
    else setVisibleSlides(5);
  }, [width]);

  return (
    <Container sx={{ my: 8 }}>
      <H2 fontSize={20} mb={3}>
        Featured Brands
      </H2>

      <Box padding={4} bgcolor="white">
        <Carousel
          autoPlay
          showArrow={false}
          totalSlides={brands.length}
          visibleSlides={visibleSlides}
          sx={{ ":hover": { cursor: "grab" } }}
        >
          {brands.map((item, index) => (
            <FlexRowCenter
              maxWidth={110}
              height="100%"
              margin="auto"
              key={index}
            >
              <BazaarImage
                src={item}
                alt="brand"
                width="100%"
                sx={{ filter: "grayscale(1)" }}
              />
            </FlexRowCenter>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default Section8;
