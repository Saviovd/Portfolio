import styled from "styled-components";

export const FooterStyle = styled.footer`
    position: relative;
    min-height: 200px;
    max-height: 240px;
    margin-top: 50px;
    background-color: ${props => props.theme.colors.primaryWhite};

    .footer_container {
        max-width: 1550px;
        margin: 0 auto;
        height: 165px;

        display: flex;
        
        @media screen {
            @media (max-width: 720px) {
                flex-direction: column;
                height: 250px;
                align-items: center;
                justify-content: center;
            }
        }
        .footer_contacts {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            @media (max-width: 720px) {
                min-height: 100px;
                width: 90%;
            }
            .icon_footer {
                font-size: 6rem;
                color: ${props => props.theme.colors.primarySoft};
                
                &:hover {
                    color: ${props => props.theme.colors.neutralSoft
                    };
                }

                @media screen {
                    @media (max-width: 800px) {
                        font-size: 5.5rem;
                    }
                    @media (max-width: 400px) {
                        font-size: 5rem;
                    }
                    @media (max-width: 340px) {
                        font-size: 4.5rem;
                    }
                }
            }
        }
        .footer_adress {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            @media (max-width: 720px) {
                min-height: 100px;
                width: 90%;
            }
            .adress {
                font-size: 4rem;
                color: ${props => props.theme.colors.primarySoft};
                .icon_adress {
                    font-size: 5rem;
                    color: ${props => props.theme.colors.primaryMedium};;
                }
                @media screen {
                    @media (max-width: 600px) {
                        font-size: 3.5rem;
                    }
                    @media (max-width: 340px) {
                        font-size: 3rem;
                    }
                }
            }
        }
    }

    .copy {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;

        .copy_text {
            width: 90%;
            max-width: 500px; 
            margin: 0 auto;
            background-color: ${props => props.theme.colors.neutralDark};
            min-height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 10px 10px 0 0;
        }
        .copy_text, .name_copy {
            font-size: 2rem;
            color: ${props => props.theme.colors.primaryWhite};
            .name_copy {
                color: ${props => props.theme.colors.primarySoft};
                margin-left: 8px;
                &:hover {
                    color: ${props => props.theme.colors.primaryMedium};
                }

                @media screen {
                    @media (max-width: 600px) {
                        font-size: 1.5rem;
                    }
                    @media (max-width: 340px) {
                        font-size: 1.2rem;
                    }
                }
            }

            @media screen {
                @media (max-width: 600px) {
                    font-size: 1.5rem;
                }
                @media (max-width: 340px) {
                    font-size: 1.2rem;
                }
            }
        }
    }
`