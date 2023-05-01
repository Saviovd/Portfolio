import styled from "styled-components";

export const AboutStyle = styled.section`
    height: calc(100vh - 20px);
    min-height: 600px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .about_container {
        max-width: 1550px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin: 0 auto;

        .photograph {
            width: 40%;
            max-height: 580px;
            max-width: 750px;
            min-width: 450px;
            margin-left: 20px;
            object-fit: contain;

            text-align: center;

            @media screen {
                @media (max-width: 995px) {
                    width: 60%;
                }
                @media (max-width: 490px) {
                    min-width: 310px;
                    margin-left: 0;
                }
            }
        }

        .about_text {
            width: 49%;
            height: 80%;
            min-width: 500px;
            color: ${props => props.theme.colors.primarySoft};
            font-size: 2.8rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: auto 10px auto auto;
            
            @media screen {
                @media (max-width: 1350px){
                    font-size: 2.5rem;
                }
                @media (max-width: 995px){
                    font-size: 2.3rem;
                    width: 90%;
                    margin: 20px 0 35px 0;
                    min-width: 310px;
                    text-align: center;
                }
                @media (max-width: 510px){
                    width: 95%;
                    font-size: 1.8rem;
                }
                @media (max-width: 445px){
                    font-size: 2rem;
                }
            }
        }

        @media screen {
            @media (max-width: 995px){
                flex-direction: column;
            }
        }
    }

    @media screen {
        @media (max-width: 995px){
            max-height: none;
            padding-top: 120px;
        }
    }
`