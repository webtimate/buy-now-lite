import "./App.css";
import Tables from "./components/Tables";
import ProductSummary from "./components/ProductSummary";
import RetailerSummary from "./components/RetailerSummary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import GlobalRetailManagement from "./components/GlobalRetailManagement";
import WebsiteManagement from "./components/WebsiteManagement";
import NotFound from "./components/NotFound";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buy-now-lite" element={<Tables />} />
          <Route path="/broken-links" element={<Tables />} />
          <Route
            path="/retailer-summary"
            element={<RetailerSummary {...props} />}
          />
          <Route path="/product-summary" element={<ProductSummary />} />
          <Route
            path="/global-retailer-management"
            element={<GlobalRetailManagement />}
          />
          <Route path="/website-management" element={<WebsiteManagement />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
