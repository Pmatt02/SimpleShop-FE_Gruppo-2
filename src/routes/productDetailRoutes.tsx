import { Route } from "react-router-dom";
import { ProductDetailPage } from "../pages/ProductDetailPage";


export const productDetailRoutes = (
  <Route path="/product/:id" element={<ProductDetailPage />} />
);