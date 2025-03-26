import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrowright.png";
import Trash from "../../assets/trash.png";
import H1 from "../../components/title"
import ContainerItems from "../../components/containerItems"

import { Container, Image, Button, User } from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]); //react hooks => ferramentas auxiliares
  
  

  useEffect(() => {
    async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }
    fetchUsers()
  }, []);


  async function deleteUSer(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  const navigate = useNavigate();  // Hook para navegação programática

  const handleClick = () => {
    navigate('/');  // Redireciona para a rota '/usuarios'
  };

  return (
    <Container>
      <Image alt="logo-img" src={Avatar} />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>
        
       

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

        <Button onClick={handleClick}>
        <img src={Arrow} alt="arrow" /> Voltar
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Users;
