import "./hero.scss";
import { Carousel } from 'react-bootstrap';
import sliderImg1 from "../../assets/img/slider/1.jpg";
import sliderImg2 from "../../assets/img/slider/2.jpg";

const Hero = () => {
    return (
        <article className="Hero_slider">
            <Carousel>
                <Carousel.Item>
                    <figure>
                        <img className="d-block w-100" src={sliderImg2} alt="slider-Img-2" />
                        <figcaption className="carousel-caption d-none d-md-block" >
                            <section className="text-center">
                                <h2>Hurtig service</h2>
                                <p>når du skal bruge det</p>
                                <button>KONTAKT OS</button>
                            </section>
                        </figcaption>
                    </figure>
                </Carousel.Item>
            </Carousel>

        </article>
    );
};

export default Hero;