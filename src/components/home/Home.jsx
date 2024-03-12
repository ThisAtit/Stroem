import About from "../about/About";
import Help from "../help/Help";
import Hero from "../hero/Hero";
import News from "../news/News";
import Services from "../services/Services";
import Team from "../team/Team";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Help />
            <Services />
            <Testimonial />
            <Team />
            <News />
        </>
    );
};

export default Home;