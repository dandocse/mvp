import { Button, Container } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/CarouselStyled";
import { FlexRowCenter } from "components/flex-box";
import ProductCard18 from "components/product-cards/ProductCard18";
import { H1, H2, H3, Paragraph, Span } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { FC, Fragment, useEffect, useState } from "react";
import { FashionShop2ProductType } from "./Section4";

// ======================================================================
type Section6Props = {
  products: FashionShop2ProductType[];
};
// ======================================================================

const Section6: FC<Section6Props> = ({ products }) => {
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
    <Fragment>
      <Container sx={{ mt: 8 }}>
        <H2 textAlign="center" mb={4}>
          Featured Products
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

      <FlexRowCenter
        mt={8}
        flexDirection="column"
        sx={{
          color: "#fff",
          textAlign: "center",
          padding: "6rem 2rem",
          backgroundSize: "cover",
          backgroundColor: "grey.500",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(/assets/images/banners/banner-11.jpg)",
        }}
      >
        <H3 fontWeight={400} fontSize={30} lineHeight={1}>
          Extra <Span color="primary.main">30% Off</Span> Online
        </H3>

        <H1 fontSize={50} lineHeight={1} mb={1}>
          Summer Season Sale
        </H1>

        <Paragraph fontWeight={600} fontSize={18} mb={4}>
          Free shipping on orders over $99
        </Paragraph>

        <Button variant="contained" size="large" color="dark">
          Shop Now
        </Button>
      </FlexRowCenter>
    </Fragment>
  );
};

export default Section6;
