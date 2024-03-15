import NewsAdmin from "./news/NewsAdmin";
import AboutAdmin from "./about/AboutAdmin";
import BookingAdmin from "./booking/BookingAdmin";

const Adminpage = () => {
    return (
        <>
            <NewsAdmin />
            <AboutAdmin />
            <BookingAdmin />
        </>
    );
};

export default Adminpage;