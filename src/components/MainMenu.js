import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BillsNote from "./BillsNote";
import MenuFooter from "./MenuFooter";
import MenuHeader from "./MenuHeader";

export default function MainMenu() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const promise = axios.get("http://localhost:5000/extract", config);
    promise.then((resp) => console.log(resp.data));
    promise.catch((erro) => console.log(erro));
  }, []);
  return (
    <Container>
      <MenuHeader />
      <BillsNote />
      <MenuFooter />
    </Container>
  );
}

export const Container = styled.div`
  min-height: 100vh;

  padding: 10px;
  background-color: #8c11be;
`;
