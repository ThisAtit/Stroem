import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NewsAdmin = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newsResult = await fetch('http://localhost:5333/news');
                const newsData = await newsResult.json();
                setNews(newsData);
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

    return (
        <>
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
        </>
    );
};

export default NewsAdmin;