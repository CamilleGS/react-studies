import styled from 'styled-components'
import Background from './assets/bgimage1.svg'


export const Container = styled.div`
    background: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;

`

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: Roboto, 'Sans Serif';
    font-size: 34px;
    font-style: normal;
    line-height: normal;
    margin-bottom: 80px;

`

export const Image = styled.img`
margin-top: 30px;

`
export const ContainerItems = styled.div`
border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
padding: 50px 36px;
display: flex;
flex-direction: column;


`

export const InputLabel = styled.p`
color: #EEE;
font-size: 18px;
font-style: normal;
line-height: 22px; 
letter-spacing: -0.408px;
margin-left: 25px;
`

export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
width: 342px;
height: 58px;
padding-left: 25px;
outline: none;
margin-bottom: 34px;

color: #FFF;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 14px;
background: rgba(0, 0, 0, 0.80);
border: none;
color: #fff;
font-size: 17px;
line-height: 28px; 
cursor: pointer;
width: 342px;
height: 74px;

`


