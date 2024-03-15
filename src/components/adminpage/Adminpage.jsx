import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Adminpage = () => {
    const [news, setNews] = useState([]);
    const [about, setAbout] = useState([]);
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newsResult = await fetch('http://localhost:5333/news');
                const aboutResult = await fetch('http://localhost:5333/about');
                const bookingResult = await fetch('http://localhost:5333/booking/admin');

                const newsData = await newsResult.json();
                const aboutData = await aboutResult.json();
                const bookingData = await bookingResult.json();

                setNews(newsData);
                setAbout(aboutData);
                setBooking(bookingData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteNews = async (id) => {
        const isConfirmed = window.confirm("Er du sikker på, at du gerne vil slette nyheden");

        if (isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5333/news/admin/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    setNews(news.filter(news => news.id !== id));
                    window.location.reload();
                    alert("Nyheden er blevet slettet.")
                } else {
                    console.error('Failed to delete news');
                }
            } catch (error) {
                console.error('Error deleting news:', error);
            }
        }
    };

    const handleDeleteBooking = async (id) => {
        const isConfirmed = window.confirm("Er du sikker på, at du gerne vil slette booking");

        if (isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5333/booking/admin/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    setBooking(booking.filter(bookings => bookings.id !== id));
                    window.location.reload();
                    alert("booking er blevet slettet.")
                } else {
                    console.error('Failed to delete news');
                }
            } catch (error) {
                console.error('Error deleting news:', error);
            }
        }
    };

    const handleAccept = async (id, status) => {
        try {
            const fd = new FormData()
            fd.append("accept", status)

            const response = await fetch(`http://localhost:5333/booking/accept/admin/${id}`, {
                method: 'PATCH',
                body: fd
            });

            if (response.ok) {
                window.location.reload();
            } else {
                console.error('Failed to accept');
            }

        } catch (error) {
            console.error('Error accept booking:', error);
        }
    }

    const handleUpdateNote = async (event, id) => {
        event.preventDefault()

        try {
            const formData = new FormData(event.target);
            const response = await fetch(`http://localhost:5333/booking/note/admin/${id}`, {
                method: 'PATCH',
                body: formData
            });

            if (response.ok) {
                window.location.reload();
            } else {
                console.error('Failed to update note');
            }
        } catch (error) {
            console.error('Error updating note:', error);
        }
    };


    return (
        <>
            {/* __________________________________________________ News ___________________________________________________ */}
            <article className="container mt-5 mb-5">
                <article className="row text-center">
                    <h2>Sidste <span className="TextThemeColor">nyt</span></h2>
                    <p>Lorems ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
                    <p className="fs-4 TextGrey">——<span className="TextThemeColor fs-6 fw-bold">O</span>——</p>
                    <article className="row justify-content-center gap-5">
                        {
                            news.map((news, index) => (
                                <article className="col-lg-3 col-sm-5 News_content p-0" key={index}>
                                    <article>
                                        <figure>
                                            <img className="w-100" src={`http://localhost:5333/images/news/${news.image}`} alt={news.title} />
                                            <figcaption className="Figcaption_date">

                                            </figcaption>
                                            <figcaption className="text-start p-4 text-black">
                                                <h4>{news.title}</h4>
                                                <p className="mt-3 TextPrimaryThemeColor">{news.content.split(" ").slice(0, 18).join(" ")}...</p>
                                            </figcaption>
                                            <Link to={`/editnews/${news._id}`}>
                                                <button className="btn btn-warning me-5 text-white">Edit</button>
                                            </Link>
                                            <button className="btn btn-danger ms-5" onClick={() => handleDeleteNews(news._id)}>Delete</button>
                                        </figure>
                                    </article>
                                </article>
                            ))
                        }
                        <section className="col-1">
                            <Link to="/addnews">
                                <button className="ButtonThemeStyle fs-1 pt-0 pb-2">+</button>
                            </Link>
                        </section>
                    </article>
                </article>
            </article>

            {/* __________________________________________________ About ___________________________________________________ */}
            <article id="About_section" className="container">
                <article className="row mb-5">
                    <section className="text-center mt-5 mb-4">
                        {
                            about && (
                                <article className="row">
                                    <h2 className="mb-3">Lidt om <span className="TextThemeColor">STRØM</span></h2>
                                    <figure className="col-lg-6">
                                        <img className="img-fluid" src={`http://localhost:5333/images/about/${about.image}`} alt={about.title} />
                                    </figure>
                                    <figcaption className="col-lg-5 text-start">
                                        <p>{about.teaser}</p>
                                        <p dangerouslySetInnerHTML={{ __html: about.content }}></p>
                                    </figcaption>
                                    <section className="col-lg-1">
                                        <Link to={`/editabout`}>
                                            <button className=" btn btn-warning p-3 text-white">Edit About</button>
                                        </Link>
                                    </section>
                                </article>
                            )
                        }
                    </section>
                </article>
            </article>

            {/* __________________________________________________ Booking ___________________________________________________ */}
            <article className="container d-lg-block d-none">
                <article className="row">
                    <h2 className="mb-3">Booking hos <span className="TextThemeColor">STRØM</span></h2>
                    <table className="table table-striped border">
                        <thead>
                            <tr>
                                <th className="col-3 ps-2 border">Id</th>
                                <th className="col-2 ps-2 border">Name</th>
                                <th className="col-2 ps-2 border">Email</th>
                                <th className="col-2 ps-2 border">Phone</th>
                                <th className="col-3 ps-2 border">Note</th>
                                <th className="col-2 ps-2 border">Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.map((bookings, index) => (
                                <tr key={index}>
                                    <td className="border">{bookings._id}</td>
                                    <td className="border">{bookings.name}</td>
                                    <td className="border">{bookings.email}</td>
                                    <td className="border">{bookings.phone}</td>

                                    {/* ________________________________________________ Note ____________________________________________________ */}
                                    <td className="border">
                                        <form onSubmit={e => handleUpdateNote(e, bookings._id)} >
                                            <textarea className="col-12" name="note" defaultValue={bookings.note} placeholder={bookings.note} rows="5" />
                                            <button className="btn btn-warning text-white col-12" type="submit">Update Note</button>
                                        </form>
                                    </td>

                                    {/* ________________________________________________ Accept ____________________________________________________ */}
                                    <td className="border">
                                        <button onClick={() => handleAccept(bookings._id, !bookings.accept)} className="btn btn-primary mb-2">
                                            Skift status
                                        </button>
                                        <button className={`btn ${bookings.accept ? 'btn-success' : 'btn-danger'}`}>
                                            {bookings.accept ? 'Accepted' : 'Not Accepted'}
                                        </button>
                                    </td>

                                    {/* ________________________________________________ Delete ____________________________________________________ */}
                                    <td className="border">
                                        <button className="btn btn-danger mt-2" onClick={() => handleDeleteBooking(bookings._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </article>
        </>
    );
};

export default Adminpage;