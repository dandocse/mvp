import { Container, Grid, Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import SaleLayout from "components/layouts/SaleLayout";
import ProductCard1 from "components/product-cards/ProductCard1";
import SEO from "components/SEO";
import { Span } from "components/Typography";
import productDatabase from "data/product-database";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { renderProductCount } from "../src/lib";

const PRODUCT_PER_PAGE = 28;

const SalePage2: NextPage = () => {
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState<any[]>([]);

  const handlePageChange = (_, page: number) => setPage(page);

  useEffect(() => {
    setProductList(
      productDatabase.slice(
        page * PRODUCT_PER_PAGE,
        (page + 1) * PRODUCT_PER_PAGE
      )
    );
  }, [page]);

  return (
    <SaleLayout type="two">
      <SEO title="Sale page v2" />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3} minHeight={500}>
          {productList.map((item, ind) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
              <ProductCard1 {...item} />
            </Grid>
          ))}
        </Grid>

        <FlexBetween flexWrap="wrap" my={8}>
          <Span>
            {renderProductCount(page, PRODUCT_PER_PAGE, productDatabase.length)}
          </Span>

          <Pagination
            page={page}
            color="primary"
            variant="outlined"
            onChange={handlePageChange}
            count={Math.ceil(productDatabase.length / PRODUCT_PER_PAGE)}
          />
        </FlexBetween>
      </Container>
    </SaleLayout>
  );
};

export default SalePage2;
