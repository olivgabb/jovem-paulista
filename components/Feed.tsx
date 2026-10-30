import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { postsIniciais, type Post } from "../data/mock";
import { publishPostRequest } from "../services/api";

const card = "bg-white rounded-xl border border-blue-100 shadow-sm";

export default function Feed() {
  const { nome } = useAuth();
  const [texto, setTexto] = useState("");
  const [posts, setPosts] = useState<Post[]>(postsIniciais); // TODO (integração API): carregar via GET /feed

  const publicar = async () => {
    if (!texto.trim()) return;
    await publishPostRequest(texto);
    setPosts([{ autor: nome, cargo: "Membro da rede", texto, curtidas: 0 }, ...posts]);
    setTexto("");
  };

  return (
    <section className="space-y-4">
      <div className={`${card} p-4`}>
        <textarea
          rows={2}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Compartilhe uma ideia ou oportunidade com sua rede…"
          className="w-full rounded-lg border border-blue-200 px-3 py-2 text-sm outline-none focus:border-blue-600"
        />
        <div className="text-right mt-2">
          <button onClick={publicar} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-1.5">
            Publicar
          </button>
        </div>
      </div>

      {posts.map((p, i) => (
        <article key={i} className={`${card} p-4`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              {p.autor.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-slate-900 leading-tight">{p.autor}</p>
              <p className="text-xs text-slate-500">{p.cargo}</p>
            </div>
          </div>
          <p className="mt-3 text-slate-700 text-sm">{p.texto}</p>
          <p className="mt-3 text-xs text-slate-500 border-t border-blue-50 pt-2">👍 {p.curtidas} curtidas</p>
        </article>
      ))}
    </section>
  );
}
