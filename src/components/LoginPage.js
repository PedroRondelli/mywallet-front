import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function login(body, event, navigate) {
  event.preventDefault();
  const promise = axios.post("http://localhost:5000/signIn", body);
  promise
    .then((resp) => {
      localStorage.setItem("token", resp.data);
      navigate("/mainMenu");
      console.log(resp.data)
    })
    .catch((erro) => console.log(erro.response.data));
}

export default function LoginPage() {
  const tokenExist = localStorage.getItem("token");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (tokenExist) {
      navigate("/mainMenu");
      return;
    }
  }, []);

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
        <button onClick={(event) => login(form, event, navigate)}>
          Entrar
        </button>
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
