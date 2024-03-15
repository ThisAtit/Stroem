import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutAdmin = () => {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const aboutResult = await fetch('http://localhost:5333/about');
                const aboutData = await aboutResult.json();
                setAbout(aboutData);
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
                                    <figcaption className="col-lg-5 text-start">
                                        <p>{about.teaser}</p>
                                        <p dangerouslySetInnerHTML={{ __html: about.content }}></p>
                                    </figcaption>
                                    <section className="col-lg-1">
                                        <Link to={`/editabout`}>
                                            <button className=" btn btn-warning p-3 text-white">Edit About</button>
                                        </Link>
                                    </section>
                                </article>
                            )
                        }
                    </section>
                </article>
            </article>
        </>
    );
};

export default AboutAdmin;