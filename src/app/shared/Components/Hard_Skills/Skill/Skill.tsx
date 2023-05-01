import { SkillStyle } from "./styles"

interface ISkills {
    name: string
    logo: string
    about: string
}

const Skill = ({name, logo, about}: ISkills) => {
    return (<>
        <SkillStyle>
            <h3 className='skill_name'>{name}</h3>    
            <img src={logo} alt={`Logo de ${name}`} className='skill_logo' />
            <p className='skill_about'>{about}</p>
        </SkillStyle>
    </>)
} 

export default Skill;