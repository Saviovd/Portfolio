import styled from "styled-components";

export const TitleStyle = styled.h1`
    font-size: 7rem;
    color: ${props => props.theme.colors.primaryMedium};
    font-weight: 600;
    margin: 30px auto 15px auto;
    text-align: center;
    @media screen {
        @media (max-width: 768px) {
            font-size: 6rem;
        }
        @media (max-width: 520px) {
            font-size: 5rem;
        }
        @media (max-width: 450px) {
            font-size: 4.5rem;
        }
    }
`