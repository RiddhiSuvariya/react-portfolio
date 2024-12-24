import '../PageStyles/Project.css';
import projects from "../data/projects.json";
import { ProjectCard } from './ProjectCard';

function Projects(){
    return(<>
        <section className='container3'>
            <h2 id="project" className='title3'>Projects</h2>
            <div className='projects'>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjectCard key={id} project={project}/>
                        );
                    })
                }
            </div>
        </section>
    </>);
}

export {Projects}

