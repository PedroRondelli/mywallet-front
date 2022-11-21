import styled from "styled-components";
import Entry from "./Entry";
import NoEntryText from "./NoEntrysText";
import Pocket from "./Pocket";

export default function BillsNote({ list }) {
  const listExists = list.length > 0;
  let total = 0;
  list.forEach((element) => {
    if (element.creditOrDebit === "credit") {
      total =total + element.value;
    } else {
      total = total - element.value;
    }
  });
  return (
    <Note listExists={listExists}>
      {listExists ? (
        list.map((element, idx) => <Entry key={idx} element={element} />)
      ) : (
        <NoEntryText />
      )}
      <Pocket listExists={listExists} total={total} />
    </Note>
  );
}

const Note = styled.div`
  height: 67vh;
  background-color: #ffff;
  border-radius: 5px;

  position: relative;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: ${(props) => (!props.listExists ? "center" : "initial")};
  align-items: center;

  overflow-y: scroll;
  p {
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    color: #868686;
  }
`;
