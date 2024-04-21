import "./App.css";
import Tables from "./components/Tables";
import ProductSummary from "./components/ProductSummary";
import RetailerSummary from "./components/RetailerSummary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/broken-links" element={<Tables />} />
          <Route path="/retailer-summary" element={<RetailerSummary />} />
          <Route path="/product-summary" element={<ProductSummary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
