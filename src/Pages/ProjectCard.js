import '../PageStyles/ProjectCard.css';
import '../data/projects.json';

function ProjectCard({ project: { title, imageSrc, description, skills, demo, source } }) {
    return (<>
        <div className='containerCard'>
            <img src={imageSrc} className='imgproject' alt={`Image of $(title)`} style={{ height: "300px" }} />
            <h3 className='titleCard'>{title}</h3>
            <p className='descriptionCard'>{description}</p>
            <ul className='skills'>
                {skills.map((skill, id) => {
                    return (<li className='skill' key={id}>{skill}</li>);
                })}
            </ul>
            <div className='linksCard'>
                <a className='linkCard' href={demo}>Demo</a>
                <a className='linkCard' href={source}>Source</a>
            </div>
        </div>
    </>);
}

export { ProjectCard };