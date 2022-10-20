import './EduBox.css';


const Box = (props) => {
    return (
        <div className='box'>
            <span className='type_course'>{props.type}</span>
            <h4 className='course' >{props.course}</h4>
            <p className='instituition'>{props.instituition}</p>
            <span className='period' >{props.period}</span>
            <div className='time'>
                <div className='clock'>{props.clock} </div><span className='hours'>{props.hours}</span>
            </div>
        </div>
    )
}

export default Box;