import { Link } from "react-router-dom";
import { LoginAndSingUpContainer } from "./LoginPage";

export default function SignUpPage() {
  return (
    <LoginAndSingUpContainer>
      <h1>MyWallet</h1>
      <form>
        <input placeholder="Nome" required />
        <input placeholder="E-mail" type={"email"} required />
        <input placeholder="Password" type={"password"} required />
        <input placeholder="Confirme a senha" required />
        <button>Cadastrar</button>
      </form>
      <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
    </LoginAndSingUpContainer>
  );
}
