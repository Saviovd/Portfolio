import styled from 'styled-components';

export const HeaderStyle = styled.header`
   z-index: 3;
   max-width: 1200px;
   width: 80%;
   margin: 0 auto;
   padding: 0 2rem;

   display: flex;
   align-items: center;
   justify-content: flex-start;

   position: fixed;
   top: 3rem;
   right: 0%;
   left: 0%;

   backdrop-filter: blur(5px);

   background-color: rgb(var(--primary-pink));
   border-radius: 2px;



   .logo {
      position: absolute;
      left: 3rem;
      @media screen {
         @media (max-width: 1440px) {
            height: 3rem;
            width: 6rem;
            height: 6rem;
         }
         @media (max-width: 1024px) {
            height: 3rem;
            width: 5rem;
            height: 5rem;
         }
         @media screen {
            @media (max-width: 768px) {
               top: 2rem;
               left: 1.5rem;
               width: 4rem;
               height: 4rem;
            }
         }
      }
   }

   .burger_icon {
      cursor: pointer;
      position: absolute;
      right: 2rem;
      top: 2.5rem;
      font-size: 4rem;
      color: rgb(var(--secondary-white));
      z-index: 9;
      display: none;

      @media screen {
         @media (max-width: 768px) {
            display: initial;
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         justify-content: flex-end;
         top: 2rem;
         width: 100%;
         top: 0;
         justify-content: flex-end;
         background-color: rgba(var(--primary-pink), 0.5);
      }
      @media (max-width: 768px) {
         padding: 0;
         height: 8rem;
         top: 0;
         width: 100%;
         border-bottom: 1px solid rgb(var(--primary-pink));
         background-color: transparent;
      }
   }
`
export const Languages = styled.div`
	display: flex;
	margin-left: 2rem;
	.language {
		cursor: pointer;
		margin: 0 5px;
		font-weight: 900;
	}
	@media screen {
		@media (max-width: 1160px) {
			margin-left: 0rem;
		}
	}
`;
