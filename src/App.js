import React, {useState} from 'react'
import People from './assets/people.png'
import Arrow from './assets/arrowright.png'
import Trash from './assets/trash.png'
import { Container, H1, Image, ContainerItems, InputLabel, Input, Button, User } from './styles'

const App = () => {

  //const users = []

  const [users, setUsers] = useState([]) //react hooks => ferramentas auxiliares

 //estado no react é imutavel

  function addNewUser(){
   setUsers([{ id: Math.random(), name: 'Rodolfo', age: 28 }])

   // console.log(users)
  
  }

  

  return (
    <Container>
      <Image alt='logo-img' src={People} />
      <ContainerItems>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />
       {/*  não pode por parenteses no add newUser */}
        <Button onClick={addNewUser}>Cadastrar <img src={Arrow} alt='arrow' /></Button>


        <ul>{
          users.map(user => (
            <User key={user.id}>
             <p>{user.name} </p>  <p>{user.age}</p> 
              <button> <img src={Trash} alt='trash'/></button>
            </User>
          ))
        }
        </ul>
      </ContainerItems>



    </Container>
  )


}

export default App