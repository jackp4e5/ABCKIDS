import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "../pages/Module1/Screen/Screen";
import MainLayout from "../Layouts/MainLayout/MainLayout";

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
