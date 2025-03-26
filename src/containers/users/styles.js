import styled from 'styled-components'
import Background from '../../assets/bgimage.svg'


export const Container = styled.div`
    background: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;

`


export const Image = styled.img`
margin-top: 30px;

`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 14px;
background: transparent;
border: 1px solid;
color: #fff;
font-size: 17px;
line-height: 28px; 
cursor: pointer;
width: 342px;
height: 74px;
margin-top: 120px;

img{
    transform: rotateY(180deg);
}
&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

`
export const User = styled.li`

display: flex;
justify-content: space-around;
align-items: center;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
width: 342px;
height: 58px;
outline: none;
color: #fff;
margin-top: 20px;


p{
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
 button{
    background: none;
    border: none;
    cursor: pointer;
 }

`


