import './Icons.css'
import './Responsive.css'
import { FaAngular, FaAws, FaBootstrap, FaCss3, FaFigma, FaGitAlt, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { SiJquery, SiMysql, SiTypescript } from "react-icons/si"

const Icons = () => {

    return (<div className='scroll-parent'>
        <ul className="scroll-element primary">
            <li style={{color: "#18b2f2"}} className="icons-about"><FaFigma /></li>
            <li style={{color: "orange"}} className="icons-about"><FaHtml5 /></li>
            <li style={{color: "blue"}} className="icons-about"><FaCss3  /></li>
            <li style={{color: "yellow"}} className="icons-about"><FaJsSquare  /></li>
            <li style={{color: "#3c823b"}} className="icons-about"><FaNodeJs  /></li>
            <li style={{color: "#7010ef"}} className="icons-about"><FaBootstrap  /></li>
            <li style={{color: "#5ed3f3"}} className="icons-about"><FaReact  /></li>
            <li style={{color: "#0863a3"}} className="icons-about"><SiJquery  /></li>
            <li style={{color: "#41b883"}} className="icons-about"><FaVuejs  /></li>
            <li style={{color: "#b9002d"}} className="icons-about"><FaAngular /></li>
            <li style={{color: "#2f72bc"}} className="icons-about"><SiTypescript /></li>
            <li style={{color: "black"}} className="icons-about"><FaPython  /></li>
            <li style={{color: "#e01e23"}} className="icons-about"><FaJava  /></li>
            <li style={{color: "#e44c30"}} className="icons-about"><FaGitAlt /></li>
            <li style={{color: "#f68d11"}} className="icons-about"><FaAws  /></li>
            <li style={{color: "#254d66"}} className="icons-about"><SiMysql /></li>
        </ul>
    </div>  )
}

export default Icons;