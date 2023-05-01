import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    background-color: ${props => props.theme.colors.primaryWhite};
    max-height: 120px;
    min-height: 110px;
    display: flex;
    align-items: center;
    min-width: 900px;
    border-bottom: 3px solid ${props => props.theme.colors.primaryMedium};
    position: fixed;
    z-index: 999;
    @media screen {
        @media (max-width: 900px) {
            min-width: 768px;
            border-bottom: 2px solid ${props => props.theme.colors.primaryMedium};
        }
        @media (max-width: 768px) {
            min-width: 320px;
        }
        @media (max-width: 580px) {
            min-height: 90px;
            border-bottom: 1px solid ${props => props.theme.colors.primaryMedium};
        }
    }

    .header_container{
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 1550px;
        
        width: 100%;
        margin: auto;

        .logo {
            width: 85px;
            object-fit: contain;
            margin-left: 30px;
            transition: 0.5s;

            @media screen {
                @media (max-width: 580px) {
                    width: 65px;
                    margin-left: 12px;
                }
            }
        }

        .hamburger_wrapper {
            transform: translateX(-5px);
            border-radius: 25px;
            width: 12rem;
            height: 7rem;
            display: flex;
            justify-content: center;
            padding: 1em;
            z-index: 999;
            display: none;

            @media screen {
                @media (max-width: 768px) {
                    display: block;
                }
                @media (max-width: 580px) {
                    height: 5.5rem;
                    width: 15rem;
                    transform: translateX(25px);
                }
                @media (max-width: 340px) {
                    width: 13rem;
                    height: 4.8rem;
                }
            }
            .hamburger_icon {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: space-between;
                cursor: pointer;
                align-items: center;
                
                .burger-bar {
                    width: 9rem;
                    height: 1rem;
                    background-color: ${props => props.theme.colors.neutralSoft};
                    border-radius: 0.5em;
                    box-shadow: 
                    0 0 5px ${props => props.theme.colors.primaryMedium},
                    0 0 10px ${props => props.theme.colors.primaryMedium};

                    @media screen {
                        @media (max-width: 580px) {
                            width: 6.5rem;
                            height: 0.6rem;
                        }
                        @media (max-width: 340px) {
                            width: 5rem;
                            height: .5rem;
                        }
                    }
                }
            }
        }
        
        
        .menu {
            width: 100%;
            height: 100vh;
            background-color: #ffffff6f;
            position: fixed;
            top: 0;
            z-index: 5;
            backdrop-filter: blur(14px);
            transition: 2s;
            display: none;

            @media screen {
                @media (max-width: 768px) {
                    flex-direction: column;
                    justify-content: center;
                    min-width: 0;
                    gap: 50px;
                    text-align: center;
                
                    @media (max-width: 340px) {
                        font-size: 3rem;
                        gap: 30px;
                    }
                }
            }
        }
        .hidden {
            display: none;
            transition: 2s;
        }
        
        .visible {
            display: inherit;
            transition: 2s;
        }
        
        .burger-bar.clicked:nth-child(1){
            transform: rotate(50deg) translate(3em, 2.25em);
            transition: ease-out 0.5s;
            @media screen {
                @media (max-width: 580px) {
                    transform: rotate(50deg) translate(1.7em, 0.5em);
                }
                @media (max-width: 340px) {
                    transform: rotate(50deg) translate(0.5em, -0.8em);
                }
            }
        }
        
        .burger-bar.clicked:nth-child(2){
            transform: scale(0.1);
            transition: ease-out 0.5s;
            display: none;
        }
        
        .burger-bar.clicked:nth-child(3){
            transform: rotate(125deg) translate(-0.5em, 0em);
            transition: ease-out 0.5s;
            @media screen {
                @media (max-width: 580px) {
                    transform: rotate(125deg) translate(-1.5em, 0.5em);
                }
                @media (max-width: 340px) {
                    transform: rotate(125deg) translate(-2.5em, 0.7em);
                }
            }
        }
        
        /* unclicked */
        .burger-bar.unclicked {
            transform: rotate(0) translate(0);
            transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
        }
        
    }
`