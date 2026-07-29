import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header title="Nociones Espaciales" >
                Header
            </Header>

            <main>
                <Outlet />
            </main>

            <Footer>
                Footer
            </Footer>
        </>
    );
};

export default MainLayout;