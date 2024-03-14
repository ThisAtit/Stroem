import React, { Fragment, useEffect, useState } from "react";
import Team from "../../team/Team";
import Testimonial from "../../testimonial/Testimonial";
import { Link } from "react-router-dom";

const AboutPage = () => {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('http://localhost:5333/about');
                const data = await result.json();
                setAbout(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <article id="About_section" className="container">
                <article className="row mb-5">
                    <section className="text-center mt-5 mb-4">
                        {
                            about && (
                                <article className="row">
                                    <h2 className="mb-3">Lidt om <span className="TextThemeColor">STRØM</span></h2>
                                    <figure className="col-lg-6">
                                        <img className="img-fluid" src={`http://localhost:5333/images/about/${about.image}`} alt={about.title} />
                                    </figure>
                                    <figcaption className="col-lg-6 text-start">
                                        <p>{about.teaser}</p>
                                        <p dangerouslySetInnerHTML={{ __html: about.content }}></p>
                                    </figcaption>

                                </article>
                            )
                        }
                    </section>
                </article>
                <article className="text-center">
                    <Link to="/contact">
                        <button className="mb-5 ButtonThemeStyle">Kontact os</button>
                    </Link>
                </article>
            </article>





            <Testimonial />
            <Team />
        </>
    );
};

export default AboutPage;