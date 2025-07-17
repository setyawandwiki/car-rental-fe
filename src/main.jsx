import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./master.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HeaderFooter from "./components/HeaderFooter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index element={<h1>test</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
