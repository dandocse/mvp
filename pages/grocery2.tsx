import { Box, Stack } from "@mui/material";
import ShopLayout2 from "components/layouts/ShopLayout2";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import Grocery2SideNav from "components/page-sidenav/Grocery2Sidenav";
import Scrollbar from "components/Scrollbar";
import SEO from "components/SEO";
import Setting from "components/Setting";
import SidenavContainer from "components/sidenav-container/SidenavContainer";
import { NextPage } from "next";
import GroceryFooter from "pages-sections/grocery2/GroceryFooter";
import GrocerySection1 from "pages-sections/grocery2/GrocerySection1";
import GrocerySection2 from "pages-sections/grocery2/GrocerySection2";
import GrocerySection3 from "pages-sections/grocery2/GrocerySection3";
import GrocerySection6 from "pages-sections/grocery2/GrocerySection6";
import GrocerySection9 from "pages-sections/grocery2/GrocerySection9";
import ProductCarousel from "pages-sections/grocery2/ProductCarousel";
import api from "utils/api/grocery2-shop";

// ========================================================
type Grocery2Props = {
  section2Services: any[];
  section3Category: any[];
  section4Products: any[];
  section5Products: any[];
  section6CardList: any[];
  section7Products: any[];
  section8Products: any[];
  section9Testimonials: any[];
  groceryNavigationList: any[];
};
// ========================================================

const Grocery2: NextPage<Grocery2Props> = (props) => {
  return (
    <ShopLayout2 showTopbar={false}>
      <SEO title="Grocery store template v2" />

      <Box id="grocerySection" />

      <SidenavContainer
        navFixedComponentID="grocerySection"
        SideNav={() => (
          <Grocery2SideNav groceryNavigation={props.groceryNavigationList} />
        )}
      >
        <Stack spacing={6}>
          <GrocerySection1 />
          <GrocerySection2 services={props.section2Services} />
          <GrocerySection3 categories={props.section3Category} />
          <ProductCarousel
            title="Featured Items"
            products={props.section4Products}
          />
          <ProductCarousel
            title="Best Seller in Your Area"
            products={props.section5Products}
          />
          <GrocerySection6 cardList={props.section6CardList} />
          <ProductCarousel
            title="Best of Home Essentials"
            products={props.section7Products}
          />
          <ProductCarousel
            title="Snacks, Drinks, Dairy & More"
            products={props.section8Products}
          />
          <GrocerySection9 testimonials={props.section9Testimonials} />
          <GroceryFooter />
        </Stack>
      </SidenavContainer>

      <Setting />

      <MobileNavigationBar2>
        <Scrollbar>
          <Grocery2SideNav groceryNavigation={props.groceryNavigationList} />
        </Scrollbar>
      </MobileNavigationBar2>
    </ShopLayout2>
  );
};

export async function getStaticProps() {
  const section2 = await api.getSection2Services();
  const section4 = await api.getSection4Products();
  const section5 = await api.getSection5Products();
  const section6 = await api.getSection6CardList();
  const section7 = await api.getSection7Products();
  const section8 = await api.getSection8Products();
  const section3 = await api.getSection3Categories();
  const section9 = await api.getSection9Testimonials();
  const groceryNavigationList = await api.getGroceryNavigation();

  return {
    props: {
      groceryNavigationList,
      section2Services: section2,
      section3Category: section3,
      section4Products: section4,
      section5Products: section5,
      section6CardList: section6,
      section7Products: section7,
      section8Products: section8,
      section9Testimonials: section9,
    },
  };
}

export default Grocery2;
