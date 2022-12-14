import { Box, Container, Grid } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import CategorySectionHeader from "components/CategorySectionHeader";
import DottedStar from "components/icons/DottedStar";
import RankBadge from "components/icons/RankBadge";
import ProductCard4 from "components/product-cards/ProductCard4";
import ProductCard5 from "components/product-cards/ProductCard5";
import Link from "next/link";
import { FC } from "react";

// ==========================================================
type Props = {
  topRatedList: any[];
  topRatedBrands: any[];
};
// ==========================================================

const Section4: FC<Props> = (props) => {
  const { topRatedBrands, topRatedList } = props;
  return (
    <Box mb={7.5}>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={6} xs={12}>
            <CategorySectionHeader
              icon={<RankBadge />}
              title="Top Ratings"
              seeMoreLink="#"
            />

            <BazaarCard sx={{ p: 2 }}>
              <Grid container spacing={4}>
                {topRatedList.map((item) => (
                  <Grid item md={3} sm={6} xs={6} key={item.title}>
                    <Link href={`/product/${item.id}`} passHref>
                      <a>
                        <ProductCard4 {...item} />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </BazaarCard>
          </Grid>

          <Grid item md={6} xs={12}>
            <CategorySectionHeader
              icon={<DottedStar />}
              title="Featured Brands"
              seeMoreLink="#"
            />

            <BazaarCard sx={{ p: 2 }}>
              <Grid container spacing={4}>
                {topRatedBrands.map((item) => (
                  <Grid item sm={6} xs={12} key={item.title}>
                    <Link href={`/product/${item.title}`} passHref>
                      <a>
                        <ProductCard5 {...item} />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </BazaarCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section4;
