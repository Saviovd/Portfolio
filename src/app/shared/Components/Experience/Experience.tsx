import Formation from './Formation/Formation';
import Certificates from './Certificates/Certificates';
import Jobs from './Jobs/Jobs';
import { ExperienceStyle } from './styles';


export const Experience = () => {
    return (
        <ExperienceStyle id='Experiências'>
            <Jobs />
            <Formation />
            <Certificates />
        </ExperienceStyle>
    )
}
