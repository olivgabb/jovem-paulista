import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import Field from "../components/Field";
import { useAuth } from "../context/AuthContext";
import { loginRequest } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [enviando, setEnviando] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    await loginRequest({ email, senha }); // ponto de integração: ver src/services/api.ts
    login();
    navigate("/home");
  };

  return (
    <AuthCard title="Entrar" subtitle="Acesse a área restrita da sua rede profissional.">
      <form onSubmit={handleSubmit}>
        <Field label="E-mail" type="email" value={email} onChange={setEmail} placeholder="voce@empresa.com" />
        <Field label="Senha" type="password" value={senha} onChange={setSenha} placeholder="••••••••" />
        <div className="text-right mb-4 text-sm">
          <Link to="/esqueci-senha" className="text-blue-600 hover:underline font-medium">Esqueci minha senha</Link>
        </div>
        <Button type="submit" disabled={enviando}>Entrar</Button>
      </form>
      <p className="text-center text-sm text-slate-600 mt-6">
        Novo por aqui? <Link to="/cadastro" className="text-blue-600 hover:underline font-medium">Cadastre-se</Link>
      </p>
    </AuthCard>
  );
}
