import "./Form.css";
import "./Responsive.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";
import Button from "../Button/Button.js";
import { useState } from "react";
import emailjs from '@emailjs/browser'

const Formulario = () => {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin,setLinkedin] = useState('');
    const [message, setMessage] = useState('');


    const templateParams = {
        from_name: name,
        email: email,
        message: message,
        linkedin: linkedin
    }
    
    const sendEmail = (evento) => {
        evento.preventDefault();

        
        emailjs.send('service_f3s7evr', 'template_15k4g2i', templateParams, '8hEOfTx-PZ6GsJF1u')
        .then((response) => {
            console.log('EMAIL ENVIADO', response.status , response.text);
        }, (err) => {
            console.log("ERRO: ", err)
        });

        
        document.querySelector('#form').reset();
    };
    
    return (<div>
        <section className="Formulario" id="Contatos">
            <h2 className="title-section" >Contato</h2>
            <form id="form" onSubmit={sendEmail}>
                <h2>Entre em contato comigo</h2>

                <CampoTexto
                    type="text"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    label="Nome" 
                    placeholder="Digite seu Nome..."
                    obrigatorio={true} 
                />
                <CampoTexto
                    type='email'
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    label="Email" 
                    placeholder="Digite seu Email..."
                    obrigatorio={true} 
                />
                <CampoTexto
                    type="text"
                    name="linkedin"               
                    onChange={(event) => setLinkedin(event.target.value)}
                    value={linkedin}
                    label="Linkedin" 
                    placeholder="Digite seu Linkedin..."
                />
                <div className='message' >
                    <label>Mensagem</label>
                    <textarea 
                        className="caixaMensagem"
                        name="message"
                        onChange={(event) => setMessage(event.target.value)}
                        value={message} 
                        obrigatorio={true} 
                        placeholder="Digite sua mensagem..."
                    ></textarea>
                </div>
                <div style={{textAlign: "center"}}>
                    <Button
                        texto="Enviar"  
                    />
                </div>
                
            </form>
        </section>
    </div>)
}

export default Formulario;