import styled from "styled-components";

export const NavigationStyle = styled.div`
    align-items: center;
    display: flex;
    
    .navigation_list {
        display: flex;
        justify-content: space-evenly;
        padding: 0;
        margin-right: 0px;

        width: 40%;
        max-width: 750px;
        min-width: 650px;
        
        @media screen {
            @media (max-width: 768px) {
                display: none;
            }
            @media screen {
                @media (max-width: 900px) {
                    min-width: 560px;
                    margin-right: 0;
                }
            }
        }
    }
`