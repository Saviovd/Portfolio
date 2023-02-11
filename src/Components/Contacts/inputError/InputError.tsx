import './InputError.scss'
import errors from './errors.json'

interface InputErrorProps {
    type: string
    field: string
}

const InputError = ({ type, field}: InputErrorProps) => {
    return (
        <span className='form_error'>{errors[field][type]}</span>
    )
}

export default InputError;