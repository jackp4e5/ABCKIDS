import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";



const Home = () => <h2>Home</h2>;

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
};