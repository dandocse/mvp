import { Box, Container, Grid } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import CategorySectionHeader from "components/CategorySectionHeader";
import { FlexBox } from "components/flex-box";
import ProductCard1 from "components/product-cards/ProductCard1";
import { H3 } from "components/Typography";
import { FC, useEffect, useState } from "react";
import ProductCategoryItem from "./ProductCategoryItem";

interface Props {
  shops: any[];
  title: string;
  brands: any[];
  productList: any[];
}
const Section7: FC<Props> = (props) => {
  const { productList, shops, brands, title } = props;

  const [type, setType] = useState("brands");
  const [selected, setSelected] = useState("");
  const [list, setList] = useState<any[]>([]);

  const handleCategoryClick = (brand: any) => () => {
    if (selected.match(brand)) setSelected("");
    else setSelected(brand);
  };

  useEffect(() => {
    if (type === "brands") setList(brands);
    else setList(shops);
  }, [brands, shops, type]);

  return (
    <Container sx={{ mb: "70px" }}>
      <FlexBox gap="1.75rem">
        <BazaarCard
          sx={{
            height: "100%",
            padding: "1.25rem",
            borderRadius: "10px",
            display: { xs: "none", md: "block" },
          }}
        >
          <FlexBox mt={-1} mb={1}>
            <H3
              fontSize={20}
              fontWeight={600}
              padding="0.5rem 1rem"
              style={{ cursor: "pointer" }}
              onClick={() => setType("brands")}
              color={type === "brands" ? "grey.900" : "grey.600"}
            >
              Brands
            </H3>
            <H3
              fontSize={20}
              lineHeight="1.3"
              color="grey.400"
              fontWeight={600}
              paddingTop="0.5rem"
            >
              |
            </H3>
            <H3
              fontSize={20}
              fontWeight={600}
              padding="0.5rem 1rem"
              style={{ cursor: "pointer" }}
              onClick={() => setType("shops")}
              color={type === "shops" ? "grey.900" : "grey.600"}
            >
              Shops
            </H3>
          </FlexBox>

          {list.map((brand) => (
            <ProductCategoryItem
              key={brand}
              title={brand}
              isSelected={!!selected.match(brand)}
              onClick={handleCategoryClick(brand)}
              imgUrl={`/assets/images/${type}/${brand}.png`}
              sx={{
                mb: "0.75rem",
                bgcolor: selected.match(brand) ? "white" : "grey.100",
              }}
            />
          ))}

          <ProductCategoryItem
            title={`View All ${type}`}
            isSelected={!!selected.match(`all-${type}`)}
            onClick={handleCategoryClick(`all-${type}`)}
            sx={{ mt: 8, bgcolor: selected.match(`all-${type}`) }}
          />
        </BazaarCard>

        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title={title} seeMoreLink="#" />

          <Grid container spacing={3}>
            {productList.map((item, ind) => (
              <Grid item lg={4} sm={6} xs={12} key={ind}>
                <ProductCard1 off={25} hoverEffect {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </FlexBox>
    </Container>
  );
};

export default Section7;
