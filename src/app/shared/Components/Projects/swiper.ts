import styled from "styled-components";

export const SwipeProjectStyle = styled.div`
    display: none;

    .swiper {
        max-height: 650px;
        min-height: 580px;
        display: flex;
        align-items: center;

        .swiper-button-next{
            color: ${props => props.theme.colors.primaryMedium};
            @media screen {
                @media (max-width: 410px) {
                    transform: translate(-75px, 250px);
                }
            }
        }
        .swiper-button-prev{
            color: ${props => props.theme.colors.primaryMedium};
            @media screen {
                @media (max-width: 410px) {
                    transform: translate(75px, 250px);
                }
            }
        }
    }
    @media screen {
        @media (max-width: 600px) {
            display: flex;
            align-items: center;
            width: 100%;
            margin: auto;
            height: auto;
        }
    }
`