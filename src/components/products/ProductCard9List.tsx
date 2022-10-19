import { Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import ProductCard9 from "components/product-cards/ProductCard9";
import productDatabase from "data/product-database";
import React from "react";
import { Span } from "../Typography";

// ==========================================================
type ProductCard9ListProps = {};
// ==========================================================

const ProductCard9List: React.FC<ProductCard9ListProps> = () => {
  return (
    <div>
      {productDatabase.slice(95, 104).map((item, ind) => (
        <ProductCard9 key={ind} {...item} />
      ))}

      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </div>
  );
};

export default ProductCard9List;
