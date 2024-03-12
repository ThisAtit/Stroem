import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";

const Header = () => {
    return (
        <header>
            <article className="container">
                <article id="Header" className="row text-center text-md-start">
                    <section className="header-logo col-md-4">
                        <Link to="/" className="logo-link">
                            <img src={logo} alt="Stroem Logo" className="logo" />
                        </Link>
                    </section>
                    <article className="header-info col-md-8">
                        <article className="row">
                            <section className="col-md-4 col-6 mt-4  ms-auto">
                                <i className="bi bi-geo-alt-fill"></i>
                                <p className="ps-2">Strømparken 1, 8500 Grenaa</p>
                            </section>
                            <section className="col-md-3 col-6 mt-4">
                                <i className="bi bi-clock"></i>
                                <p className="ps-2">Man - Søn 9.00 - 18.00</p>
                            </section>
                            <section className="col-md-3 col-12 mt-4">
                                <i className="bi bi-telephone-fill"></i>
                                <p className="ps-2">[45] 86 45 45 78</p>
                            </section>
                        </article>

                    </article>
                </article>
            </article>
        </header>
    );
};

export default Header;