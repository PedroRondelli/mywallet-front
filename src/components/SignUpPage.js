import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginAndSingUpContainer } from "./LoginPage";

function register(event, form) {
  event.preventDefault();
  const body = {...form}
  const passwordIsConfirmed = (form.password = form.repeatPassword);
  if (passwordIsConfirmed) {
    delete body.repeatPassword
    const promise = axios.post("http://localhost:5000/signUp", body);
    promise.then((resp) => console.log(resp));
    promise.catch((erro) => console.log(erro));
    return;
  }
  alert("Confirme a senha");
}

export default function SignUpPage() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });
  const navigate = useNavigate();
  const tokenExist = localStorage.getItem("token");
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
          placeholder="Nome"
          value={form.name}
          name="name"
          onChange={handleForm}
          required
        />
        <input
          placeholder="E-mail"
          value={form.email}
          name="email"
          onChange={handleForm}
          type={"email"}
          required
        />
        <input
          placeholder="Password"
          value={form.password}
          name="password"
          onChange={handleForm}
          type={"password"}
          required
        />
        <input
          placeholder="Confirme a senha"
          value={form.repeatPassword}
          name="repeatPassword"
          onChange={handleForm}
          type={"password"}
          required
        />
        <button onClick={(event) => register(event, form)}>Cadastrar</button>
      </form>
      <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
    </LoginAndSingUpContainer>
  );
}
