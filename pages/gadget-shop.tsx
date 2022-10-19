import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Setting from "components/Setting";
import { NextPage } from "next";
import Section1 from "pages-sections/gadget-shop/Section1";
import Section2 from "pages-sections/gadget-shop/Section2";
import Section3 from "pages-sections/gadget-shop/Section3";
import Section4 from "pages-sections/gadget-shop/Section4";
import Section6 from "pages-sections/gadget-shop/Section6";
import Section7 from "pages-sections/gadget-shop/Section7";
import fashionApi from "utils/api/fashion-shop";
import api from "utils/api/gadget-shop";

// ============================================================
type GadgetShopProps = {
  twoBanner: any[];
  blogLists: any[];
  topPickList: any[];
  mainCarousel: any[];
  mostViewedList: any[];
  newArrivalsData: any[];
  featuredCategories: any[];
};
// ============================================================

const GadgetShop: NextPage<GadgetShopProps> = (props) => {
  return (
    <ShopLayout1>
      <SEO title="Gadget shop template" />
      <Section1
        mainCarousel={props.mainCarousel}
        topPickList={props.topPickList}
      />
      <Section2 featuredCategories={props.featuredCategories} />
      <Section3 bannerData={props.twoBanner} />
      <Section4 mostViewedList={props.mostViewedList} />
      <Section3 bannerData={props.newArrivalsData} />
      <Section6 />
      <Section7 blogLists={props.blogLists} />

      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const twoBanner = await api.getTwoBanner();
  const blogLists = await api.getBlogLists();
  const topPickList = await api.getTopPicksList();
  const mainCarousel = await api.getMainCarousel();
  const mostViewedList = await api.getMostViewedList();
  const newArrivalsData = await fashionApi.getNewArrivals();
  const featuredCategories = await api.getFeaturedCategories();
  return {
    props: {
      blogLists,
      twoBanner,
      topPickList,
      mainCarousel,
      mostViewedList,
      newArrivalsData,
      featuredCategories,
    },
  };
}

export default GadgetShop;
