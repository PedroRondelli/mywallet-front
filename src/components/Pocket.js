import styled from "styled-components";

export default function Pocket({ listExists, total }) {
  let inCash = total;
  if (total < 0) {
    inCash = inCash * -1;
  }
  return (
    <Balance listExists={listExists} total={total}>
      <h1>Saldo</h1>
      <h2>{inCash.toFixed(2)}</h2>
    </Balance>
  );
}

const Balance = styled.div`
  display: ${(props) => (props.listExists ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  h1 {
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
  }

  h2 {
    font-family: Raleway;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;

    color: ${(props) => (props.total > 0 ? "#03AC00" : "#C70000")};
  }
`;
