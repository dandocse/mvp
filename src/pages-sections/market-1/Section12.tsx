import { Container, Grid } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import BazaarIconButton from "components/BazaarIconButton";
import appIcons from "components/icons";
import { H4, Span } from "components/Typography";
import React, { FC } from "react";

interface Props {
  serviceList: any[];
}
const Section12: FC<Props> = ({ serviceList }) => {
  return (
    <Container sx={{ mb: "70px" }}>
      <Grid container spacing={3}>
        {serviceList.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <Grid item lg={3} md={6} xs={12} key={ind}>
              <BazaarCard
                hoverEffect
                sx={{
                  p: "3rem",
                  height: "100%",
                  display: "flex",
                  borderRadius: "8px",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <BazaarIconButton
                  fontSize="1.75rem"
                  height={64}
                  width={64}
                  bgcolor="grey.200"
                >
                  <Icon fontSize="inherit" />
                </BazaarIconButton>

                <H4 mt={2.5} mb={1.25} textAlign="center">
                  {item.title}
                </H4>
                <Span textAlign="center" color="grey.600">
                  We offer competitive prices on our 100 million plus product
                  any range.
                </Span>
              </BazaarCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

// const serviceList = [
//   {
//     icon: Truck,
//     title: 'Worldwide Delivery',
//   },
//   {
//     icon: CreditCardVerified,
//     title: 'Safe Payment',
//   },
//   {
//     icon: Shield,
//     title: 'Shop With Confidence',
//   },
//   {
//     icon: CustomerService,
//     title: '24/7 Support',
//   },
// ]

export default Section12;
