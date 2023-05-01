import styled from "styled-components";

export const FormationStyle = styled.div`
    width: 100%;
    
    .formation_container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0 20px;
        gap: 15px;

        @media screen {
            @media (max-width: 730px) {
                flex-direction: column;
            }
        }

        .box {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            border: 2px solid ${props => props.theme.colors.neutralDark};
            border-radius: 10px;
            padding: 15px;
            min-width: 350px;
            min-height: 120px;
            max-height: 160px;
            
            text-align: center;
            margin: 20px 0;

            @media screen {
                @media (max-width: 860px){
                    min-width: 290px;
                }
                @media (max-width: 730px){
                    width: 90%;
                    min-height: 150px;
                    min-width: 290px;
                }
            }
            .type_course {
                position: absolute;
                font-size: 1.5rem;
                font-weight: 300;
                text-decoration: underline;
                top: 5px;
                left: 5px;
                color: ${props => props.theme.colors.neutralDark};
                @media screen {
                    @media (max-width: 860px){
                        font-size: 1.6rem;
                    }
                    @media (max-width: 730px){
                        font-size: 1.4rem;
                    }
                }
            }
            .course {
                font-size: 1.9rem;
                margin: 5px 0 0 0;
                color: ${props => props.theme.colors.neutralDark};
                @media screen {
                    @media (max-width: 860px){
                        font-size: 1.9rem;
                    }
                    @media (max-width: 730px){
                        font-size: 1.8rem;
                        margin-top: 10px;
                    }
                }
            }
            .instituition {
                font-size: 1.7rem;
                margin: 0;
                color: ${props => props.theme.colors.neutralDark};
                @media screen {
                    @media (max-width: 860px){
                        font-size: 1.6rem;
                    }
                    @media (max-width: 730px){
                        font-size: 1.6rem;
                    }
                }
            }
            .period {
                font-size: 1.5rem;
                color: ${props => props.theme.colors.neutralDark};
                @media screen {
                    @media (max-width: 860px){
                        font-size: 1.5rem;
                    }
                    @media (max-width: 730px){
                        font-size: 1.5rem;
                    }
                }
            }
            .time {
                position: absolute;
                right: 10px;
                bottom: 10px;
                display: flex;
                align-items: center;
                
                .clock {
                    color: ${props => props.theme.colors.neutralDark};
                    font-size: 1.5rem;
                    transform: translateX(-3px);
                    @media screen {
                        @media (max-width: 860px){
                            font-size: 1.4rem;
                        }
                        @media (max-width: 730px){
                            font-size: 1.3rem;
                        }
                    }
                }
                .hours {
                    color: ${props => props.theme.colors.neutralDark};
                    font-size: 1.3rem;
                    @media screen {
                        @media (max-width: 860px){
                            font-size: 1.4rem;
                        }
                        @media (max-width: 730px){
                            font-size: 1.3rem;
                        }
                    }
                }
            }
        }
    }
`