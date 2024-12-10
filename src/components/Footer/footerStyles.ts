import styled from 'styled-components';

export const FooterStyle = styled.section`
   max-width: 155rem;
   margin: 0 auto;
   padding: 1rem;
   margin-top: 5rem;
   border-top: 1px solid rgba(var(--light-green), 0.2);
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   position: relative;

   .logo {
      @media (max-width: 600px) {
         width: 4rem;
         height: 4rem;
      }
   }

   .name {
      width: 100%;
      text-align: end;
      font-size: 1.9rem;
      color: rgb(var(--light-green));

      .copy {
         font-size: 1.3rem;
         color: rgba(var(--light), 0.8);
         @media screen {
            @media (max-width: 600px) {
               font-size: 1.2rem;
            }
         }
      }
      @media screen {
         @media (max-width: 600px) {
            font-size: 1.4rem;
         }
      }
   }

   .social-media {
      display: flex;
      gap: 1.5rem;

      .icon {
         transition: 0.3s;
         &:hover {
            fill: rgba(var(--light-green));
         }
      }
   }
`;
