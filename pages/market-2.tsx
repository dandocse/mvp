import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Setting from "components/Setting";
import { NextPage } from "next";
import Section1 from "pages-sections/market-2/Section1";
import Section2 from "pages-sections/market-2/Section2";
import Section3 from "pages-sections/market-2/Section3";
import Section4 from "pages-sections/market-2/Section4";
import Section5 from "pages-sections/market-2/Section5";
import Section6 from "pages-sections/market-2/Section6";
import Section7 from "pages-sections/market-2/Section7";
import Section8 from "pages-sections/market-2/Section8";
import Section9 from "pages-sections/market-2/Section9";
import api from "utils/api/fashion-shop-2";

// =======================================================
type MarketProps = {
  products: any[];
  featureProducts: any[];
};
// =======================================================

const Market: NextPage<MarketProps> = (props) => {
  const theme = useTheme();

  return (
    <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Market v2" />
      <Box bgcolor="#F6F6F6">
        {/* HERO SLIDER AND GRID */}
        <Section1 />

        {/* SERVICE CARDS */}
        <Section2 />

        {/* CATEGORIES AND ANIMATED OFFER BANNER */}
        <Section3 />

        {/* DEALS OF THE DAY AND OFFER BANNERS */}
        <Section4 products={props.products} />

        {/* PRODUCT ROW WITH CATEFORY LIST */}
        <Section5 products={props.products} />

        {/* OFFER BANNER */}
        <Section6 />

        {/* PRODUCT ROW WITH CATEFORY LIST */}
        <Section5 products={props.products.slice(1)} />

        {/* OFFER BANNER */}
        <Section7 />

        {/* PRODUCT ROW WITH CATEFORY LIST */}
        <Section5 products={props.products.slice(3)} />

        {/*  FEATURED BRANDS */}
        <Section8 />

        {/* SELECTED PRODUCTS */}
        <Section9 products={props.products} />
      </Box>

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const products = await api.getProducts();
  const featureProducts = await api.getFeatureProducts();

  return { props: { products, featureProducts } };
}

export default Market;
