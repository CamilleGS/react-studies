import React from 'react'
import People from './assets/people.png'
import Arrow from './assets/arrowright.png'
import {Container, H1, Image, ContainerItems, InputLabel,Input, Button} from './styles'

const App = () => {

  return (
    <Container>
      <Image alt='logo-img' src={People}/>
      <ContainerItems>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome'/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade'/>
        <Button>Cadastrar <img src={Arrow}/></Button>
      </ContainerItems>

      
      
    </Container>
  ) 


}

export default App