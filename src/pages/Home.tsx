import { useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { nome } = useAuth();
  const [conectados, setConectados] = useState<string[]>([]);

  const conectar = (pessoa: string) =>
    setConectados((atual) => (atual.includes(pessoa) ? atual : [...atual, pessoa]));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto grid gap-4 p-4 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_280px]">
        <ProfileCard nome={nome} conexoes={24 + conectados.length} />
        <Feed />
        <Sidebar conectados={conectados} onConectar={conectar} />
      </main>
    </div>
  );
}
