import Image from 'next/image';
import styled from 'styled-components';

const FooterStyle = styled.section`
   max-width: 1700px;
   margin: 0 auto;
   padding: 0 5rem;

   border-top: 1px solid rgba(var(--white-unification), 0.2);
   height: 7rem;

   display: flex;
   justify-content: space-between;
   align-items: center;

   .name {
      font-size: 2.3rem;
      color: rgb(var(--first-primary-color));
   }

   .copy {
      font-size: 1.6rem;
      color: rgba(var(--white-unification), 0.4);
   }
`;

const Footer = () => {
   return (
      <>
         <FooterStyle>
            <p className='name'>Sávio Almeida <span className='copy'> &copy; 2023, All Rights Reserved.</span></p>
            <Image src={'/assets/savio.jpg'} alt='Logo of Savio Almeida</>' width={40} height={40}/>
         </FooterStyle>
      </>
   );
};

export default Footer;
