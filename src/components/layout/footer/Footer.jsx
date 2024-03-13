import "./footer.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";

const Footer = () => {
    const fetchData = async (fd) => {
        try {
            const result = await fetch('http://localhost:5333/newssubscription', {
                method: 'POST',
                body: fd
            }
            );
            const data = await result.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submit")
        const fd = new FormData(e.target)

        alert("Din email er blevet registreret til vores nyhedsbrev :)")
        window.location.reload()

        fetchData(fd);
    }

    return (
        <footer id="Footer_section">
            <article className="container">
                <article className="row">
                    {/* _________________________________________ logo_section _____________________________________ */}
                    <figure className="col-lg-3 col-md-6 mt-4">
                        <Link to="/" className="logo-link">
                            <img src={logo} alt="Stroem Logo" className="logo" />
                        </Link>
                        <figcaption>
                            <p className="mt-3">Som medlem af Elinstallatørernes Landsorganisation, ELFO, er vi tilsluttet et ankernævn og en garantiordning.</p>
                        </figcaption>
                    </figure>


                    {/* _________________________________________ Link_section _____________________________________ */}
                    <section id="Link_section" className="col-lg-2 offset-md-1 col-md-5  mt-4">
                        <h3>Link</h3>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Om os</a></li>
                            <li><a href="#">Kontakt os</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </section>

                    {/* _________________________________________ Kontakt_section _____________________________________ */}
                    <section className="col-lg-3 col-md-6 mt-4">
                        <h3>Kontakt os</h3>
                        <section className="mt-3">
                            <p><b className="me-3">Adresse:</b> Strømparken 1, 8500 grenaa</p>
                            <p><b className="me-3">Telefon:</b> [45] 86 45 45 78</p>
                            <p><b className="me-3">Adresse:</b> info@stroem.dk</p>
                        </section>
                    </section>

                    {/* _________________________________________ Form_section _____________________________________ */}
                    <section className="col-lg-3 offset-lg-0 offset-md-1 col-md-5 mt-4">
                        <form id="Form_section" onSubmit={handleSubmit}>
                            <h3>Nyhedsbrev</h3>
                            <p className="mt-3">Tilmeld dig vores hyhedsbrev her</p>
                            <section id="FormInput_section">
                                <label htmlFor="email"></label>
                                <input className="w-75 mt-2 p-2" type="email" id="email" name="email" placeholder="Din Email" required />
                            </section>
                            <button type="submit" className="ButtonThemeStyle mt-2">TILMELD</button>
                        </form>
                    </section>
                </article>
            </article>

            {/* _________________________________________ Copyright_section _____________________________________ */}
            <article id="Copyright" className="mt-5 p-3">
                <article className="container">
                    <article className="row mt-3 text-md-start text-center">
                        <section className="col-md-5">
                            <p><span className="TextThemeColor">Strøm</span> © 2017 All Right Reserved</p>
                        </section>
                        <section id="icons" className="ms-auto col-md-5 text-md-end text-center">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-globe"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </section>
                    </article>
                </article>
            </article>
        </footer>
    );
};

export default Footer;