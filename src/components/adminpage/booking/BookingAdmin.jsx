import { useEffect, useState } from "react";

const BookingAdmin = () => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookingResult = await fetch('http://localhost:5333/booking/admin');
                const bookingData = await bookingResult.json();
                setBooking(bookingData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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

export default BookingAdmin;