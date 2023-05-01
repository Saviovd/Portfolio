import styled from "styled-components";

export const CourseStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border: 2px solid ${props => props.theme.colors.primaryWhite};
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    min-width: 250px;
    min-height: 120px;
    
    text-align: center;
    margin: 10px 0;
    

    .type_course {
        position: absolute;
        font-size: 1.5rem;
        font-weight: ${props => props.theme.wheight.weight300};
        text-decoration: underline;
        top: 5px;
        left: 5px;
        color: ${props => props.theme.colors.primaryWhite};

        @media screen {
            @media (max-width: 900px){
                font-size: 1.4rem;
            }
        }
    }
    .course {
        font-size: 2.1rem;
        margin: 15px 0 0 0;
        color: ${props => props.theme.colors.primaryWhite};
        @media screen {
            @media (max-width: 900px){
                font-size: 1.6rem;
            }
        }
    }
    .instituition {
        font-size: 2rem;
        margin: 0;
        color: ${props => props.theme.colors.primaryWhite};
        @media screen {
            @media (max-width: 900px){
                font-size: 1.45rem;
            }
        }
    }
    .period {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.primaryWhite};
        @media screen {
            @media (max-width: 900px){
                font-size: 1.3rem;
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
            color: ${props => props.theme.colors.primaryWhite};
            font-size: 1.5rem;
            transform: translateX(-3px);
            @media screen {
                @media (max-width: 900px){
                    font-size: 1.3rem;
                }
            }
        }
        .hours {
            color: ${props => props.theme.colors.primaryWhite};
            font-size: 1.5rem;
            @media screen {
                @media (max-width: 900px){
                    font-size: 1.3rem;
                }
            }
        }
    }

    @media screen {
        @media (max-width: 900px){
            min-width: 200px;
        }
        @media (max-width: 740px){
            min-width: 200px;
            min-height: 130px;
            flex: none;
        }
    }
`