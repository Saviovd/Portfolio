import data from '../../../../data/data.json'
import Course from './Course/Course';
import { CertificateStyle } from './styles';

const { Courses } = data

const Certificates = () => {
    return (
        <CertificateStyle>
            <h3 className='certificate_title'>Cursos</h3>
            <div className='icon-scroll'></div>
            <div className='cerficates_container'>

                {Courses.map((item) => (
                    <Course 
                        key={item.key}
                        level={item.level}
                        course={item.course}
                        instituition={item.instituition}
                        period={item.period}
                        hours={item.hours}
                    />
                ))}

            </div>
        </CertificateStyle>
    )
}

export default Certificates;