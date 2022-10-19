import { Box, Container, Divider, Grid } from "@mui/material";
import BazaarImage from "components/BazaarImage";
import BlogCard2 from "components/blog-cards/BlogCard2";
import Carousel from "components/carousel/Carousel";
import { FlexRowCenter } from "components/flex-box";
import { H2 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { FC, useEffect, useState } from "react";

const brands = [
  "/assets/images/brands/alibaba.png",
  "/assets/images/brands/amazon.png",
  "/assets/images/brands/levis.png",
  "/assets/images/brands/lotto.png",
  "/assets/images/brands/raymond.png",
  "/assets/images/brands/samsung.png",
  "/assets/images/brands/alibaba.png",
];

// ======================================================================
type Blogs = {
  url: string;
  img: string;
  date: string;
  title: string;
  id: string | number;
  description: string;
};

type Section7Props = { blogs: Blogs[] };
// ======================================================================

const Section7: FC<Section7Props> = ({ blogs }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);

  useEffect(() => {
    if (width < 370) setVisibleSlides(2);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else setVisibleSlides(5);
  }, [width]);

  return (
    <Container sx={{ mt: 8 }}>
      <H2 textAlign="center" mb={4}>
        Latest Articles
      </H2>

      <Grid container spacing={3}>
        {blogs.map((item) => (
          <Grid item md={4} xs={12} key={item.id}>
            <BlogCard2
              date={item.date}
              image={item.img}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>

      <Box mt={10}>
        <Divider sx={{ mb: 4, borderColor: "grey.400" }} />

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

        <Divider sx={{ mt: 4, borderColor: "grey.400" }} />
      </Box>
    </Container>
  );
};

export default Section7;
