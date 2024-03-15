import { Link } from "react-router-dom";
import "./help.scss";

const Help = () => {
    return (
        <article id="Help_section" >
            <article className="row m-0">
                <section className="text-center col-md-8 offset-md-2 mt-5 mb-4">
                    <h2>Skal du bruge <span className="TextThemeColor">hjælp</span> fra <span className="TextThemeColor">Strøm?</span></h2>
                    <p>Lorems ipsum dolor sit amet consectetur</p>
                    <Link to="/contact">
                        <button className="mb-5 ButtonThemeStyle">KONTAKT OS</button>
                    </Link>
                </section>
            </article>
        </article>
    );
};

export default Help;