import { Route, Routes } from "react-router-dom";
import { Category } from "./pages/Category";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:opt" element={<Category />} />
      <Route path="/category/:type/:opt" element={<Category />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};
