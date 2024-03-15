import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <article className="container">
            <nav className="navbar navbar-expand-md p-2 pe-3 ps-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">FORSIDE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">OM OS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service">SERVICE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">NYHEDER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">KONTAKT OS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-lg-block d-md-none d-block" to="/admin">ADMIN</Link>
                        </li>
                    </ul>
                    <form className="form-inline ms-auto">
                        <input className="form-control" type="search" placeholder="Søg" aria-label="Search" />
                    </form>
                </section>
            </nav>
        </article>

    );
};

export default Navbar;