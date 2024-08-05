import styled from 'styled-components';

export const ContactStyle = styled.section.attrs({ content: 'text' })`
   max-width: 1800px;
   padding-bottom: 6rem;
   margin: 0 auto;
   margin: 5rem auto 0;

   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;

   .section-title {
      align-items: center;
      gap: 1rem;
   }
   .contact_container {
      display: flex;
      justify-content: space-around;
      margin-top: 2rem;
      width: 100%;
      gap: 2rem;

      @media screen {
         @media (max-width: 1090px) {
            gap: 1rem;
         }
         @media (max-width: 950px) {
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 5rem 2rem;
         }
         @media (max-width: 600px) {
            margin-top: 2rem;
         }
         @media (max-width: 500px) {
            gap: 2rem;
         }
      }

      .contact_card {
         width: 30%;
         height: 10rem;
         border: 2px solid rgba(var(--primary-blue), 0.5);
         cursor: pointer;
         transition: 0.3s;
         position: relative;
         z-index: 1;
         display: flex;
         justify-content: center;

         @media screen {
            @media (max-width: 1085px) {
               height: 8rem;
               max-width: 26.5rem;
            }
            @media (max-width: 950px) {
               width: 35%;
            }
            @media (max-width: 755px) {
               width: 40%;
            }
            @media (max-width: 640px) {
               width: 60%;
            }
            @media (max-width: 500px) {
               width: 70%;
            }
         }
         .contact_item {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon_box {
               display: flex;
               align-items: center;
               justify-content: flex-start;
               left: 1rem;
               top: calc(50% - 3rem);
               position: absolute;
               color: white;

               .icon {
                  @media screen {
                     @media (max-width: 1085px) {
                        width: 5rem;
                     }
                  }
               }
            }

            .type {
               grid-area: type;
               font-size: 1.4rem;
               padding-top: 1rem;
               color: rgba(var(--primary-blue));
               align-self: center;
               margin-left: 6rem;
               text-transform: capitalize;
               @media screen {
                  @media (max-width: 1500px) {
                  }
               }
            }

            .name {
               grid-area: name;
               font-size: 1.7rem;
               margin: 0;
               margin-left: 6rem;
               padding: 0.5rem;
               @media screen {
                  @media (max-width: 1090px) {
                     font-size: 1.4rem;
                  }
               }
            }
            &:hover {
               border: 2px solid rgba(var(--primary-pink), 0.5);
               transform: scale(1.1);
               &::after {
                  transition: 0.4s;
                  content: attr(content);
                  font-size: 2rem;
                  color: rgba(var(--primary-pink));
                  font-weight: 700;
                  letter-spacing: 3px;

                  background-color: rgba(0, 0, 0, 0.7);
                  backdrop-filter: blur(6px);

                  width: 100%;
                  height: 100%;

                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: absolute;
                  @media screen {
                     @media (max-width: 1500px) {
                        font-size: 1.7rem;
                     }
                     @media (max-width: 1370px) {
                        font-size: 1.5rem;
                     }
                     @media (max-width: 1024px) {
                        font-size: 1.3rem;
                     }
                     @media (max-width: 390px) {
                        font-size: 1.2rem;
                     }
                  }
               }
            }
         }
      }
   }
`;
