import Title from '../../Title/Title';
import './Formation.scss'

import { FaClock } from 'react-icons/fa';


const Formation = () => {
    return (
        <section id='Formações' className='formation'>
            <Title color='rgb(13, 25, 43)' title='Formação' />

            <div className='formation_container'>
                <div className='box'>
                    <span className='type_course'>Tecnólogo</span>
                    <h4 className='course' >Análise e desenvolvimento de sistemas</h4>
                    <p className='instituition'>Universidade Anhembi Morumbi</p>
                    <span className='period' >Jun/2021 - Dez/2023</span>
                </div>

                <div className='box'>
                    <span className='type_course'>Inglês</span>
                    <h4 className='course' >Intermediate Course in English</h4>
                    <p className='instituition'>Aslan Idiomas</p>
                    <span className='period' >Jun/2017 - Jun/2020</span>
                    <div className='time'>
                        <div className='div_clock'><FaClock className='clock'/></div><span className='hours'>360h</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Formation;