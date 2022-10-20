import './CampoTexto.css'
import './Responsive.css'

const CampoTexto = (props) => {

    return (
        
        <div className="Campo-texto">
            <input type="hidden" name="accessKey" value="034f09cc-05a8-418e-b9ac-fefc24562fcc" />
            <label>
                {props.label}
            </label>
            <input 
                type={props.type}
                name={props.name}
                onChange={props.onChange} 
                placeholder={props.placeholder} 
                required={props.obrigatorio} 
            />
        </div>

    )
}
export default CampoTexto;