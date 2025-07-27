import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./master.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HeaderFooter from "./components/HeaderFooter";
import HomePage from "./HomePage";
import Search from "./Search";
import SearchSection from "./components/searchPage/SearchSection";
import RentCar from "./components/RentCar";
import RentDetail from "./components/RentDetail";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./app/store";
import RedirectRoute from "./RedirectRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="search" element={<Search />}>
                <Route index element={<SearchSection />} />
                <Route path=":id" element={<RentCar />} />
                <Route path="detail" element={<RentDetail />} />
              </Route>
            </Route>
          </Route>
          <Route element={<RedirectRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
