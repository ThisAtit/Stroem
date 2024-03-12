import "./services.scss";
import img1_Services from "../../assets/img/about/1.png";
import Bookingservice from "./bookingservice/Bookingservice";
import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('http://localhost:5333/service');
                const data = await result.json();
                setServices(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <article id="Services_section">
                <article className="container">
                    <article className="row">
                        <section className="col-md-7 mt-5">
                            <h2>Vores <span className="TextThemeColor">services</span></h2>
                            <p>Lorems ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
                            <p></p>

                            {/* ________________Fetch data_____________________ */}
                            <article className="row mt-5">
                                {
                                    services.map((service, index) => (
                                        <section className="col-md-6" key={index}>
                                            <h3>{service.title}</h3>
                                            <p className="TextPrimaryThemeColor">{service.teaser}</p>
                                        </section>
                                    ))
                                }
                            </article>
                        </section>
                        {/* ________________Image_____________________ */}

                        <figure className="col-md-5 mt-5">
                            <img className="h-100" src={img1_Services} alt="Services image" />
                        </figure>
                    </article>
                </article>
            </article>
            <Bookingservice />
        </>


    );
};

export default Services;