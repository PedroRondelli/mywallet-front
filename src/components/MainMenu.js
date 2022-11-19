import styled from "styled-components";
import BillsNote from "./BillsNote";
import MenuFooter from "./MenuFooter";
import MenuHeader from "./MenuHeader";

export default function MainMenu() {
  return (
    <CreditAndDebitContainer>
      <MenuHeader />
      <BillsNote />
      <MenuFooter/>
    </CreditAndDebitContainer>
  );
}

export const CreditAndDebitContainer = styled.div`
  min-height: 100vh;

  padding: 10px;
  background-color: #8c11be;
`;
