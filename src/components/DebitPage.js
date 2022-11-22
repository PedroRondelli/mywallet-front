import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function saveEntry(form, event, navigate, config) {
  event.preventDefault();
  const body = {
    ...form,
    value: Number(form.value),
    date: dayjs().format("DD/MM"),
  };
  if (!body.value) {
    alert("Insira um número válido");
  }
  const promise = axios.post("http://localhost:5000/extract", body, config);
  promise.then((resp) => {
    console.log(resp);
    navigate("/mainMenu");
  });
  promise.catch((erro) => console.log(erro));
}

export default function CreditPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
  }, []);
  const [form, setForm] = useState({
    value: "",
    description: "",
    creditOrDebit: "debit",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <Container>
      <NewCreditTitle>Nova Saída</NewCreditTitle>
      <form>
        <input
          placeholder="Valor"
          value={form.value}
          name="value"
          onChange={handleForm}
          required
        />
        <input
          placeholder="Descrição"
          value={form.description}
          name="description"
          onChange={handleForm}
          required
        />
        <button onClick={(event) => saveEntry(form, event, navigate, config)}>
          Salvar Saída
        </button>
      </form>
    </Container>
  );
}

const NewCreditTitle = styled.h1`
  font-family: Raleway;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0em;
  color: #ffff;
  margin: 10px auto;
`;

const Container = styled.div`
  min-height: 100vh;

  padding: 10px;
  background-color: #8c11be;
`;
