import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Setting from "components/Setting";
import { NextPage } from "next";
import Section1 from "pages-sections/market-1/Section1";
import Section10 from "pages-sections/market-1/Section10";
import Section11 from "pages-sections/market-1/Section11";
import Section12 from "pages-sections/market-1/Section12";
import Section13 from "pages-sections/market-1/Section13";
import Section2 from "pages-sections/market-1/Section2";
import Section3 from "pages-sections/market-1/Section3";
import Section4 from "pages-sections/market-1/Section4";
import Section5 from "pages-sections/market-1/Section5";
import Section6 from "pages-sections/market-1/Section6";
import Section7 from "pages-sections/market-1/Section7";
import Section8 from "pages-sections/market-1/Section8";
import Models from "models";
import api from "utils/api/market-1";

// =================================================================
type MarketProps = {
  carList?: any[];
  carBrands?: any[];
  moreItems?: any[];
  mobileList?: any[];
  opticsList?: any[];
  serviceList?: any[];
  opticsShops?: any[];
  mobileShops?: any[];
  mobileBrands?: any[];
  opticsBrands?: any[];
  topCategories?: any[];
  flashDealsData?: any[];
  topRatedBrands?: any[];
  newArrivalsList?: any[];
  bigDiscountList?: any[];
  mainCarouselData?: [Models["MainCarouselItem"]];
  topRatedProducts?: any[];
  bottomCategories?: any[];
};
// =================================================================

const MarketShop: NextPage<MarketProps> = (props) => {
  return (
    <ShopLayout1>
      <SEO title="Market v1" />

      {/* HERO SLIDER SECTION */}
      <Section1 carouselData={props.mainCarouselData} />

      {/* FLASH DEALS SECTION */}
      <Section2 flashDeals={props.flashDealsData} />

      {/* TOP CATEGORIES */}
      <Section3 categoryList={props.topCategories} />

      {/* TOP RATED PRODUCTS */}
      <Section4
        topRatedList={props.topRatedProducts}
        topRatedBrands={props.topRatedBrands}
      />

      {/* NEW ARRIVAL LIST */}
      <Section5 newArrivalsList={props.newArrivalsList} />

      {/* BIG DISCOUNTS */}
      <Section13 bigDiscountList={props.bigDiscountList} />

      {/* CAR LIST */}
      <Section6 carBrands={props.carBrands} carList={props.carList} />

      {/* MOBILE PHONES */}
      <Section7
        shops={props.mobileShops}
        brands={props.mobileBrands}
        title="Mobile Phones"
        productList={props.mobileList}
      />

      {/* PROMO BANNERS */}
      <Section8 />

      {/* OPTICS / WATHCH */}
      <Section7
        title="Optics / Watch"
        shops={props.opticsShops}
        brands={props.opticsBrands}
        productList={props.opticsList}
      />

      {/* CATEGORIES */}
      <Section10 categories={props.bottomCategories} />

      {/* MORE FOR YOU */}
      <Section11 moreItems={props.moreItems} />

      {/* SERVICE CARDS */}
      <Section12 serviceList={props.serviceList} />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const carList = await api.getCarList();
  const carBrands = await api.getCarBrands();
  const moreItems = await api.getMoreItems();
  const mobileList = await api.getMobileList();
  const opticsList = await api.getOpticsList();
  const mobileShops = await api.getMobileShops();
  const opticsShops = await api.getOpticsShops();
  const serviceList = await api.getServiceList();
  const mobileBrands = await api.getMobileBrands();
  const flashDealsData = await api.getFlashDeals();
  const opticsBrands = await api.getOpticsBrands();
  const bottomCategories = await api.getCategories();
  const topCategories = await api.getTopCategories();
  const topRatedBrands = await api.getTopRatedBrand();
  const mainCarouselData = await api.getMainCarousel();
  const newArrivalsList = await api.getNewArrivalList();
  const bigDiscountList = await api.getBigDiscountList();
  const topRatedProducts = await api.getTopRatedProduct();

  return {
    props: {
      carList,
      carBrands,
      moreItems,
      mobileList,
      opticsList,
      serviceList,
      mobileShops,
      opticsShops,
      mobileBrands,
      opticsBrands,
      topCategories,
      flashDealsData,
      topRatedBrands,
      newArrivalsList,
      bigDiscountList,
      mainCarouselData,
      topRatedProducts,
      bottomCategories,
    },
  };
}

export default MarketShop;
