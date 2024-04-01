import React from "react";
import ProductContextData from "./ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {

  return (
      <ProductContextData>
        <Router>
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route path="/productDetails/:productID" element={<ProductDetailsPage />} />
          </Routes>
        </Router>
      </ProductContextData>
  )

}

export default App;
