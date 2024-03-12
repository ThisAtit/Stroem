import About from "../about/About";
import Help from "../help/Help";
import Hero from "../hero/Hero";
import News from "../news/News";
import Services from "../services/Services";
import Team from "../team/Team";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Help />
            <Services />
            <Team />
            <News />
        </>
    );
};

export default Home;