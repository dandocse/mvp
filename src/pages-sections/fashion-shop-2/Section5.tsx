import { Container, Grid } from "@mui/material";
import BannerCard1 from "components/banners/BannerCard1";
import BannerCard2 from "components/banners/BannerCard2";

const Section5 = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <BannerCard1
            url="#"
            title="For Men's"
            subTitle="Starting At $29"
            img="/assets/images/banners/men's-fashion.jpg"
          />
        </Grid>

        <Grid item md={4} xs={12}>
          <BannerCard2
            url="#"
            text1="Up to 20% Off"
            text2="Black Friday"
            text3="Sale"
            img="/assets/images/banners/banner2.jpg"
          />
        </Grid>

        <Grid item md={4} xs={12}>
          <BannerCard1
            url="#"
            title="For Women's"
            subTitle="25% Off"
            img="/assets/images/banners/womens-fashion.jpg"
            contentPosition="right"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section5;
