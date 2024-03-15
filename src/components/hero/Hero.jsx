import "./hero.scss";

import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

import sliderImg1 from "../../assets/img/slider/1.jpg";
import sliderImg2 from "../../assets/img/slider/2.jpg";

const Hero = () => {
    return (
        <article className="Hero_slider d-lg-block d-none">
            <Carousel fade indicators={false}>
                <Carousel.Item>
                    <figure>
                        <img className="d-block w-100" src={sliderImg2} alt="slider-Img-2" />
                        <figcaption className="carousel-caption d-none d-md-block" >
                            <section className="text-center">
                                <h2>Hurtig service</h2>
                                <p>Når du skal bruge det</p>
                                <Link to="/contact">
                                    <button className="ButtonThemeStyle">KONTAKT OS</button>
                                </Link>
                            </section>
                        </figcaption>
                    </figure>
                </Carousel.Item>
                <Carousel.Item>
                    <figure>
                        <img className="d-block w-100" src={sliderImg1} alt="slider-Img-1" />
                        <figcaption className="carousel-caption d-none d-md-block" >
                            <section className="text-center">
                                <h2>Bedste priser</h2>
                                <p>Vi matcher alle</p>
                                <Link to="/contact">
                                    <button className="ButtonThemeStyle">KONTAKT OS</button>
                                </Link>
                            </section>
                        </figcaption>
                    </figure>
                </Carousel.Item>
            </Carousel>

        </article>
    );
};

export default Hero;