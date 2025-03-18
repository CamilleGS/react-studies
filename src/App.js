import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import People from "./assets/people.png";
import Arrow from "./assets/arrowright.png";
import Trash from "./assets/trash.png";
import { Container, H1, Image, ContainerItems, InputLabel, Input, Button, User } from "./styles";

const App = () => {
  const [users, setUsers] = useState([]); //react hooks => ferramentas auxiliares
  const inputName = useRef();
  const inputAge = useRef();
  //estado no react é imutavel

  async function addNewUser() {
    /* const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(newUser);
    setUsers([...users, newUser]); */

    const { data: newUsers } = await axios.get("http://localhost:3001/users");
    setUsers(newUsers);
  }

  useEffect(() => {
    //inicia assim que a pagina carregar
    console.log("abcde");
  }, [users]);
  function deleteUSer(userId) {
    console.log(userId);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

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
        <Button onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="arrow" />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name} </p> <p>{user.age}</p>
              <button onClick={() => deleteUSer(user.id)}>
                {" "}
                <img src={Trash} alt="trash" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
};

export default App;
