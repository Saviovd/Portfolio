import './Skills.scss'

import { FaAngular, FaBootstrap, FaCss3, FaFigma, FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact, FaSass} from "react-icons/fa";
import { SiJquery,  SiTypescript, SiWebpack } from "react-icons/si"

const Skills = () => {
    return (<div className='skills'>
        <h4 className="skills_title">Algumas das ferramentas que possuo conhecimento</h4>
        <div className='rolling' >
            <ul className="skill_list primary">
                <li style={{color: "#18b2f2"}} className="skills_item"><FaFigma className='skills_icons'/></li>
                <li style={{color: "orange"}} className="skills_item"><FaHtml5 className='skills_icons'/></li>
                <li style={{color: "blue"}} className="skills_item"><FaCss3  className='skills_icons'/></li>
                <li style={{color: "yellow"}} className="skills_item"><FaJsSquare  className='skills_icons'/></li>
                <li style={{color: "#3c823b"}} className="skills_item"><FaNodeJs  className='skills_icons'/></li>
                <li style={{color: "#7010ef"}} className="skills_item"><FaBootstrap  className='skills_icons'/></li>
                <li style={{color: "#5ed3f3"}} className="skills_item"><FaReact  className='skills_icons'/></li>
                <li style={{color: "#0863a3"}} className="skills_item"><SiJquery  className='skills_icons'/></li>
                <li style={{color: "#b9002d"}} className="skills_item"><FaAngular className='skills_icons'/></li>
                <li style={{color: "#c76494"}} className="skills_item"><FaSass className='skills_icons'/></li>
                <li style={{color: "#2f72bc"}} className="skills_item"><SiTypescript className='skills_icons'/></li>
                <li style={{color: "#f7f4e9"}} className="skills_item"><FaPython  className='skills_icons'/></li>
                <li style={{color: "#e44c30"}} className="skills_item"><FaGitAlt className='skills_icons'/></li>
                <li style={{color: "#8acef2"}} className="skills_item"><SiWebpack className='skills_icons'/></li>
            </ul>
            <ul className="skill_list secondary">
                <li style={{color: "#18b2f2"}} className="skills_item"><FaFigma className='skills_icons'/></li>
                <li style={{color: "orange"}} className="skills_item"><FaHtml5 className='skills_icons'/></li>
                <li style={{color: "blue"}} className="skills_item"><FaCss3  className='skills_icons'/></li>
                <li style={{color: "yellow"}} className="skills_item"><FaJsSquare  className='skills_icons'/></li>
                <li style={{color: "#3c823b"}} className="skills_item"><FaNodeJs  className='skills_icons'/></li>
                <li style={{color: "#7010ef"}} className="skills_item"><FaBootstrap  className='skills_icons'/></li>
                <li style={{color: "#5ed3f3"}} className="skills_item"><FaReact  className='skills_icons'/></li>
                <li style={{color: "#0863a3"}} className="skills_item"><SiJquery  className='skills_icons'/></li>
                <li style={{color: "#b9002d"}} className="skills_item"><FaAngular className='skills_icons'/></li>
                <li style={{color: "#c76494"}} className="skills_item"><FaSass className='skills_icons'/></li>
                <li style={{color: "#2f72bc"}} className="skills_item"><SiTypescript className='skills_icons'/></li>
                <li style={{color: "#f7f4e9"}} className="skills_item"><FaPython  className='skills_icons'/></li>
                <li style={{color: "#e44c30"}} className="skills_item"><FaGitAlt className='skills_icons'/></li>
                <li style={{color: "#8acef2"}} className="skills_item"><SiWebpack className='skills_icons'/></li>
            </ul>
        </div>
    </div>
    )
}

export default Skills;