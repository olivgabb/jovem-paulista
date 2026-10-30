export default function Logo({ big = false }: { big?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`${big ? "w-11 h-11 text-2xl" : "w-8 h-8 text-lg"} rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center`}>
        C
      </div>
      <span className={`${big ? "text-3xl" : "text-xl"} font-bold text-blue-700`}>Jovem Paulista</span>
    </div>
  );
}
