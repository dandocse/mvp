import { Container } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar";
import PageFooter from "components/page-footer/PageFooter";
import SEO from "components/SEO";
import Setting from "components/Setting";
import { NextPage } from "next";
import AllProducts from "pages-sections/grocery3/AllProducts";
import DiscountProducts from "pages-sections/grocery3/DiscountProducts";
import GroceryShopSection1 from "pages-sections/grocery3/Grocery3ShopSection1";
import TopSailedProducts from "pages-sections/grocery3/TopSailedProducts";
import api from "utils/api/grocery3-shop";

// ======================================================
type Grocery3Props = {
  allProducts: any[];
  offerProducts: any[];
  topSailedProducts: any[];
};
// ======================================================

const Grocery3: NextPage<Grocery3Props> = (props) => {
  return (
    <ShopLayout1 showNavbar={false}>
      <SEO title="Grocery store template v3" />
      <GroceryShopSection1 />

      <Container sx={{ mb: 6 }}>
        <DiscountProducts offerProducts={props.offerProducts} />
        <TopSailedProducts productsData={props.topSailedProducts} />
        <AllProducts productsData={props.allProducts} />
      </Container>

      <Setting />
      <MobileNavigationBar />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const allProducts = await api.getGrocery3Products();
  const offerProducts = await api.getGrocery3offerProducts();
  const topSailedProducts = await api.getTopSailedProducts();

  return { props: { allProducts, offerProducts, topSailedProducts } };
}

export default Grocery3;
