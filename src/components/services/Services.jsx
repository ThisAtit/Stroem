import "./services.scss";
import img1_Services from "../../assets/img/about/1.png";
import Bookingservice from "./bookingservice/Bookingservice";
import React, { useEffect, useState } from "react";

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
                            <section className="text-md-start text-center">
                                <h2>Vores <span className="TextThemeColor">services</span></h2>
                                <p>Lorems ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
                    <p className="fs-4 TextGrey"><span className="TextThemeColor fs-6 fw-bold">O</span>———</p>

                            </section>


                            {/* ________________Fetch data_____________________ */}
                            <article className="row mt-5">
                                {
                                    services.map((service, index) => (
                                        <React.Fragment key={index}>
                                            <section className="col-lg-2 col-2 mt-4 ">
                                                {/* <i className="bi bi-lamp TextThemeColor"></i> */}
                                                <i className={service.icon}></i>
                                            </section>
                                            <section className="col-lg-4 col-10 mt-4">
                                                <h3>{service.title}</h3>
                                                <p className="TextPrimaryThemeColor">{service.teaser.split(" ").slice(0, 24).join(" ")}</p>
                                            </section>
                                        </React.Fragment>

                                    ))
                                }
                            </article>
                        </section>
                        {/* ________________Image_____________________ */}
                        <figure className="col-md-5 mt-5 m-0">
                            <img className="img-fluid" src={img1_Services} alt="Services image" />
                        </figure>
                    </article>
                </article>
            </article>
            <Bookingservice />
        </>


    );
};

export default Services;