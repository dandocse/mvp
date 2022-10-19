import BazaarCard from "components/BazaarCard";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import Category from "components/icons/Category";
import ProductCard6 from "components/product-cards/ProductCard6";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

// =====================================================
type Props = { categoryList: any[] };
// =====================================================

const Section3: FC<Props> = ({ categoryList }) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 650) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <CategorySectionCreator
      icon={<Category color="primary" />}
      title="Top Categories"
      seeMoreLink="#"
    >
      <Carousel totalSlides={5} visibleSlides={visibleSlides}>
        {categoryList.map((item, ind) => (
          <Link href={`/product/search/${item.title}`} key={ind} passHref>
            <a>
              <BazaarCard sx={{ p: 2 }} elevation={0}>
                <ProductCard6
                  title={item.title}
                  subtitle={item.subtitle}
                  imgUrl={item.imgUrl}
                />
              </BazaarCard>
            </a>
          </Link>
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default Section3;
