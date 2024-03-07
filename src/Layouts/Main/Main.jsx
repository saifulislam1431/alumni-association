import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";

const Main = () => {
    return (
        <section>
            <Navbar />

            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>

            <Footer />
        </section>
    );
};

export default Main;