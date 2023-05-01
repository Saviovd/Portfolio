import styled from "styled-components";

export const NavItemStyle = styled.li`
    list-style: none;
    white-space: nowrap;
    margin: 0 10px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    
    .menu_button {
        text-decoration: none;
        font-size: 2.6rem;
        color: ${props => props.theme.colors.neutralDark};
        font-weight: ${props => props.theme.wheight.weight600};
        z-index: 200;
        &::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: ${props => props.theme.colors.neutralDark};
            border-radius: 4px;
            scale: 0 1;
            transform-origin: left;
            transition: scale 0.35s;
        }
        &:hover {
            color: ${props => props.theme.colors.neutralMedium};
        }
        &:hover::before{
            scale: 1;
        }

        @media screen {
            @media (max-width: 1024px) {
                font-size: 2.2rem;
            }
            @media (max-width: 768px) {
                font-size: 6rem;
                color: ${props => props.theme.colors.neutralDark};
            }
            @media (max-width: 600px) {
                font-size: 5rem;
            }
            @media (max-width: 500px) {
                font-size: 3rem;
            }
            @media (max-width: 340px) {
                font-size: 2.6rem;
            }
        }

    }
`