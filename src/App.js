import { GlobalStyle } from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import CreditPage from "./components/CreditPage";
import MainMenu from "./components/MainMenu";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/mainMenu" element={<MainMenu />} />
          <Route path="/credit" element={<CreditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
