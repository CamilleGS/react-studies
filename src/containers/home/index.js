import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import People from "../../assets/people.png";
import Arrow from "../../assets/arrowright.png";
import Button from "../../components/button";
import { Container, Image, InputLabel, Input} from "./styles";
import H1 from "../../components/title"
import ContainerItems from "../../components/containerItems"

const App = () => {
  const [users, setUsers] = useState([]); //react hooks => ferramentas auxiliares
  const inputName = useRef();
  const inputAge = useRef();
  //estado no react é imutavel

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(newUser);
    setUsers([...users, newUser]); 


  }
 const navigate = useNavigate();  // Hook para navegação programática

 const handleButtonClick = async () => {
  // Primeiro, adiciona o novo usuário
  await addNewUser();

  // Depois de adicionar, navega para a rota '/usuarios'
  navigate('/usuarios');
};
  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItems>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />
        {/*  não pode por parenteses no add newUser */}
        <Button  onClick={handleButtonClick}>
          Cadastrar <img src={Arrow} alt="arrow" />
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default App;
