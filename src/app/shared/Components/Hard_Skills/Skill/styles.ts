import styled from "styled-components";

export const SkillStyle = styled.li`

    display: grid;
    grid-template-areas: 
        "logo name"
        "logo about"
    ;
    grid-template-columns: 40% 60%;
    grid-template-rows: 20% 80%;
    align-items: center;

    height: 140px;
    width: 380px;

    margin: 10px;
    padding: 5px;
    background-color: ${props => props.theme.colors.primaryWhite};
    border-radius: 10px;

    .skill_name {
        grid-area: name;
        align-self: flex-end;
        font-size: 1.8rem;
        padding-left: 8px;
        color: ${props => props.theme.colors.neutralDark};
        text-decoration: underline; 
        font-weight: ${props => props.theme.wheight.weight600};
    }

    .skill_logo {
        grid-area: logo;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .skill_about {
        grid-area: about;
        font-size: 1.5rem;
        padding-left: 8px;
        color: ${props => props.theme.colors.neutralDark};
        font-weight: ${props => props.theme.wheight.weight400};

        @media screen {
            @media (max-width: 1270px) {
                font-size: 1.3rem;
            }
            @media (max-width: 350px) {
                font-size: 1.2rem;
            }
        }
    }

    @media screen {
        @media (max-width: 1022px) {
            width: 350px;
        }
        @media (max-width: 640px) {
            width: 75%;
        } 
        @media (max-width: 425px) {
            width: 90%;
        } 
    }
`