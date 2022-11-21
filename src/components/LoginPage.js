import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function login(body,event) {
  event.preventDefault(); 
  const promise = axios.post("http://localhost:5000/signIn", body);
  promise
    .then((resp) => console.log(resp.data))
    .catch((erro) => console.log(erro.response.data));
}

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <LoginAndSingUpContainer>
      <h1>MyWallet</h1>
      <form>
        <input
          value={form.email}
          placeholder="E-mail"
          type={"email"}
          name="email"
          onChange={handleForm}
          required
        />
        <input
          value={form.password}
          placeholder="Password"
          type={"password"}
          name="password"
          onChange={handleForm}
          required
        />
        <button onClick={(event) => login(form,event)}>Entrar</button>
      </form>
      <Link to={"/signUp"}>Primeira vez? Cadastre-se!</Link>
    </LoginAndSingUpContainer>
  );
}

export const LoginAndSingUpContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #8c11be;

  a {
    text-decoration: none;
    font-family: "Raleway", sans-serif;
    color: #ffff;
  }

  h1 {
    font-family: "Saira Stencil One";
    font-size: 32px;
    line-height: 50px;
    color: #ffff;
  }
`;
