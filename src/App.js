import { GlobalStyle } from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
         <Route path="/"element={<LoginPage/>}/> 
         <Route path="/signUp" element={<SignUpPage/>} />
         <Route path="/mainMenu"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
