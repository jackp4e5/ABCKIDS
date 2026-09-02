import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import ActivityRender from "../pages/Module1/Activities/ActivityRender/ActivityRender";
import FrontPage from "../pages/Module1/Screens";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/portada" element={<FrontPage />} />
          <Route
            path="module-1/activity/:activityId"
            element={<ActivityRender />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
