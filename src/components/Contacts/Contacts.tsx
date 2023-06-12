import styled from 'styled-components';
import data from '@/data/data.json';
import Image from 'next/image';
import Title from '../Title/Title';

const { contacts } = data;

const ContactStyle = styled.section`
   max-width: 1700px;
   padding-bottom: 6rem;
   margin: 0 auto;

   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;

   .contact_container {
      display: flex;
      justify-content: space-around;
      width: 100%;

      .contact_card {
         width: 35rem;
         display: grid;
         height: 10rem;
         grid-template-areas:
            'icon type'
            'icon name';
         grid-template-rows: 40% auto;
         grid-template-columns: 33% auto;
         background-color: rgba(var(--second-primary-color), 0.5);
         .icon {
            grid-area: icon;
            background-color: rgba(var(--first-primary-color), 0.8);
            padding: 0.5rem;
            width: 10rem;

            @media screen {
               @media (max-width: 1440px) {
                  width: 8rem;
               }
            }
         }

         .type {
            grid-area: type;
            font-size: 1.4rem;
            padding-top: 1rem;
            color: rgba(var(--first-primary-color), 0.6);

            @media screen {
               @media (max-width: 1440px) {
                  padding-left: 1rem;
               }
            }
         }

         .name {
            grid-area: name;
            font-size: 1.7rem;
            margin: 0;
            padding: 0.5rem;

            @media screen {
               @media (max-width: 1440px) {
                  font-size: 1.5rem;
                  padding: 1rem;
               }
            }
         }

         @media screen {
            @media (max-width: 1440px) {
               width: 30rem;
               grid-template-columns: 30% auto;
            }
         }
      }
   }
`;

const Contacts = () => {
   return (
      <>
         <ContactStyle id='contatos'>
            <Title
               secondWord='Contatos'
               firstColor='rgb(var(--second-primary-color))'
               firstWord='Meus'
            />
            <div className='contact_container'>
               {contacts.map(({ icon, name, type, url }, i: number) => (
                  <div className='contact_card' key={i}>
                     <Image
                        className='icon'
                        src={icon}
                        alt='contact icon'
                        width={50}
                        height={90}
                     />
                     <span className='type'>{type}</span>
                     <a href={url} className='name' target='_blank'>
                        {name}
                     </a>
                  </div>
               ))}
            </div>
         </ContactStyle>
      </>
   );
};

export default Contacts;
