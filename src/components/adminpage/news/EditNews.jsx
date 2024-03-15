import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditNews = () => {
    // bruge use params til at hente specifik id fra route
    const { id } = useParams();
    const [news, setNews] = useState({ title: "", content: "" });

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // hente data med specifik id
                const response = await fetch(`http://localhost:5333/news/${id}`);
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [id]);


    const handleUpdate = async () => {
        try {
            // bruge PUT request til det id man vælger
            const response = await fetch(`http://localhost:5333/news/admin/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(news)
            });

            //navigate til /admin hvis response er ok
            if (response.ok) {
                window.location.reload();
                alert("Nyheden er blevet update.")
            } else {
                console.error('Failed to update news');
            }
        } catch (error) {
            console.error('Error updating news:', error);
        }
    };

    //handleInputChange bruge til at update state af Input felt user har skrev i browser (name og value)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNews({ ...news, [name]: value });
    };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setNews({ ...news, image: file });
    // };

    return (
        <article className="container mb-5">
            <h1 className="text-center mt-5">Ret <span className="TextThemeColor">Nyheden</span></h1>
            <form className="row justify-content-center mt-5">
                <section className="col-md-8">
                    <article className="row">
                        <section>
                            <label className="TextThemeColor fw-bold">Title: </label>
                            <input className="col-4 ms-2" type="text" name="title" value={news.title} onChange={handleInputChange} />
                        </section>
                    </article>
                    <article className="row">
                        <section>
                            <label className="TextThemeColor fw-bold">Description:</label><br />
                            <textarea className="col-10" name="content" value={news.content} onChange={handleInputChange} rows="5" />
                        </section>
                    </article>
                    {/* <article className="row">
                        <figure className="col-4">
                            <figcaption className="fw-bold">Previous Image:</figcaption>
                            <img className="w-100" src={`http://localhost:5333/images/news/${news.image}`} alt={news.image} />
                        </figure>
                        <section className="col-8">
                            <label className="TextThemeColor fw-bold">New Image:</label><br />
                            <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} />
                        </section>
                    </article> */}
                    <button className="ButtonThemeStyle" onClick={handleUpdate}>Update</button>
                </section>
            </form>
        </article>
    );
};

export default EditNews;