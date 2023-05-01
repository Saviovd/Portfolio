import styled from "styled-components";
export const MoveToUpStyle = styled.div`
    z-index: 999;
    display: block;
    position: fixed;
    right: 10px;
    bottom: 18px;
    width: 60px;
    height: 60px;
    padding-top: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 50px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;    
    background: $primary-white;
    line-height: 24px;    
    text-align: center;
    animation: 1.5s enter forwards;
    transition: 0.5s;
    cursor: pointer;
    .bounce {
        color: ${props => props.theme.colors.primaryMedium};
        font-size: 6rem;
    }
    &:hover {
        box-shadow: 0 0 4px 2px ${props => props.theme.colors.primaryWhite}, 0 0 30px 2px ${props => props.theme.colors.primaryMedium};
        transition: 0.8s;
    }
    &:hover .bounce {
        position: inline;
        animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        -moz-animation: bounce 2s infinite;
        -o-animation: bounce 2s infinite;
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-20px);}
            60% {transform: translateY(-20px);}
        }
    }
    &:active{
        animation: top 1s ease-in-out forwards;
        @keyframes top {
            to {
                transform: translateY(-30px);
            }
        }
    }

    @keyframes enter {
        from {
            right: -100px;
        }
    }
`
