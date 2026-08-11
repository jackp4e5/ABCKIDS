import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Screen from "../pages/Module1/Screens";
import ActivityRender from "../pages/Module1/Activities/ActivityRender/ActivityRender";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="module-1/screen/:screenId" element={<Screen />} />


            <Route path="module-1/activity/:activityId" element={<ActivityRender />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
