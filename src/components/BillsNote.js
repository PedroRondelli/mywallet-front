import styled from "styled-components";

export default function BillsNote() {
  const listExists= false
  return (
    <Note listExists={listExists}>
      <p>Não há registros de</p>
      <p>entrada ou saída</p>
    </Note>
  );
}

const Note = styled.div`
  height: 67vh;
  background-color: #ffff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content:${(props)=> !props.listExists? "center":"initial"};
  align-items: center;
  p {
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    color: #868686;
  }
`;
