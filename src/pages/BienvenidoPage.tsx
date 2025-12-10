import { useNavigate } from "react-router-dom";

export function BienvenidoPage(){
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center space-y-4">
        <h1 className="text-2xl font-bold mb-2">Bienvenido</h1>

        <button
          onClick={() => navigate("/nuevo-registro")}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Registro de nuevo cliente
        </button>

        <button
          onClick={() => navigate("/busqueda-cliente")}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Búsqueda de cliente
        </button>
      </div>
    </div>
  );
}