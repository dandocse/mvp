import { Grid } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import CategorySectionCreator from "components/CategorySectionCreator";
import NewArrival from "components/icons/NewArrival";
import ProductCard2 from "components/product-cards/ProductCard2";
import React, { FC } from "react";

interface Props {
  newArrivalsList: any[];
}

const Section5: FC<Props> = ({ newArrivalsList }) => {
  return (
    <CategorySectionCreator
      icon={<NewArrival />}
      title="New Arrivals"
      seeMoreLink="#"
    >
      <BazaarCard sx={{ p: 2 }}>
        <Grid container spacing={3}>
          {newArrivalsList.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <ProductCard2 {...item} />
            </Grid>
          ))}
        </Grid>
      </BazaarCard>
    </CategorySectionCreator>
  );
};

export default Section5;
