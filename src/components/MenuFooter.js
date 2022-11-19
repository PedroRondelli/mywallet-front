import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MenuFooter() {
  return (
    <Footer>
      <Link to="/credit">
        <div>
          <p>Nova Entrada</p>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
      </Link>
      <Link to="/debit">
        <div>
          <p>Nova Saída</p>
          <ion-icon name="remove-circle-outline"></ion-icon>
        </div>
      </Link>
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;

  ion-icon {
    font-size: 21px;
    position: absolute;
    top: 5px;
    left: 5px;
    color: #ffff;
    text-decoration: none;
  }

  p {
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    color: #ffff;
    position: absolute;
    bottom: 5px;
    left: 5px;
  }

  div {
    position: relative;
    height: 114px;
    width: 155px;
    border-radius: 5px;
    border: solid 2px black;
    background-color: #a328d6;
    box-sizing: border-box;
  }
`;
