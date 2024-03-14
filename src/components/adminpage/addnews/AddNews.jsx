import { useState } from "react";

const AddNews = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const result = await fetch('http://localhost:5333/news/admin', {
                method: 'POST',
                body: formData
            });

            if (result.ok) {
                window.location.reload();
                alert("Nyheden er blevet Tilføj.")
            } else {
                console.error('Failed to add new news');
            }
        } catch (error) {
            console.error('Error adding new news:', error);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <article className="container">
            <article className="row mt-5 mb-5">
                <h1 className="mt-5 mb-4">Tilføj <span className="TextThemeColor">Nyheden</span></h1>
                <form onSubmit={handleSubmit}>
                    <article className="row">
                        <section>
                            <label className="TextThemeColor fw-bold">Title:</label>
                            <input className="ms-2" type="text" id="title" name="title" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                        </section>
                    </article>
                    <article className="row">
                        <section>
                            <label></label><br />
                            <textarea id="content" name="content" rows="10" cols="50" placeholder="Details" required value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        </section>
                    </article>
                    <article className="row">
                        <section>
                            <label></label><br />
                            <input type="file" id="image" name="image" accept="image/*" required onChange={handleFileChange} />
                        </section>
                    </article>
                    <section>
                        <button type="submit" className="ButtonThemeStyle">Add News</button>
                    </section>
                </form>
            </article>
        </article>
    );
};

export default AddNews;