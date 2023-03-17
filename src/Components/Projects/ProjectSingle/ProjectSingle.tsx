
import './ProjectSingle.scss';

export interface PropsProject {
    image: string
    url: string
    title: string
    description: string
    key: number
}

const ProjectSingle = ({image, url, title, description, key}: PropsProject) => {


    return (
        <a key={key} className='project_url' href={`${url}`} target="_blank" rel="noopener noreferrer">
        <div  className="project">
            <img className="project_preview" src={image} alt="Preview do Projeto"/>
            <h4 className='project_name'>{title}</h4>
            <p className="project_description">{description}</p>
        </div>
        </a>
    )
}

export default ProjectSingle;