import styled from 'styled-components';

export const AboutStyle = styled.section`
   max-width: 1700px;
   margin: 0 auto;
   min-height: 45rem;
   margin-top: 5rem;
   padding-top: 3rem;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;

   @media screen {
      @media (max-width: 790px) {
         margin-top: 7rem;
         padding-top: 2rem;
      }
   }

   .about_content {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      z-index: 1;
      height: 100%;
      @media screen {
         @media (max-width: 1055px) {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 3rem;
         }
         @media (max-width: 460px) {
            padding: 0 1rem;
         }
      }
      .photograph {
         clip-path: polygon(
            20% 0%,
            80% 0%,
            100% 50%,
            80% 100%,
            20% 100%,
            0% 50%
         );
         height: max-content;
         object-fit: cover;
         border-radius: 50%;
         transition: transform 0.3s ease-in-out;

         @media screen and (max-width: 500px) {
            min-height: 0;
            width: 95%;
            clip-path: polygon(
               10% 0%,
               90% 0%,
               100% 50%,
               90% 100%,
               10% 100%,
               0% 50%
            );
         }

         &:hover {
            animation: glitch-cursor-seta 800ms forwards, distort 0.5s infinite;
            transform: scale(1.05);
         }
      }
   }

   .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: center;
      flex-direction: column;
      max-width: 70rem;
      padding-right: 2rem;
      @media screen {
         @media (max-width: 1055px) {
            padding: 0;
         }
         @media (max-width: 600px) {
            margin-top: 2rem;
         }
      }

      .about_me {
         font-size: 2.1rem;
         font-weight: 200;
         line-height: 3rem;
         letter-spacing: 1px;
         margin: 0;

         .name {
            font-size: 2.2rem;
            color: rgba(var(--primary-pink));
            font-weight: 500;
         }
         @media screen {
            @media (max-width: 1440px) {
               font-size: 2rem;
            }
            @media (max-width: 1210px) {
               font-size: 1.8rem;
            }
            @media (max-width: 790px) {
               font-size: 1.7rem;
               width: 95%;
            }
            @media (max-width: 500px) {
               font-size: 1.6rem;
               line-height: 2.5rem;
            }
            @media (max-width: 430px) {
               font-size: 1.3rem;
            }
         }
      }
      .qualities {
         font-size: 1.9rem;
         font-weight: 200;
         line-height: 2.2rem;
         letter-spacing: 1px;
         margin: 0;

         @media screen {
            @media (max-width: 1440px) {
               font-size: 1.8rem;
            }
            @media (max-width: 1210px) {
               font-size: 1.6rem;
            }
            @media (max-width: 790px) {
               font-size: 1.4rem;
            }
            @media (max-width: 430px) {
               font-size: 1.2rem;
            }
         }

         .qualities_title {
            font-weight: 700;
            letter-spacing: 0.1rem;
            margin-bottom: 0;
         }

         .emphasis {
            color: rgba(var(--primary-blue));
            font-weight: 500;
            margin-right: 0.7rem;

            &::after {
               content: ':';
            }
            @media screen {
               @media (max-width: 1055px) {
                  font-weight: 600;
                  font-size: 1.65rem;
                  margin: 1rem auto 0.5rem;
                  &::after {
                     content: '';
                  }
               }
               @media (max-width: 790px) {
                  font-size: 1.5rem;
               }
               @media (max-width: 470px) {
                  margin: 0.5rem auto 0.3rem;
               }
               @media (max-width: 430px) {
                  font-size: 1.4rem;
                  margin: 0.5rem auto 0;
               }
            }
         }
         ul {
            padding: 0;
            margin: 1rem 0 0 0;
         }

         li {
            margin: 0 0 1.5rem 0;
            @media screen {
               @media (max-width: 1055px) {
                  display: flex;
                  flex-direction: column;
                  margin: 0 0 1.8rem 0;
                  max-width: 50rem;

                  &:nth-child(3) {
                     margin: 0;
                  }
               }
               @media (max-width: 790px) {
                  max-width: 40rem;
               }
               @media (max-width: 470px) {
                  max-width: max-content;
                  width: 90%;
                  margin: 0 auto;
                  &:nth-child(3) {
                     margin: 0 auto;
                  }
               }
            }
         }
      }

      @-webkit-keyframes blink {
         100% {
            box-shadow: 0 0 3px rgb(var(--secondary-white)),
               0 0 4px rgb(var(--secondary-white)),
               0 0 12px rgb(var(--secondary-white)), 0 0 5px #0ba9ca,
               0 0 10px #0ba9ca, 0 0 15px #0ba9ca;
         }
      }

      @keyframes blink {
         100% {
            box-shadow: 0 0 3px rgb(var(--secondary-white)),
               0 0 5px rgb(var(--secondary-white)),
               0 0 5px rgb(var(--secondary-white)), 0 0 10px #0ba9ca,
               0 0 20px #0ba9ca, 0 0 30px #0ba9ca;
         }
      }

      @keyframes imgGlitch {
         0% {
            clip-path: path(
               'M400,21.66V10.49h-116.29V0H39.36V54.56H0v36.09H101.25v9.77H.23v5.52H101.25v14.44H22.77v15.29H13.82v39.06H.23v6.79H13.82v15.29h60.63v20.81H10.25v51.17H.23v26.75H61.69v30.57h-29.35v12.1H0v30.57H22.77v31.36H400v-25.41h-31.43v-5.95h31.43v-8.28h-31.43v-15.92h-9.57v-14.65h32.56v-13.38h8.44v-10.83h-8.44v-52.23h-79.37v-21.02h69.78v-7.64h18.03v-24.7h-8.44v-52.58h-22.99v-11.89h31.43v-15.29h-31.43v-36.3h31.43V35.03h-116.29v-13.38h116.29ZM138.57,120.38h15.14v15.29h-15.14v-15.29ZM74.45,386.85v-18.08h39.56v14.01h144.19v4.06H74.45Zm89.32-42.28v-6.37h-34.45v-12.1h48.49v18.47h-14.04Zm56.73-25.48h-5.05v-2.55h5.05v2.55Zm-5.05-13.38v-10.19h5.05v10.19h-5.05Z'
            );
         }
         50% {
            clip-path: path(
               'M398.2,238.77v-14.06h2.28v-24.74h-2.28v-37.76h-8.45v-4.24H215.93v-3.23h178.76v-61.25H254.7v-3.19h33.11v-11.59h102.55V29.58h-52.25V0H93.75V13.18H0v11.19H39.84v29.77H.48v36.15H39.84v28.22H18.22v6.81h5.04v10.06H14.3v61.25h60.63v2.12H1.05v56.57H29.76v21.71H96.62v3.81h4.79v7.66h-3.83v-6.14H.6v14.67H62.17v13.8H.48v30.62H82.37v3.83h35.94v8.77H15.17v13.3H118.31v8.77H.48v23.84H244.84v-12.97h134.3v-18.11h21.34v-8.29h-21.34v-26.19h19.02v-25.45h-42.19v-26.19h18.5v-1.93h26.01v-10.85h-26.01v-25.51h-71.49v-5.73h95.22Zm-171.06-75.27v14.95h-11.21v-14.95h11.21Zm-88.09-38.17h38.45v-5.25h15.55v15.31h-54.01v-10.06Zm76.88,189.34v-3.83h40.42v14.92h-10.22v-11.09h-30.21Zm-45.94,30.62h7.52v8.77h-7.52v-8.77Zm0,22.07h7.52v8.77h-7.52v-8.77Z'
            );
         }
         100% {
            clip-path: path(
               'M400.21,112.61v-15.31H234.82v-9.04h52.51v-6.59h112.67V32.54h-33.6V6.06h-95.3V0H69.47V2.36H29.34V13.55h40.13v7.51H32.34v20.87h-12.38v10.18H0v36.15H19.96v49.37h18.2v23.05H13.82v11.8H.23v6.81H13.82v37.96h18.52v22.74H13.14v13.3h19.2v8.96h106.23v4.44H.23v26.8H61.69v30.62h-29.35v14.67H114.47v11.23H17.55v30.62h18.3v17.63h51.68v-17.63h26.94v11.98h143.72v5.65h141.81v-25.45h-114.47v-5.21h101.25v-.75h13.22v-8.29h-13.22v-29.24h-17.58v-10.32h30.72v-10.85h-30.72v-5.11h30.72v-31.26h-16.99v-29.1h17.08v-24.74h-60.14v-6.74h-24.11v-8.11h70.6v-61.25h-20.92v-29.24h34.78Zm-164.97,180.87v-8.94h88.66v12.37h-108.46v-3.43h19.79Zm-50.53-151.63v18.82h-30.76v-23.05h71.6v4.23h-40.84Z'
            );
         }
      }
   }
`;
