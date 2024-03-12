import "./news.scss";
import { useEffect, useState } from "react";


const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('http://localhost:5333/news');
                const data = await result.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <article className="container mt-5 mb-5">
            <article className="row text-center">
                <h2>Sidste <span className="TextThemeColor">nyt</span></h2>
                <p>Lorems ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
                <article className="row justify-content-center gap-5">
                    {
                        news.slice(0, 3).map((news, index) => (
                            <article className="col-md-3 News_section p-0" key={index}>
                                <figure>
                                    <img className="w-100" src={`http://localhost:5333/images/news/${news.image}`} alt={news.title} />
                                    <figcaption className="text-start p-4">
                                        <h4>{news.title}</h4>
                                        <p className="mt-3 TextPrimaryThemeColor">{news.content.split(" ").slice(0, 20).join(" ")}...</p>
                                    </figcaption>
                                </figure>
                            </article>
                        ))
                    }
                </article>
                <section>
                    <button type="submit" className="ButtonThemeStyle col-6 col-md-4 col-lg-3 mt-4">FLERE NYHEDER ...</button>
                </section>
            </article>
        </article>
    );
};

export default News;