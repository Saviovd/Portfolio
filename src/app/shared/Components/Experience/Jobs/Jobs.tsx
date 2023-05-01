import Title from '../../Title/Title';
import { JobStyle } from './styles';

const Jobs = () => {
    return (<>
        <Title color='rgb(13, 25, 43)' title='Experiência' />
        <JobStyle>
            <div className='jobs_ container'>
                <div className='box'>
                    <span className='type_job'>Estágio</span>
                    <h4 className='office' >Business Intellgence</h4>
                    <p className='business'>Centro de Excelência Votorantim</p>
                    <span className='period' >Jan/2023 - Atualmente</span>
                </div>
            </div>
        </JobStyle>
    </>)
}

export default Jobs;