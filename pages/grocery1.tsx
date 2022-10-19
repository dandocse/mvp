import { Stack } from "@mui/material";
import ShopLayout2 from "components/layouts/ShopLayout2";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import SideNavbar from "components/page-sidenav/SideNavbar";
import SEO from "components/SEO";
import Setting from "components/Setting";
import SidenavContainer from "components/sidenav-container/SidenavContainer";
import { NextPage } from "next";
import AllProducts from "pages-sections/grocery1/AllProducts";
import DiscountSection from "pages-sections/grocery1/DiscountSection";
import GrocerySection1 from "pages-sections/grocery1/GrocerySection1";
import ProductCarousel from "pages-sections/grocery1/ProductCarousel";
import ServiceSection2 from "pages-sections/grocery1/ServiceSection2";
import GroceryFooter from "pages-sections/grocery2/GroceryFooter";
import api from "utils/api/grocery1-shop";

// =====================================================
type Grocery1Props = {
  grocery1NavList: any[];
  popularProducts: any[];
  grocery1Services: any[];
  trendingProducts: any[];
  grocery1ProductsList: any[];
};
// =====================================================

const Grocery1: NextPage<Grocery1Props> = (props) => {
  return (
    <ShopLayout2 showNavbar={false} showTopbar={false}>
      <SEO title="Grocery store template v1" />
      <GrocerySection1 />
      <ServiceSection2
        id="grocery1Services"
        services={props.grocery1Services}
      />

      <SidenavContainer
        navFixedComponentID="grocery1Services"
        SideNav={() => <SideNavbar navList={props.grocery1NavList} />}
      >
        <Stack spacing={6} mt={2}>
          <ProductCarousel
            products={props.popularProducts}
            title="Popular Products"
          />
          <ProductCarousel
            products={props.trendingProducts}
            title="Trending Products"
          />
          <AllProducts productsData={props.grocery1ProductsList} />
          <DiscountSection />
          <GroceryFooter />
        </Stack>
      </SidenavContainer>

      <Setting />

      <MobileNavigationBar2>
        <SideNavbar navList={props.grocery1NavList} />
      </MobileNavigationBar2>
    </ShopLayout2>
  );
};

export async function getStaticProps() {
  const popularProducts = await api.getPopularProducts();
  const grocery1Services = await api.getGrocery1Services();
  const trendingProducts = await api.getTrendingProducts();
  const grocery1NavList = await api.getGrocery1Navigation();
  const grocery1ProductsList = await api.getGrocery1Products();

  return {
    props: {
      grocery1NavList,
      popularProducts,
      grocery1Services,
      trendingProducts,
      grocery1ProductsList,
    },
  };
}

export default Grocery1;
