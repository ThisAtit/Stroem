import "./bookingservice.scss";

const Bookingservice = () => {
    const fetchData = async (fd) => {
        try {
            const result = await fetch('http://localhost:5333/booking', {
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

        alert("Tak fordi du har booket hos os!")
        window.location.reload()

        fetchData(fd);
    }

    return (
        <article id="Bookingservice">
            <form className="container" onSubmit={handleSubmit}>
                <article className="row pt-3">
                    <section className="col-md-3 text-md-start text-center">
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
                    <section className="text-md-start text-center col-md-2">
                        <button type="submit" className="ButtonThemeStyle mt-2 col-9">SEND</button>
                    </section>
                </article>
            </form>
        </article>
    );
};

export default Bookingservice;