import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function removeSession(navigate, config) {
  const promise = axios.delete("http://localhost:5000/deleteSession",config);
  localStorage.removeItem("token");
  navigate("/");
}

export default function MenuHeader() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  return (
    <Header>
      <h1>{`Olá Fulano`}</h1>
      <ion-icon
        onClick={() => removeSession(navigate, config)}
        name="exit-outline"
      ></ion-icon>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Raleway;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0em;
  color: #ffff;
  margin: 10px auto;

  ion-icon {
    cursor: pointer;
  }
`;
