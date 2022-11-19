import styled from "styled-components";

export default function MenuHeader() {
  return (
    <Header>
      <h1>{`Olá Fulano`}</h1>
      <ion-icon name="exit-outline"></ion-icon>
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
`;
