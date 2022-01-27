import { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "./context/media";
import Header from "./components/layout/Header/Header";
import NavBar from "./components/layout/Navbar/NavBar";
import UsersList from "./components/layout/Users/UsersList";
import Form from "./components/layout/Form/Form";
import Layout from "./context/Layout";
import { usersList } from "./data/data";
import "./css/reset.css";
import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import uuid from "./tools/randomId";

export default function App() {
  const [users, setUsers] = useState([...usersList]);
  const [isActive, setActive] = useState("false");

  console.log(users);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const addUser = (user) => {
    user.id = uuid();
    setUsers([...users, user]);
  };

  return (
    <Layout>
      <Container>
        <NavBar />
        <div className="main">
          <Header users={users} handleToggle={handleToggle} />
          <Form
            isActive={isActive}
            handleToggle={handleToggle}
            addUser={addUser}
          />
          <UsersList users={users} />
        </div>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  ${breakpoints("flex-direction", "", [{ 768: "column" }])}
  ${breakpoints("height", "%", [{ 768: 100 }])}


  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.background};
    ${breakpoints("padding-left", "px", [{ 4000: 103 }, { 768: 0 }])}
  }
`;
