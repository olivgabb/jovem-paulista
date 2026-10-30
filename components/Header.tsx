import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";

export default function Header() {
  const { nome, logout } = useAuth();
  const navigate = useNavigate();

  const sair = () => {
    // TODO (integração API): invalidar o token/sessão no servidor (ex.: POST /auth/logout).
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-4 py-2">
        <Logo />
        <input
          className="hidden sm:block flex-1 max-w-xs rounded-full bg-blue-50 px-4 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Buscar pessoas, vagas, empresas"
        />
        {/* Nome do usuário no canto superior direito */}
        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {nome.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-semibold text-slate-800 max-w-36 truncate">{nome}</span>
          </div>
          <button onClick={sair} className="text-sm rounded-full border border-blue-600 text-blue-600 px-3 py-1 hover:bg-blue-50">
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
