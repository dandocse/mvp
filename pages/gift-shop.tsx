import { Box, Container, styled } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import PageFooter from "components/page-footer/PageFooter";
import SideNavbar from "components/page-sidenav/SideNavbar";
import SEO from "components/SEO";
import Setting from "components/Setting";
import { NextPage } from "next";
import GiftShopAllProducts from "pages-sections/giftshop/GiftShopAllProducts";
import GiftShopPopularItems from "pages-sections/giftshop/GiftShopPopularItems";
import GiftShopSection1 from "pages-sections/giftshop/GiftShopSection1";
import GiftShopSection3 from "pages-sections/giftshop/GiftShopSection3";
import GiftShopServices from "pages-sections/giftshop/GiftShopServices";
import GiftShopTopSales from "pages-sections/giftshop/GiftShopTopSales";
import TopCategorySection from "pages-sections/giftshop/TopCategorySection";
import { useEffect, useRef, useState } from "react";
import api from "utils/api/gift-shop";
import { layoutConstant } from "utils/constants";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    "& .MuiPaper-root": { borderRadius: 0 },
    [theme.breakpoints.down("md")]: { display: "none" },
  },
  ".pageContent": {
    left: "unset",
    position: "relative",
    marginLeft: "1.75rem",
    width: `calc(100% - 2.5rem - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      "& .MuiGrid-item": { paddingLeft: 0 },
      "& .categories": { marginLeft: "-1.75rem" },
    },
  },
}));

// ========================================================
type GiftShopProps = {
  giftShopNavList: any[];
  popularProducts: any[];
  giftShopProducts: any[];
  topSailedProducts: any[];
  giftShopServicesList: any[];
  giftShopTopCategories: any[];
};
// ========================================================

const GiftShop: NextPage<GiftShopProps> = (props) => {
  const pageContentRef = useRef<HTMLElement>();
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => setSidebarHeight(pageContentRef.current.offsetHeight), []);

  return (
    <ShopLayout1 showTopbar={false}>
      <SEO title="Gift shop template" />
      <GiftShopSection1 />

      <StyledContainer sx={{ mb: 6 }}>
        <Box className="sidenav">
          <SideNavbar
            lineStyle="dash"
            sidebarStyle="style2"
            navList={props.giftShopNavList}
            sidebarHeight={sidebarHeight || "85vh"}
          />
        </Box>

        <Box className="pageContent" ref={pageContentRef}>
          <GiftShopServices serviceData={props.giftShopServicesList} />
          <GiftShopSection3 />

          <Box my={6} className="categories">
            <TopCategorySection categoryList={props.giftShopTopCategories} />
          </Box>
        </Box>
      </StyledContainer>

      <GiftShopPopularItems productsData={props.popularProducts} />
      <GiftShopTopSales productsData={props.topSailedProducts} />
      <GiftShopAllProducts productsData={props.giftShopProducts} />

      <Setting />

      <MobileNavigationBar2>
        <SideNavbar
          navList={props.giftShopNavList}
          lineStyle="dash"
          sidebarStyle="style2"
        />
      </MobileNavigationBar2>
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const popularProducts = await api.getPopularProducts();
  const giftShopProducts = await api.getGiftShopProducts();
  const giftShopNavList = await api.getGiftShopNavigation();
  const topSailedProducts = await api.getTopSailedProducts();
  const giftShopServicesList = await api.getGiftShopServiceList();
  const giftShopTopCategories = await api.getGiftShopTopCategories();

  return {
    props: {
      giftShopNavList,
      popularProducts,
      giftShopProducts,
      topSailedProducts,
      giftShopServicesList,
      giftShopTopCategories,
    },
  };
}

export default GiftShop;
