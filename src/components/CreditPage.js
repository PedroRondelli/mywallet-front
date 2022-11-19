import styled from "styled-components";

export default function CreditPage() {
  return (
    <Container>
      <NewCreditTitle>Nova Entrada</NewCreditTitle>
      <form>
        <input placeholder="Valor" required />
        <input placeholder="Descrição" required />
        <button>Salvar Entrada</button>
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
