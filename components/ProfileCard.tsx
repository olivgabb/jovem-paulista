interface ProfileCardProps {
  nome: string;
  conexoes: number;
}

export default function ProfileCard({ nome, conexoes }: ProfileCardProps) {
  return (
    <aside className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden self-start">
      <div className="h-16 bg-linear-to-r from-blue-600 to-blue-400" />
      <div className="p-4 -mt-8 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-white border-4 border-white shadow flex items-center justify-center text-2xl font-bold text-blue-700">
          {nome.charAt(0).toUpperCase()}
        </div>
        <p className="font-bold mt-2 text-slate-900">{nome}</p>
        <p className="text-sm text-slate-500">Bem-vindo(a) à sua rede</p>
        <p className="mt-3 text-sm text-slate-600">
          Conexões <span className="font-bold text-blue-700">{conexoes}</span>
        </p>
      </div>
    </aside>
  );
}
