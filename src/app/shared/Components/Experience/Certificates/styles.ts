import styled from "styled-components";

export const CertificateStyle = styled.div`
    width: 98%;
    margin: auto;
    background-color: ${props => props.theme.colors.neutralDark};
    border-radius: 10px;
    padding: 20px 0;
    
    .certificate_title {
        color: ${props => props.theme.colors.primaryMedium};
        font-size: 4rem;
        display: block;
        text-align: center;
        margin: 10px auto 25px  auto;
        text-decoration: underline;
    }

    .cerficates_container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 98%;
        margin: 0 auto;
        gap: 10px;

        @media screen {
            @media (max-width: 540px) {
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                width: 90%;
                background-color: ${props => props.theme.colors.neutralDark};
                padding: 20px 0;
                border-radius: 10px;
                max-height: 500px;
                overflow-y: scroll;
                -webkit-overflow-scrolling: touch;

                &::-webkit-scrollbar {
                    width: 5px;
                }
                
                &::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                &::-webkit-scrollbar-thumb {  
                    border-radius: 10px;
                    background: ${props => props.theme.colors.primaryMedium};
                }
                &::-webkit-scrollbar-thumb:hover {
                    background-color: ${props => props.theme.colors.neutralSoft};
                }
            }
        }

        a {
            width: 30%;
            margin: 0;
            display: flex;
            justify-content: center;

            @media screen {
                @media (max-width: 900px){
                    min-width: 200px;
                }
                @media (max-width: 740px){
                    width: 40%;
                    min-width: 200px;
                    min-height: 130px;
                }
            }
        }
    }

    .icon-scroll{
    position: absolute;
    transform: translate(35px, -15px);
    background-color: ${props => props.theme.colors.neutralDark};
    width: 30px;
    height: 50px;
    margin-left: -15px;
    margin-top: -35px;
    box-shadow: inset 0 0 0 3px ${props => props.theme.colors.primaryMedium};
    border-radius: 25px;
    display: none;
    &:before{
        position: absolute;
        left: 50%;
        content: '';
        width: 15px;
        height: 15px;
        background: ${props => props.theme.colors.primaryMedium};
        margin-left: -8px;
        top: 8px;
        border-radius: 15px;
        animation-duration: 1.8s;
        animation-iteration-count: infinite;
        animation-name: scroll;
        @keyframes scroll {
            0%{
            opacity: 1;
            }
            100%{
            opacity: 0;
            transform: translateY(37px);
            }
        }
    }
    @media screen {
        @media (max-width: 740px) {
            display: block;
        }
        @media (max-width: 450px) {
            transform: translate(38px, 50px);
        }
        @media (max-width: 380px) {
            transform: translate(18px, 10px);
        }
    }
}
`