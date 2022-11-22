import styled from "styled-components";
import dayjs from "dayjs";

export default function Entry({ element }) {
  return (
    <EntryOrExit creditOrDebit={element.creditOrDebit}>
      <h1>{element.date}</h1>
      <h2>{element.description}</h2>
      <h3>{element.value.toFixed(2)}</h3>
    </EntryOrExit>
  );
}

const EntryOrExit = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px auto;

  text-align: center;
  h1 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;

    color: #c6c6c6;
  }
  h2 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
  }
  h3 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${(props) =>
      props.creditOrDebit === "credit" ? "#03AC00" : "#C70000"};
  }
`;
