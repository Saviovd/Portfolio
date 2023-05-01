import styled from "styled-components";

export const HomeStyle = styled.section`
    height: 100vh;

    .apresentation {
        font-size: 5rem;
        color: ${props => props.theme.colors.primaryMedium};
        padding-top: 120px;
        text-align: center;
        height: 75%;
        min-height: 300px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media screen {       
            @media (max-width: 768px){
                font-size: 4rem;
            }
            @media (max-width: 630px){
                font-size: 3.5rem;
                padding-top: 50px;
                min-height: 280px;
            }
            @media (max-width: 540px){
                font-size: 3rem;
                text-align: left;
            }
            @media (max-width: 400px){
                font-size: 2.5rem;
            }
            @media (max-width: 350px){
                text-align: center;
                margin: 15px;
                font-size: 1.8rem;
            }
        }
    }
    
    .social_media {
        height: 110px;
        margin: 0 auto;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .anchor_icon {
            padding: 10px;            
            .icons_home {
                font-size: 10rem;    
                text-decoration: none;
                color: ${props => props.theme.colors.primaryMedium};
                
                @media (max-width: 700px){
                    font-size: 7rem;
                }
                @media (max-width: 350px){
                    font-size: 5rem;
                }
            }
            &:nth-child(1):hover {
                background-color: #0077b7;
                border-radius: 12px;
                .icons_home {
                    color: ${props => props.theme.colors.primaryWhite};
                }
            }
            &:nth-child(2):hover {
                background-color: black;
                border-radius: 12px;
                .icons_home {
                    color: white;
                }
            }
            &:nth-child(3):hover {
                background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
                border-radius: 12px;
                .icons_home {
                    color: ${props => props.theme.colors.primaryWhite};
                }
            }
        }
        /* @media screen {
            @media (max-width: 650px) {
                min-height: 100px;
            }   
        } */
    }

    /* @media screen {
        @media (max-width: 768px) {
            min-height: 730px;
        } 
        @media (max-width: 340px) {
            min-height: 455px;
        }   
    } */
`