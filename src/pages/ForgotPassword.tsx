import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import Field from "../components/Field";
import { forgotPasswordRequest } from "../services/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await forgotPasswordRequest(email); // ponto de integração: ver src/services/api.ts
    setEnviado(true);
  };

  return (
    <AuthCard title="Recuperar acesso" subtitle="Informe seu e-mail e enviaremos um link de redefinição.">
      <form onSubmit={handleSubmit}>
        <Field label="E-mail" type="email" value={email} onChange={setEmail} placeholder="voce@empresa.com" />
        <Button type="submit">Enviar link</Button>
      </form>
      {enviado && (
        <p className="mt-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-sm p-3">
          Se o e-mail estiver cadastrado, você receberá as instruções em instantes.
        </p>
      )}
      <p className="text-center text-sm mt-6">
        <Link to="/login" className="text-blue-600 hover:underline font-medium">← Voltar ao login</Link>
      </p>
    </AuthCard>
  );
}
