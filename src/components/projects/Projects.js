import {Link} from 'react-router-dom';
import '../projects/projects.css'
import projects from "../../data/projects";

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <h1 className="projectsTitle">Наши проекты</h1>
                <div className="projectsCards">
                    {projects.map(project => (
                        <Link to={`/projects/${project.id}`} className="projectsCard" key={project.id}>
                            <div className="projectsWrapperCardImage">
                                <img className="projectsCardImage" src={project.cardImage} alt={project.cardImage}
                                     draggable="false"/>
                            </div>
                            <h2 className="projectsCardTitle">{project.title}</h2>
                            <p className="projectsCardDescription">{project.description}</p>
                            <span className="projectsCardType">{project.type}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;