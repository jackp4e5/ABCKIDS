import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Screen from "../pages/Module1/Screens";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/module-1/:screenId" element={<Screen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
