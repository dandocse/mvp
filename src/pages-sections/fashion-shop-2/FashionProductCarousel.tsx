import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/CarouselStyled";
import ProductCard18 from "components/product-cards/ProductCard18";
import { H2 } from "components/Typography";
import { FC, Fragment } from "react";

type FashionProductCarouselProps = {
  title: string;
  products: any[];
  visibleSlides: number;
};

const FashionProductCarousel: FC<FashionProductCarouselProps> = ({
  products,
  visibleSlides = 4,
  title = "Featured Products",
}) => {
  return (
    <Fragment>
      <H2 textAlign="center" mb={4}>
        {title}
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
    </Fragment>
  );
};

export default FashionProductCarousel;
