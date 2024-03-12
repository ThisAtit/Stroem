import { useEffect, useState } from "react";

const About = () => {

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
        <article id="About_section" className="container">
            <article className="row mb-5">
                <section className="text-center mt-5 mb-4">
                    {
                        about && (
                            <>
                                <h2>Lidt om <span className="TextThemeColor">STRØM</span></h2>
                                <p>{about.teaser}</p>
                                {/* <p dangerouslySetInnerHTML={{ __html: about.content }}></p> */}
                                {/* <figure>
                                    <img src={`http://localhost:5333/images/about/${about.image}`} alt={about.title} />
                                </figure> */}
                            </>
                        )
                    }
                    <button className="mb-5 ButtonThemeStyle">LÆS MERE</button>
                </section>
            </article>
        </article>
    );
};

export default About;