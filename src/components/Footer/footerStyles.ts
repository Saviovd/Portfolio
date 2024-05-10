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
   }

   .copy {
      font-size: 1.3rem;
      color: rgba(var(--secondary-white), 0.4);
   }
`;
