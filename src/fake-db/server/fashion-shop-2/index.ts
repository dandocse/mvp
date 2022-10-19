import Mock from "fake-db/mock";
import {
  bestWeekProducts,
  blogs,
  latestProducts,
  popularProducts,
  products,
  saleProducts,
} from "./data";

// get all products
Mock.onGet("/api/fashion-shop-2/products").reply(() => {
  try {
    return [200, products];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

// get feature products
Mock.onGet("/api/fashion-shop-2/feature-products").reply(() => {
  try {
    return [200, products];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

// get sale products
Mock.onGet("/api/fashion-shop-2/sale-products").reply(() => {
  try {
    return [200, saleProducts];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

// get latest products
Mock.onGet("/api/fashion-shop-2/lasest-products").reply(() => {
  try {
    return [200, latestProducts];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

// get best week products
Mock.onGet("/api/fashion-shop-2/best-week-products").reply(() => {
  try {
    return [200, bestWeekProducts];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

// get popular products
Mock.onGet("/api/fashion-shop-2/popular-products").reply(() => {
  try {
    return [200, popularProducts];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

// get blogs
Mock.onGet("/api/fashion-shop-2/blogs").reply(() => {
  try {
    return [200, blogs];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});
