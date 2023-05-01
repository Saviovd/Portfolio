import styled from "styled-components";

export const JobStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    border: 2px solid ${props => props.theme.colors.neutralDark};
    border-radius: 10px;
    padding: 15px;
    width: 90%;
    min-width: 400px;
    max-width: 700px;
    min-height: 150px;
    max-height: 200px;
    
    text-align: center;
    margin: 20px auto;

    @media screen {
        @media (max-width: 520px) {
            min-width: 290px;
            width: 80%;
        }
    }

    .type_job {
        position: absolute;
        font-size: 2rem;
        font-weight: ${props => props.theme.wheight.weight300};
        text-decoration: underline;
        top: 10px;
        left: 10px;
        color: ${props => props.theme.colors.neutralDark};

        @media screen {
            @media (max-width: 600px) {
                font-size: 1.5rem;
            }
        }
    }
    .office {
        font-size: 3rem;
        margin: 15px 0 0 0;
        color: ${props => props.theme.colors.neutralDark};

        @media screen {
            @media (max-width: 600px) {
                font-size: 2.2rem;
            }
        }
    }
    .business {
        font-size: 2.3rem;
        margin: 5px 0;
        color: ${props => props.theme.colors.neutralDark};

        @media screen {
            @media (max-width: 600px) {
                font-size: 1.8rem;
            }
        }
    }
    .period {
        font-size: 2rem;
        color: ${props => props.theme.colors.neutralDark};

        @media screen {
            @media (max-width: 600px) {
                font-size: 1.7rem;
            }
        }
    }
`