import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Adminpage from "./components/adminpage/Adminpage";
import EditNews from "./components/adminpage/editnews/EditNews";
import AddNews from "./components/adminpage/addnews/AddNews";
import EditAbout from "./components/adminpage/editabout/EditAbout";
import AboutPage from "./components/pages/aboutpage/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<Adminpage />} />
          <Route path="/addnews" element={<AddNews />} />
          <Route path="/editnews/:id" element={<EditNews />} />
          <Route path="/editabout" element={<EditAbout />} />
          <Route path="*" element={<article className="m-5 p-5 text-center"><h3>HTTP 404 - The Page you were looking does not exist</h3></article>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
