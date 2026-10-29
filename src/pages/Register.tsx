import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import Field from "../components/Field";
import { useAuth } from "../context/AuthContext";
import { registerRequest } from "../services/api";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [formacao, setFormacao] = useState("");
  const [enviando, setEnviando] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    // Ponto de integração: ver src/services/api.ts (envia todos os campos)
    await registerRequest({ nome, email, senha, habilidades, formacao });
    // Localmente, apenas o NOME é salvo (localStorage) e exibido no header
    register(nome.trim() || "Usuário");
    navigate("/home");
  };

  return (
    <AuthCard title="Crie seu perfil" subtitle="Conecte-se com profissionais e oportunidades.">
      <form onSubmit={handleSubmit}>
        <Field label="Nome completo" value={nome} onChange={setNome} placeholder="Maria da Silva" />
        <Field label="E-mail" type="email" value={email} onChange={setEmail} placeholder="voce@empresa.com" />
        <Field label="Senha" type="password" value={senha} onChange={setSenha} placeholder="Crie uma senha" />
        <Field label="Habilidades" multiline value={habilidades} onChange={setHabilidades} placeholder="Ex.: Gestão de projetos, React, Vendas B2B" />
        <Field label="Formação" multiline value={formacao} onChange={setFormacao} placeholder="Ex.: Administração – USP, MBA em Gestão" />
        <Button type="submit" disabled={enviando}>Cadastrar e entrar</Button>
      </form>
      <p className="text-center text-sm text-slate-600 mt-6">
        Já tem conta? <Link to="/login" className="text-blue-600 hover:underline font-medium">Entrar</Link>
      </p>
    </AuthCard>
  );
}
