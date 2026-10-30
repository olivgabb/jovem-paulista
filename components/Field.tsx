interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
}

const inputClass =
  "w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200";

// Campo controlado: o estado fica na página, então o valor é sempre editável
export default function Field({ label, value, onChange, type = "text", placeholder, multiline }: FieldProps) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-slate-700 mb-1">{label}</span>
      {multiline ? (
        <textarea rows={3} className={inputClass} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type={type} className={inputClass} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}
