import "./Button.css";
import './Responsive.css'

const Button = (props) => {
    return (
        <button className="Button">
            {props.texto}
        </button>
    )
}

export default Button;