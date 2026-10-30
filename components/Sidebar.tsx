import { sugestoes, vagas } from "../data/mock";

interface SidebarProps {
  conectados: string[];
  onConectar: (nome: string) => void;
}

const card = "bg-white rounded-xl border border-blue-100 shadow-sm p-4";

export default function Sidebar({ conectados, onConectar }: SidebarProps) {
  return (
    <aside className="space-y-4 md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1">
      <div className={card}>
        <h2 className="font-bold text-slate-900 mb-3">Pessoas que você talvez conheça</h2>
        {sugestoes.map((s) => (
          <div key={s.nome} className="flex items-center justify-between gap-2 mb-3 last:mb-0">
            <div>
              <p className="text-sm font-semibold text-slate-800">{s.nome}</p>
              <p className="text-xs text-slate-500">{s.cargo}</p>
            </div>
            <button
              onClick={() => onConectar(s.nome)} // TODO (integração API): POST /conexoes
              className="text-xs rounded-full border border-blue-600 text-blue-600 px-3 py-1 hover:bg-blue-50 whitespace-nowrap"
            >
              {conectados.includes(s.nome) ? "Enviado ✓" : "+ Conectar"}
            </button>
          </div>
        ))}
      </div>

      <div className={card}>
        <h2 className="font-bold text-slate-900 mb-3">Vagas em destaque</h2>
        <ul className="space-y-2 text-sm text-blue-700">
          {vagas.map((v) => (
            <li key={v} className="hover:underline cursor-pointer">{v}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
