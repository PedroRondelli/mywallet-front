import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BillsNote from "./BillsNote";
import MenuFooter from "./MenuFooter";
import MenuHeader from "./MenuHeader";

export default function MainMenu() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
      return;
    }
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
