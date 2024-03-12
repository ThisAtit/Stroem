import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    );
};

export default Layout;