import { Box, Chip, Container, Grid, Pagination, styled } from "@mui/material";
import { FlexBetween, FlexBox, FlexRowCenter } from "components/flex-box";
import BeautyProducts from "components/icons/BeautyProducts";
import Camera from "components/icons/Camera";
import Sofa from "components/icons/Sofa";
import WomenDress from "components/icons/WomenDress";
import SaleLayout from "components/layouts/SaleLayout";
import SaleNavbar from "components/navbar/SaleNavbar";
import ProductCard1 from "components/product-cards/ProductCard1";
import SEO from "components/SEO";
import { H1, H5, Span } from "components/Typography";
import productDB from "data/product-database";
import { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { renderProductCount } from "../src/lib";

//  custom styled components
const CategoryBoxWrapper = styled(FlexRowCenter)<{ selected: any }>(
  ({ selected, theme }) => ({
    flex: "1 1 0",
    height: "175px",
    margin: "0.75rem",
    minWidth: "200px",
    cursor: "pointer",
    borderRadius: "8px",
    position: "relative",
    flexDirection: "column",
    transition: "all 250ms ease-in-out",
    border: `1px solid ${theme.palette.grey[400]}`,
    background: selected ? "white" : "transparent",
  })
);

const StyledChip = styled(Chip)<{ selected: any }>(({ selected, theme }) => ({
  top: "1rem",
  right: "1rem",
  fontWeight: 600,
  fontSize: "10px",
  padding: "5px 10px",
  position: "absolute",
  color: selected ? "white" : "inherit",
  boxShadow: selected
    ? "0px 8px 20px -5px rgba(255, 103, 128, 0.9)"
    : "inherit",
  backgroundColor: selected
    ? theme.palette.primary.main
    : theme.palette.grey[300],
}));

const CategoryWrapper = styled(Box)<{ show: any }>(({ show, theme }) => ({
  left: 0,
  zIndex: 99,
  width: "100%",
  position: "fixed",
  top: show ? 0 : -90,
  boxShadow: theme.shadows[2],
  transition: "top 0.3s ease-in-out",
}));

const SalePage1: NextPage = () => {
  const PRODUCT_PER_PAGE = 28;
  const categoryRef = useRef<any>(null);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(1);
  const [productList, setProductList] = useState<any[]>([]);
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  const handlePageChange = (_, page: number) => setPage(page);
  const handleCategoryClick = useCallback(
    (category) => () => setSelected(category),
    []
  );

  useEffect(() => {
    setProductList(
      productDB.slice(page * PRODUCT_PER_PAGE, (page + 1) * PRODUCT_PER_PAGE)
    );
  }, [page]);

  // handle window scroller
  const scroller = useCallback(() => {
    let postionHeight = 0;

    if (categoryRef.current) {
      postionHeight =
        categoryRef.current.offsetTop + categoryRef.current.offsetHeight;
    }

    if (postionHeight && window.pageYOffset > postionHeight) {
      setIsFixedHeader(true);
      return;
    }

    setIsFixedHeader(false);
  }, []);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, [scroller]);

  return (
    <SaleLayout>
      <SEO title="Sale page v1" />
      <Container sx={{ mt: "2rem" }}>
        <CategoryWrapper show={isFixedHeader}>
          <SaleNavbar saleCategoryList={saleCategoryList} />
        </CategoryWrapper>

        <FlexBox mb={4} flexWrap="wrap">
          <H1 color="primary.main" mr={1} lineHeight="1">
            Flash Deals,
          </H1>

          <H1 color="grey.600" lineHeight="1">
            Enjoy Upto 80% discounts
          </H1>
        </FlexBox>

        <Box mb={4} overflow="hidden" ref={categoryRef}>
          <FlexBox m={-1.5} flexWrap="wrap">
            {saleCategoryList.map((item, ind) => {
              const selectedItem = ind === selected;

              return (
                <CategoryBoxWrapper
                  key={ind}
                  selected={selectedItem}
                  onClick={handleCategoryClick(ind)}
                >
                  <item.icon
                    fontSize="inherit"
                    sx={{ fontSize: 44 }}
                    color={selectedItem ? "primary" : "secondary"}
                  />

                  <H5 color={selectedItem ? "primary.main" : "inherit"}>
                    {item.title}
                  </H5>
                  <StyledChip
                    size="small"
                    color="primary"
                    label="Upto 40% off"
                    selected={selectedItem}
                  />
                </CategoryBoxWrapper>
              );
            })}
          </FlexBox>
        </Box>

        <Grid container spacing={3} minHeight={500}>
          {productList.map((item, ind) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
              <ProductCard1 {...item} />
            </Grid>
          ))}
        </Grid>

        <FlexBetween flexWrap="wrap" my={8}>
          <Span>
            {renderProductCount(page, PRODUCT_PER_PAGE, productDB.length)}
          </Span>
          <Pagination
            page={page}
            color="primary"
            variant="outlined"
            onChange={handlePageChange}
            count={Math.ceil(productDB.length / PRODUCT_PER_PAGE)}
          />
        </FlexBetween>
      </Container>
    </SaleLayout>
  );
};

const saleCategoryList = [
  { icon: Sofa, title: "Furniture" },
  { icon: WomenDress, title: "Women" },
  { icon: Camera, title: "Eelctronics" },
  { icon: BeautyProducts, title: "Cosmetics" },
];

export default SalePage1;
