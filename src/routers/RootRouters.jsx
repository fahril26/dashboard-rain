import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/layouts";
import {
  Banner,
  Home,
  Login,
  About,
  PageNotFound,
  Country,
  Province,
  City,
  Office,
  Films,
} from "../pages";
import { ProtectedRoute, PublicRoute } from "./Middleware";

const RootRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/films" element={<Films />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/country" element={<Country />} />
          <Route path="/province" element={<Province />} />
          <Route path="/city" element={<City />} />
          <Route path="/office" element={<Office />} />
        </Route>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouters;
