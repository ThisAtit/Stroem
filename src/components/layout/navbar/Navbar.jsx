import "./navbar.scss";

const Navbar = () => {
    return (
        <article className="container">
            <nav className="navbar navbar-expand-md p-2 pe-3 ps-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#Homepage">FORSIDE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About">OM OS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Service">SERVICE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Faq">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#News">NYHEDER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">KONTAKT OS</a>
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