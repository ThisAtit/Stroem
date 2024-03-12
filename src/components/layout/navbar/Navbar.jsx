import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
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
                    <form class="form-inline ms-auto">
                        <input class="form-control" type="search" placeholder="Søg" aria-label="Search" />
                    </form>
                </section>
            </div>
        </nav>
    );
};

export default Navbar;