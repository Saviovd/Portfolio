import './Project-single.css' 
import './Responsive.css'


const ProjectSingle = (props) => {


    return (
        <div className="projects-itens">
            <img className="project-preview" src={props.img} alt="Project_Image"/>

            <div className='info'>
                    <h3 className='about-project'>
                        <a   href={`${props.url}`} target="_blank" rel="noopener noreferrer">
                            {props.about}
                        </a>
                    </h3>
                <p className="about-project_description">{props.about_description}</p>
            </div>
        </div>
    )
}

export default ProjectSingle;