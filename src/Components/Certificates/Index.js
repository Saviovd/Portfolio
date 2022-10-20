import './Certificate.css'

const Certificate = (props) => {
    return (
        <div className='course_box'>
            <span className='course_type'>{props.type}</span>
            <h4 className='course_name' >{props.course}</h4>
            <p className='instituition_name'>{props.instituition}</p>
            <div className='time'>
                <div className='clock'>{props.clock} </div><span className='hours'>{props.hours}</span>
            </div>
        </div>
    )
}

export default Certificate;