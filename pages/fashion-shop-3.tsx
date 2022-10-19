import { Box } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Navbar from "components/navbar/Navbar";
import SEO from "components/SEO";
import Setting from "components/Setting";
import { NextPage } from "next";
import Section1 from "pages-sections/fashion-shop-3/Section1";
import Section2 from "pages-sections/fashion-shop-3/Section2";
import Section3 from "pages-sections/fashion-shop-3/Section3";
import Section4 from "pages-sections/fashion-shop-3/Section4";
import Section5 from "pages-sections/fashion-shop-3/Section5";
import Section6 from "pages-sections/fashion-shop-3/Section6";
import api from "utils/api/fashion-shop-2";

// =======================================================
type FashionShop3Props = {
  products?: any[];
  featureProducts?: any[];
};
// =======================================================

const FashionShop3: NextPage<FashionShop3Props> = (props) => {
  return (
    <ShopLayout1 showTopbar={false}>
      <SEO title="Fashion shop template v3" />
      <Box bgcolor="white" pb={8}>
        {/* HERO SECTION CAROUSEL AND BANNER GRID */}
        <Section1 />

        {/* BEST SELLING PRODUCTS */}
        <Section2 products={props.products} />

        {/* TOP CATEGORIES */}
        <Section3 />

        {/* OFFER BANNER */}
        <Section4 />

        {/* FEATURED PRODUCTS AND SERVICES */}
        <Section5 products={props.featureProducts} />

        {/* INSTAGRAM PHOTOS */}
        <Section6 />
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

export default FashionShop3;
