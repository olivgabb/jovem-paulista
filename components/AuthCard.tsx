import type { ReactNode } from "react";
import Logo from "./Logo";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

// Layout compartilhado por Login, Cadastro e Esqueci minha senha
export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-linear-to-b from-blue-600 to-blue-100">
      <div className="mb-6 bg-white rounded-xl px-5 py-3 shadow">
        <Logo big />
      </div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-500 mb-6">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}
