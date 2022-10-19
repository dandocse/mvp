import { Container } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/CarouselStyled";
import ProductCard18 from "components/product-cards/ProductCard18";
import { H2 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { FC, useEffect, useState } from "react";

export type FashionShop2ProductType = {
  url: string;
  img: string;
  name: string;
  price: number;
  reviews: number;
  category: string;
  id: number | string;
};

// ======================================================================
type Section4Props = {
  products: FashionShop2ProductType[];
};
// ======================================================================

const Section4: FC<Section4Props> = ({ products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <Container sx={{ mt: 8 }}>
      <H2 textAlign="center" mb={4}>
        Best Selling Product
      </H2>

      <Carousel
        totalSlides={products.length}
        visibleSlides={visibleSlides}
        sx={carouselStyled}
      >
        {products.map((product) => (
          <ProductCard18 key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Section4;
