import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/layouts";
import { Banner, Home, Login, PageNotFound } from "../pages";
import { ProtectedRoute, PublicRoute } from "./Middleware";

const RootRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />}>
          <Route index element={<Home />} />
          <Route path="/banner" element={<Banner />} />
        </Route>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouters;
