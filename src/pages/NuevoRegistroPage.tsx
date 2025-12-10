import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client";
import type { GenericResponse } from "../api/client";

export function NuevoRegistroPage(){
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [numeroCelular, setNumeroCelular] = useState("");
    const [correo, setCorreo] = useState("");

    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    async function handleGuardar(e: FormEvent){
        e.preventDefault();
        setMensaje("");
        setError("");

        try{
            const response = await api.post<GenericResponse>("/guardarinformacion", {
                nombre,
                apellido,
                numeroCelular,
                correo,
            });

            if(response.data.exito){
                setMensaje("Informacion guardada con exito");
                setTimeout(() => {
                    navigate("/menu");
                }, 3000);
            }else{
                setError("Intente de nuevo");
            }
        }catch(err){
            setError("Intente de nuevo");
        }
    }

    function handleCancelar(){
        navigate("/bienvenido");
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Nuevo registro</h1>

        <form onSubmit={handleGuardar} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre(s)</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Número de celular
            </label>
            <input
              type="tel"
              value={numeroCelular}
              onChange={(e) => setNumeroCelular(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Correo</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {mensaje && (
            <div className="text-green-600 text-sm text-center">{mensaje}</div>
          )}
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={handleCancelar}
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}