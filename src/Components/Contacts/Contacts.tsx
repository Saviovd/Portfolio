import './Contacts.scss'
import emailjs from '@emailjs/browser'
import Title from '../Title/Title';
import { BsWhatsapp } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import InputError from './inputError/InputError';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

interface UserFormData {
    name?: string
    email?: string
    linkedin?: string
    message?: string
}
const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    linkedin: yup.string().url(),
    message: yup.string().required()
});

const Contacts = ({name, email, linkedin, message}: UserFormData) => {
    
    const  initialValues = {name, email, linkedin, message}
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema),
    });
    function onSubmit(data: UserFormData) {
        console.log(data)
    }
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dados = e.currentTarget 

        emailjs
            .sendForm("service_f3s7evr", "template_15k4g2i", dados, "8hEOfTx-PZ6GsJF1u")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.currentTarget.reset()
    }
    return (
        <section className="contacts" id="Contatos">
            <Title title='Contatos' />
            <div className='contacts_container'>
                <form className='form' id="form" onSubmit={sendEmail} onBlur={handleSubmit(onSubmit)}>
                    <h3 className='form_title'>Entre em contato</h3>
                    <div className='form_div' >
                        <label htmlFor='name' className='form_label'>Nome*</label>
                        <input
                            className='form_input input_name'
                            type="text"
                            placeholder=' Como posso te chamar ? '
                            {...register('name')}
                        />
                        {errors?.name?.type && <InputError type={errors.name.type} field="name" />}
                    </div>
                    <div className='form_div' >
                        <label htmlFor='email' className='form_label'>E-mail*</label>
                        <input
                            className='form_input'
                            type="text"
                            placeholder=' Qual seu e-mail ? '
                            {...register('email')}
                        />
                        {errors?.email?.type && <InputError type={errors?.email.type} field="email" />}
                    </div>
                    <div className='form_div' >
                        <label htmlFor='linkedin' className='form_label'>Linkedin</label>
                        <input
                            className='form_input'
                            type="text"
                            placeholder=' Digite a URL do seu perfil  ;)'
                            {...register('linkedin')}
                        />
                        {errors?.linkedin?.type && <InputError type={errors.linkedin.type} field="linkedin" />}
                    </div>
                    <div className='form_div message' >
                        <label htmlFor='message' className='form_label'>Mensagem*</label>
                        <textarea
                            className="message_box"
                            placeholder=' Mensagem... '
                            {...register('message')}
                        ></textarea>
                        {errors?.message?.type && <InputError type={errors.message.type} field="message" />}
                    </div>

                    <button className='button'>Enviar</button>
                </form>
                <div className='whatsapp'>
                    <h3 className='whatsapp_title'>Você também pode entrar em contato comigo através do <span className='whatsapp_title-neon'>WhatsApp</span></h3>
                    <a className='whatsapp_link' target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5541991791628'>
                        <BsWhatsapp className='Whatsapp_icon' />
                    </a>
                </div>
            </div>
        </section>
    )
}


export default Contacts;