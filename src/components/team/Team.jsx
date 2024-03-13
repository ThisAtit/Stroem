import "./team.scss";
import { useEffect, useState } from "react";

const Team = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('http://localhost:5333/team');
                const data = await result.json();
                setTeams(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <article id="Team_section" className="container mt-5">
            <article className="row text-center">
                <h2>Vores <span className="TextThemeColor">team</span></h2>
                <p>Lorems ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
                {
                    teams.map((team, index) => (
                        <figure className="col-md-3 col-6 mt-4 p-4 TeamImg" key={index}>
                            <img className="w-100" src={`http://localhost:5333/images/team/${team.image}`} alt={team.title} />
                            <figcaption className="mainFigcaption TextSecondaryThemeColor pb-4">
                                <h3>{team.name}</h3>
                                <p className="fs-5">{team.title}</p>
                                <section id="icons" className="text-center">
                                    <a href="#"><i className="bi bi-facebook m-2 text-white"></i></a>
                                    <a href="#"><i className="bi bi-twitter m-2 text-white"></i></a>
                                    <a href="#"><i className="bi bi-linkedin m-2 text-white"></i></a>
                                    <a href="#"><i className="bi bi-pinterest m-2 text-white"></i></a>
                                </section>
                            </figcaption>
                            <figcaption className="figcaption_shadow"></figcaption>
                        </figure>
                    ))
                }
            </article>
        </article>
    );
};

export default Team;