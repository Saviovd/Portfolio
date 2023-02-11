import './Certificates.scss'
import certificates from './certificates.json'
import { FaClock } from 'react-icons/fa';


interface PropsCertificate {
    level: string
    course: string
    instituition: string
    period?: string
    hours: string
    key: string
    link?: string
}
// 
const Certificates = () => {
    return (
        <div className='certificates'>
            <h3 className='certificate_title'>Cursos</h3>
            <div className='icon-scroll'></div>
            <div className='cerficates_container'>

                {certificates.map((item: PropsCertificate) => (
                    <a key={item.key} target={'_blank'} rel="noreferrer" href={item.link}>
                    <div  className='box'>
                        <span className='type_course'>{item.level}</span>
                        <h4 className='course' >{item.course}</h4>
                        <p className='instituition'>{item.instituition}</p>
                        <span className='period' >{item.period}</span>
                        <div className='time'>
                        <FaClock className='clock'/><span className='hours'>{item.hours}</span>
                        </div>
                    </div>
                    </a>
                ))}

            </div>
        </div>
    )
}

export default Certificates;