import styled from "styled-components";
// import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Container>
      <h1>MyWallet</h1>
      <form>
        <input placeholder="E-mail" type={"email"} required></input>
        <input placeholder="Password" type={"password"} required></input>
        <button>Entrar</button>
      </form>
      <Link to={"/signUp"}>Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #8c11be;

  a{
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    color: #ffff;
  }

  h1 {
    font-family: "Saira Stencil One";
    font-size: 32px;
    line-height: 50px;
    color: #ffff;
  }
`;
