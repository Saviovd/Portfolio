import styled from "styled-components";

export const SkillsStyle = styled.section`
    min-height: 350px;
    margin: 0 auto;

    .skills_title {
        font-size: 3.5rem;
        color: ${props => props.theme.colors.primaryMedium};
        width: 95%; 
        margin: 20px 0 10px 0; 
        display: block; 
        text-align: center;
        @media screen {
            @media (max-width: 820px){
                font-size: 2.5rem;
                margin: 15px auto 0 auto;
            }
        }
    }

    .skill_list {
        margin: auto;
        width: 95%;

        .lenguages {
            height: 280px;

            .lenguage {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .swiper-pagination-bullet {
                width: 23px;
                height: 23px;
                margin: 0 7px;
                background-color: ${props => props.theme.colors.primaryMedium};

                @media screen {
                    @media (max-width: 640px) {
                        display: none;
                    }
                }
            }

            .swiper-button-next, .swiper-button-prev {
                display: none;
                color: ${props => props.theme.colors.primaryMedium};

                @media screen {
                    @media (max-width: 640px) {
                        display: block;
                    }
                }
            }
            .swiper-button-next{
                transform: translateX(5px);
                @media screen {
                    @media (max-width: 425px) {
                        transform: translate(-90px, 110px);
                    }
                }
            }
            .swiper-button-prev{
                transform: translateX(-5px);
                @media screen {
                    @media (max-width: 425px) {
                        transform: translate(90px, 110px);
                    }
                }
            }
            position: relative;
        }

        @media screen {
            @media (max-width: 640px) {
                width: 100%;
            }
        }
    }

    @media screen {
            @media (max-width: 640px) {
                margin-top: 80px;
            }
        }
`