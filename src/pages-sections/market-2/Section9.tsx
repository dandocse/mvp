import { Box, Button, Container } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/CarouselStyled";
import { FlexBetween, FlexBox } from "components/flex-box";
import ProductCard20 from "components/product-cards/ProductCard20";
import { H2, Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import shuffle from "lodash/shuffle";
import Models from "models";
import { FC, useEffect, useState } from "react";

// ======================================================================
type Section9Props = { products: Models["Product"][] };
// ======================================================================

const Section9: FC<Section9Props> = ({ products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [selected, setSelected] = useState("new");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => setFilteredProducts(shuffle(products)), [selected, products]);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else if (width < 1200) setVisibleSlides(4);
    else setVisibleSlides(5);
  }, [width]);

  const handleSelected = (item: string) => () => setSelected(item);
  const activeColor = (item: string) => (item === selected ? "error" : "dark");

  return (
    <Container sx={{ mb: 8 }}>
      <FlexBetween gap={2} flexWrap="wrap" mb={3}>
        <Box>
          <H2 fontSize={20}>Selected Products</H2>
          <Paragraph>
            All our new arrivals in a exclusive brand selection
          </Paragraph>
        </Box>

        <FlexBox flexWrap="wrap" gap={1} sx={{ "& button": { flexGrow: 1 } }}>
          <Button
            variant="outlined"
            color={activeColor("new")}
            onClick={handleSelected("new")}
          >
            New Arrivals
          </Button>

          <Button
            variant="outlined"
            color={activeColor("best")}
            onClick={handleSelected("best")}
          >
            Best Seller
          </Button>

          <Button
            variant="outlined"
            color={activeColor("popular")}
            onClick={handleSelected("popular")}
          >
            Most Popular
          </Button>

          <Button
            variant="outlined"
            color={activeColor("view")}
            onClick={handleSelected("view")}
          >
            View All
          </Button>
        </FlexBox>
      </FlexBetween>

      <Carousel
        totalSlides={products.length}
        visibleSlides={visibleSlides}
        sx={carouselStyled}
      >
        {filteredProducts.map((product) => (
          <ProductCard20 product={product} key={product.id} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Section9;
