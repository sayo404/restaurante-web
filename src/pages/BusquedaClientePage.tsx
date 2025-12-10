import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client";
import type { GenericResponse } from "../api/client";

export function BusquedaClientePage(){
    const navigate = useNavigate();
    const [termino, setTermino] = useState("");
    const [resultados, setResultados] = useState<ClienteResponse[]>([]);
    const [cargando, setCargando] = useState(false);

    async function handleBuscar(e: FormEvent){
        e.preventDefault();
        setCargando(true);
        setResultados([]);

        try{
            const response = await api.get<ClienteResponse[]>("/buscarcliente", {
                params: {termino},
            });
            setResultados(response.data);
        }catch(err){
            setResultados([]);
        }finally{
            setCargando(false);
        }
    }


  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Búsqueda de cliente
        </h1>

        <form onSubmit={handleBuscar} className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Nombre, apellido o número de celular"
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {cargando ? "Buscando..." : "Buscar"}
          </button>
        </form>

        <button
          onClick={() => navigate("/bienvenido")}
          className="mb-4 text-sm text-blue-600 hover:underline"
        >
          ← Volver a Bienvenido
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-3 py-2 text-left">Nombre</th>
                <th className="px-3 py-2 text-left">Apellido</th>
                <th className="px-3 py-2 text-left">Celular</th>
                <th className="px-3 py-2 text-left">Correo</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="px-3 py-2">{c.nombre}</td>
                  <td className="px-3 py-2">{c.apellido}</td>
                  <td className="px-3 py-2">{c.numeroCelular}</td>
                  <td className="px-3 py-2">{c.correo}</td>
                </tr>
              ))}
              {resultados.length === 0 && !cargando && (
                <tr>
                  <td className="px-3 py-4 text-center text-slate-400" colSpan={4}>
                    Sin resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}