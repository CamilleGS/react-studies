import styled from "styled-components";

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 14px;
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.80);' };
border: ${props => props.isBack ? '1px solid #ffffff' : 'none' };
color: #fff;
font-size: 17px;
line-height: 28px; 
cursor: pointer;
width: 342px;
height: 74px;
margin-top: 130px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

img{
    ${props => props.isBack && 'transform: rotateY(180deg)'};
}


`
