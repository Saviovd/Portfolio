import styled from 'styled-components';

export const Job = styled.div`
   width: calc(100% - 2rem);
   background-color: rgba(var(--primary-blue), 0.1);
   position: relative;
   margin-bottom: 1rem;
   padding: 1rem 1rem 2.5rem;
   border-radius: 1px;
   border: 1px solid rgba(var(--primary-blue), 0.5);

   .office {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .office-title {
         grid-area: office;
         font-size: 2.3rem;

         @media screen {
            @media (max-width: 1075px) {
               font-size: 2rem;
            }
            @media (max-width: 500px) {
               font-size: 1.6rem;
            }
            @media (max-width: 440px) {
               font-size: 1.4rem;
            }
         }
      }
      .separator {
         width: 2px;
         height: 3rem;
         background-color: rgba(var(--primary-blue));
         margin-left: 1rem;

         @media screen {
            @media (max-width: 500px) {
               height: 2.4rem;
            }
         }
      }
      .period {
         grid-area: period;
         font-size: 1.5rem;
         white-space: nowrap;
         letter-spacing: 1px;
         color: rgba(var(--primary-blue), 0.9);
         span {
            margin: 0 0.5rem;
         }
         @media screen {
            @media (max-width: 1075px) {
               font-size: 1.4rem;
            }
            @media (max-width: 500px) {
               font-size: 1.3rem;
            }
            @media (max-width: 440px) {
               font-size: 1.2rem;
            }
         }
      }

      @media screen {
         @media (max-width: 500px) {
            flex-wrap: wrap;
         }
      }
   }

   .company {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 18rem;
      padding: 5px 5px 0;
      gap: 0.5rem;
      .logo {
         grid-area: logo;
         transition: 0.5s;
         height: 100%;
         object-fit: contain;
         border-radius: 50%;
         border: 1px solid rgba(var(--primary-blue));
      }
      .company-title {
         grid-area: company;
         transition: 0.5s;
         font-size: 1.6rem;
         font-weight: 300;
         @media screen {
            @media (max-width: 1075px) {
               font-size: 1.4rem;
            }
         }
      }

      &:hover {
         .logo {
            scale: 1.1;
         }
         .company-title {
            color: rgba(var(--primary-blue));
         }
      }

      @media screen {
         @media (max-width: 440px) {
            .logo {
               width: 2rem;
               height: 2rem;
            }
            .company-title {
               font-size: 1.2rem;
            }
         }
      }
   }
   .regime {
      grid-area: regime;
      font-size: 1.5rem;
      padding: 1px 5px;
      border-radius: 3px;
      letter-spacing: 1px;
      text-transform: capitalize;
      background-color: rgba(var(--primary-pink));
      align-self: flex-end;
      position: absolute;
      bottom: 1rem;
      right: 1rem;

      @media screen {
         @media (max-width: 440px) {
            font-size: 1.1rem;
            bottom: 0.5rem;
            right: 0.5rem;
         }
      }
   }

   &:nth-last-child(1) {
      margin-bottom: 0;
   }

   p {
      margin: 0;
   }

   .assignments {
      grid-area: assignments;
      padding: 0;
      font-size: 1.35rem;

      .assignment {
         &::before {
            content: '-';
            margin-right: 1rem;
         }
      }

      @media screen {
         @media (max-width: 1075px) {
            font-size: 1.2rem;
         }
         @media (max-width: 440px) {
            font-size: 1rem;
         }
      }
   }

   @media screen {
      @media (max-width: 440px) {
         padding: 0.5rem 0.5rem 1.5rem 1rem;
      }
   }
`;
