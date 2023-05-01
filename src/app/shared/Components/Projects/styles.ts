import styled from "styled-components";

export const ProjectsStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    height: 100vh;
    padding-top: 25px;

    .projects_container {
        margin: 0 auto;
        height: 80%;
        width: 96%;
        max-width: 1550px;
        min-height: 650px;

        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;

        @media screen {
            @media (max-width: 1440px) {
                min-height: 300px;
            }
            @media (max-width: 600px) {
                display: none;
            }
        }
    }
    @media screen {
        @media (max-width: 600px) {
            min-width: 310px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }
    }

    @media screen {
        @media (max-width: 1440px) {
            padding-top: 90px;
            justify-content: inherit;
        }
        @media (max-width: 768px) {
            height: auto;
        }
    }
`