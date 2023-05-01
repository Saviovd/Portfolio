import { FaClock } from "react-icons/fa";
import { CourseStyle } from "./styles";

interface ICourse {
    hours: string
    period?: string
    instituition: string
    course: string
    level: string
    key: string
    link?: string
}

const Course = ({hours, period, instituition, course, level, link, key}: ICourse) => {
    return (<>
        <a key={key} target={'_blank'} rel="noreferrer" href={link}>
            <CourseStyle>
                <span className='type_course'>{level}</span>
                <h4 className='course' >{course}</h4>
                <p className='instituition'>{instituition}</p>
                <span className='period' >{period}</span>
                <div className='time'>
                <FaClock className='clock'/><span className='hours'>{hours}</span>
                </div>
            </CourseStyle>
        </a>
    </>)
}

export default Course;