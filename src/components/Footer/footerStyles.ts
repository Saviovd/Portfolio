import styled from 'styled-components';

export const FooterStyle = styled.section`
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

      @media screen and (max-width: 500px) {
         font-size: 1.7rem;
      }
   }

   .copy {
      font-size: 1.6rem;
      color: rgba(var(--white-unification), 0.4);

      @media screen and (max-width: 500px) {
         font-size: 1.3rem;
      }
   }

   @media screen and (max-width: 500px) {
      padding: 0 1.5rem 0 2rem;
   }
`;
