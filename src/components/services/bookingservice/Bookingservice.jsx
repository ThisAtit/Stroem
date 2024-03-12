import "./bookingservice.scss";

const Bookingservice = () => {
    return (
        <article id="Bookingservice">
            <form className="container">
                <article className="row pt-3">
                    <section className="col-md-2">
                        <h3><span className="TextThemeColor">Book</span><br />service nu</h3>
                    </section>
                    <section className="offset-md-1 col-md-2">
                        <label htmlFor="name"></label>
                        <input className="w-100 mt-2" type="text" id="name" name="name" placeholder="Dit navn" required />
                    </section>
                    <section className="col-md-2">
                        <label htmlFor="email"></label>
                        <input className="w-100 mt-2" type="email" id="email" name="email" placeholder="Din Email" required />
                    </section>
                    <section className="col-md-2">
                        <label htmlFor="phone"></label>
                        <input className="w-100 mt-2" type="tel" id="phone" name="phone" placeholder="Telefon nr." required />
                    </section>
                    <button type="submit" className="ButtonThemeStyle col-md-1 mt-2">SEND</button>
                </article>
            </form>
        </article>
    );
};

export default Bookingservice;