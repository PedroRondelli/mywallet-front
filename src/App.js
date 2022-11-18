import { GlobalStyle } from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
         <Route path="/"element={<LoginPage/>}/> 
         <Route path="/signUp" element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
