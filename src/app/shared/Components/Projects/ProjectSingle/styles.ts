import styled from "styled-components";

export const ProjectStyle = styled.div`
    width: 30%;
    height: 45%;
    min-width: 220px;
    margin: 0 auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .project {
        width: 100%;
        height: 100%;
        max-width: 265px;
        max-height: 330px;
        position: relative;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        border: 2px solid ${props => props.theme.colors.primaryMedium};
        border-radius: 10px;
        box-shadow: 0 0 4px 2px ${props => props.theme.colors.primaryWhite}, 0 0 30px 2px ${props => props.theme.colors.primaryMedium};
        transition: box-shadow 4s ease-out;

        .project_preview {
            width: 100%;
            position: absolute;
            top: 0;
            border-radius: 10px 10px 0 0;
            height: 150px;
            object-fit: cover;
            border-bottom: 1px solid ${props => props.theme.colors.primaryMedium};
            transition: 1s;
            z-index: 1;
            &:hover {
                scale: 1.1 ;
                box-shadow: 0 0 4px 2px ${props => props.theme.colors.primaryWhite}, 0 0 45px 2px ${props => props.theme.colors.primaryMedium};
                border-radius: 10px;
                z-index: 100;
            }

            @media screen {
                @media (max-width: 1440px) {
                    height: 110px;
                }
                @media (max-width: 600px) {
                    height: 180px;
                }
                @media (min-height: 900px) {
                    height: 145px;
                }
            }
        }
        .project_name {
            justify-self: center;
            transform: translateY(30px);
            color: ${props => props.theme.colors.primaryWhite};
            font-size: 2.4rem;
            border-bottom: 1px solid  ${props => props.theme.colors.primaryMedium};
            text-align: center;
            width: 88%;
            @media screen {
                @media (max-width: 1440px) {
                    font-size: 1.9rem;
                    transform: translateY(15px);
                }
                @media (max-width: 600px) {
                    font-size: 2.4rem;
                    transform: translateY(25px);
                }
                @media (min-height: 900px) {
                    transform: translateY(10px);
                    font-size: 2.3rem;
                }
            }
        }
        .project_description {
            position: absolute;
            bottom: 20px;
            color: ${props => props.theme.colors.primaryWhite};
            font-size: 1.5rem;
            width: 98%;
            text-align: center;
            padding: 0 4px;
            margin-top: 0;
            @media screen {
                @media (max-width: 1440px) {
                    font-size: 1.3rem;
                }
                @media (max-width: 600px) {
                    font-size: 1.6rem;
                }
                @media (min-height: 900px) {
                    font-size: 1.5rem;
                }
            }
        }

        @media screen {
            @media (max-width: 1440px) {
                max-width: 215px;
                max-height: 250px;
            }
            @media (max-width: 768px) {
                min-height: 250px;
                margin: 15px 0;
            }
            @media (max-width: 600px) {
                min-height: 370px;
                width: 65%;
                max-width: none;
                min-width: 290px;
                margin: 15px 0;
            }
            @media (max-width: 410px) {
                width: 83%;
            }
            @media (min-height: 900px) {
                min-height: 340px;
            }
        }
    }

    @media screen {
        @media (max-width: 1440px) {
            align-items: flex-end;
        }
        @media (max-width: 768px) {
            width: 40%;
            height: auto;
            align-items: center;
        }
        @media (max-width: 600px) {
            width: 80%;
            margin: auto;
        }
    }
`