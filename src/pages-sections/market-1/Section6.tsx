import { Box, Container, Grid } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import CategorySectionHeader from "components/CategorySectionHeader";
import { FlexBox } from "components/flex-box";
import ProductCard1 from "components/product-cards/ProductCard1";
import React, { FC, useState } from "react";
import ProductCategoryItem from "./ProductCategoryItem";

interface Props {
  carBrands: any[];
  carList: any[];
}

const Section6: FC<Props> = ({ carList, carBrands }) => {
  const [selected, setSelected] = useState("");

  const handleCategoryClick = ({
    currentTarget: { id: brand },
  }: React.MouseEvent<HTMLElement>) => {
    if (selected === brand) {
      setSelected("");
    } else setSelected(brand);
    return "";
  };

  return (
    <Container sx={{ mb: "80px" }}>
      <FlexBox gap="1.75rem">
        <BazaarCard
          sx={{
            height: "100%",
            minWidth: "240px",
            padding: "1.25rem",
            borderRadius: "10px",
            display: { xs: "none", md: "block" },
          }}
        >
          {carBrands.map((brand) => (
            <ProductCategoryItem
              id={brand}
              key={brand}
              title={brand}
              sx={{ mb: "0.75rem" }}
              onClick={handleCategoryClick}
              isSelected={selected === brand}
              imgUrl={`/assets/images/brands/${brand}.png`}
            />
          ))}

          <ProductCategoryItem
            id="all"
            title="View All Brands"
            onClick={handleCategoryClick}
            isSelected={selected === "all"}
            sx={{ mt: 8, height: 44, justifyContent: "center" }}
          />
        </BazaarCard>

        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title="Cars" seeMoreLink="#" />

          <Grid container spacing={3}>
            {carList.map((item, ind) => (
              <Grid item lg={4} sm={6} xs={12} key={ind}>
                <ProductCard1 hoverEffect {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </FlexBox>
    </Container>
  );
};

export default Section6;
