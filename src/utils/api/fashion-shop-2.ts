import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("/api/fashion-shop-2/products");
  return response.data;
};

const getFeatureProducts = async () => {
  const response = await axios.get("/api/fashion-shop-2/feature-products");
  return response.data;
};

const getSaleProducts = async () => {
  const response = await axios.get("/api/fashion-shop-2/sale-products");
  return response.data;
};

const getPopularProducts = async () => {
  const response = await axios.get("/api/fashion-shop-2/popular-products");
  return response.data;
};

const getLatestProducts = async () => {
  const response = await axios.get("/api/fashion-shop-2/lasest-products");
  return response.data;
};

const getBestWeekProducts = async () => {
  const response = await axios.get("/api/fashion-shop-2/best-week-products");
  return response.data;
};

const getBlogs = async () => {
  const response = await axios.get("/api/fashion-shop-2/blogs");
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getBlogs,
  getProducts,
  getSaleProducts,
  getLatestProducts,
  getFeatureProducts,
  getPopularProducts,
  getBestWeekProducts,
};
