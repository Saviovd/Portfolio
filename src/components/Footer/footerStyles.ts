import styled from 'styled-components';

export const FooterStyle = styled.section`
   max-width: 1700px;
   margin: 0 auto;
   padding: 0 3rem;
   border-top: 1px solid rgba(var(--secondary-white), 0.2);
   height: 6rem;
   display: flex;
   justify-content: space-between;
   align-items: center;

   .name {
      font-size: 1.9rem;
      color: rgb(var(--primary-blue));

      @media screen and (max-width: 500px) {
         font-size: 1.6rem;
      }
      @media screen and (max-width: 400px) {
         font-size: 1.3rem;
      }
   }

   .copy {
      font-size: 1.3rem;
      color: rgba(var(--secondary-white), 0.4);

      @media screen and (max-width: 500px) {
         font-size: 1rem;
      }
      @media screen and (max-width: 500px) {
         font-size: .8rem;
      }
   }

   @media screen and (max-width: 500px) {
      padding: 0 1rem 0 1rem;
      height: 5rem;
   }
`;
