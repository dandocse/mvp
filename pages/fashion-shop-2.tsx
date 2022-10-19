import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Setting from "components/Setting";
import { NextPage } from "next";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section2 from "pages-sections/fashion-shop-2/Section2";
import Section3 from "pages-sections/fashion-shop-2/Section3";
import Section4 from "pages-sections/fashion-shop-2/Section4";
import Section5 from "pages-sections/fashion-shop-2/Section5";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import Section7 from "pages-sections/fashion-shop-2/Section7";
import Section8 from "pages-sections/fashion-shop-2/Section8";
import api from "utils/api/fashion-shop-2";

// =======================================================
type FashionShop2Props = {
  blogs: any[];
  products: any[];
  saleProducts: any[];
  latestProducts: any[];
  featureProducts: any[];
  popularProducts: any[];
  bestWeekProducts: any[];
};
// =======================================================

const FashionShop2: NextPage<FashionShop2Props> = (props) => {
  const theme = useTheme();

  return (
    <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Fashion shop template v2" />
      <Box bgcolor="white">
        {/* HERO SECTION CAROUSEL */}
        <Section1 />

        {/* SERVICE CARDS */}
        <Section2 />

        {/* BEST SELLING CATEGORIES */}
        <Section3 />

        {/* BEST SELLING PRODUCTS */}
        <Section4 products={props.products} />

        {/* OFFER BANNERS */}
        <Section5 />

        {/* FEATURED PRODUCTS AND OFFER BANNER */}
        <Section6 products={props.featureProducts} />

        {/* BLOG AND BRAND CAROUSEL */}
        <Section7 blogs={props.blogs} />

        {/* PRODUCT LIST COLUMN */}
        <Section8
          saleProducts={props.saleProducts}
          latestProducts={props.latestProducts}
          popularProducts={props.popularProducts}
          bestWeekProducts={props.bestWeekProducts}
        />
      </Box>

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const blogs = await api.getBlogs();
  const products = await api.getProducts();
  const saleProducts = await api.getSaleProducts();
  const latestProducts = await api.getLatestProducts();
  const popularProducts = await api.getPopularProducts();
  const featureProducts = await api.getFeatureProducts();
  const bestWeekProducts = await api.getBestWeekProducts();

  return {
    props: {
      blogs,
      products,
      saleProducts,
      latestProducts,
      popularProducts,
      featureProducts,
      bestWeekProducts,
    },
  };
}

export default FashionShop2;
