import styled from 'styled-components';

export const ButtonLinkStyle = styled.a`
   position: relative;
   outline: none;
   letter-spacing: 0.1rem;
   text-align: center;
   transition: background-position 0.4s ease, border-color 0.4s ease;
   white-space: nowrap;
   display: flex;
   align-items: center;
   border: 1px solid transparent;
   background-image: linear-gradient(
      to right,
      rgba(var(--light-green), 0.8),
      rgba(var(--light-blue), 0.5)
   );
   background-size: 200% 100%;
   background-position: left;
   border-radius: 5px;
   padding: 1rem 1.5rem;
   border: 0;
   gap: 5px;

   &:hover {
      background-position: right;
      transition: background-position 0.4s ease;
   }
`;
