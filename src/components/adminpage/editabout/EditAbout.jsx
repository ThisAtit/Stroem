import { useEffect, useState } from "react";

const EditAbout= () => {
    const [about, setAbout] = useState({ title: "", teaser: "", content: "" });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5333/about`);
                const data = await response.json();
                setAbout(data);
            } catch (error) {
                console.error('Error fetching about:', error);
            }
        };

        fetchData();
    }, []);


    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:5333/about/admin`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(about)
            });

            if (response.ok) {
                window.location.reload();
                alert("Om os er blevet update.")
            } else {
                console.error('Failed to update about');
            }
        } catch (error) {
            console.error('Error updating about:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAbout({ ...about, [name]: value });
    };

    return (
        <article className="container mb-5">
            <h1 className="text-center mt-5">Ret <span className="TextThemeColor">Om os</span></h1>
            <form className="row justify-content-center mt-5">
                <section className="col-md-8">
                    <article className="row">
                        <section>
                            <label className="TextThemeColor fw-bold">Title: </label>
                            <input className="col-4 ms-2" name="title" value={about.title} onChange={handleInputChange} />
                        </section>
                    </article>
                    <article className="row">
                        <section>
                            <label className="TextThemeColor fw-bold">teaser:</label><br />
                            <textarea className="col-10" name="teaser" value={about.teaser} onChange={handleInputChange} rows="5" />
                        </section>
                    </article>
                    <article className="row">
                        <section>
                            <label className="TextThemeColor fw-bold">content:</label><br />
                            <textarea className="col-10" name="content" value={about.content} onChange={handleInputChange} rows="5" />
                        </section>
                    </article>
                    <button className="ButtonThemeStyle" onClick={handleUpdate}>Update</button>
                </section>
            </form>
        </article>
    );
};

export default EditAbout;