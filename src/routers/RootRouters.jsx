import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/layouts";
import { Banner, Home, Login, About, PageNotFound, Country } from "../pages";
import { ProtectedRoute, PublicRoute } from "./Middleware";

const RootRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />}>
          <Route index element={<Home />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/country" element={<Country />} />
        </Route>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouters;
