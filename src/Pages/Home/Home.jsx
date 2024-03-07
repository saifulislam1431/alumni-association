import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Mission from "./Mission/Mission";
import News from "./News/News";
import RecentJobs from "./RecentJobs/RecentJobs";
import Responsibility from "./Responsibility/Responsibility";
import Scholarship from "./Scholarship/Scholarship";

const Home = () => {
    return (
        <section className="space-y-20">
            <Banner />
            <Mission />
            <Responsibility />
            <RecentJobs />
            <Gallery />
            <Scholarship />
            <News />
        </section>
    );
};

export default Home;