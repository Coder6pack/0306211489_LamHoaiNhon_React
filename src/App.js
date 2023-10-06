import HomePage from "./pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import GioHangPage from "./pages/GioHangPage";
import ThanhToanPage from "./pages/ThanhToanPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/gio-hang" element={<GioHangPage />} />
        <Route path="/thanh-toan-bill" element={<ThanhToanPage />} />
      </Routes>
    </div>
  );
}

export default App;
