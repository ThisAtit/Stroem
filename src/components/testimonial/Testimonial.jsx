import "./testimonial.scss";
import { useEffect, useState } from "react";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('http://localhost:5333/testimonial');
                const data = await result.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <article id="Testimonial_section">
            <article className="container">
                <article className="row text-center pb-5">
                    <h2>Vores <span className="TextThemeColor">kunder siger</span></h2>
                    <p>Lorems ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
                </article>

                {/* _____________________________________ Content ________________________________________ */}
                <article id="Testimonial_Card" className="row justify-content-center gap-5">
                        {
                            testimonials.map((testimonial, index) => (
                                <article className="Testimonial_info col-lg-3 col-8 p-0 text-center" key={index}>
                                    {/* _____________________________________________ CardImg ________________________________________ */}
                                    <figure className="CardImg">
                                        <img src={`http://localhost:5333/images/testimonial/${testimonial.image}`} alt={testimonial.title} />
                                    </figure>


                                    {/* _____________________________________________ Testimonial_text ________________________________________ */}
                                    <article className="Testimonial_text">
                                        <section className="p-4">
                                            <h4 className="text-danger">{testimonial.name}</h4>
                                            <h6 className="TextThemeColor">{testimonial.title}</h6>
                                            <p className="mt-3 TextPrimaryThemeColor">{testimonial.review.split(" ").slice(0, 15).join(" ")}</p>
                                        </section>
                                    </article>
                                </article>
                            ))
                        }
                </article>
            </article>
        </article>
    );
};

export default Testimonial;