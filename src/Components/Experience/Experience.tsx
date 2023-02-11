import './Experience.scss'
import Formation from './Formation/Formation';
import Certificates from './Certificates/Certificates';
import Jobs from './Jobs/Jobs';


const Experience = () => {
    return (
        <section id='Experiências' className='experience'>
            <Jobs />
            <Formation />
            <Certificates />
        </section>
    )
}

export default Experience;

// {certificates.map( (item) => (
//     <Certificates
//         course={item.course}
//         hours={item.hours}
//     />
// ))}