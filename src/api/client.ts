import axios from "axios";

const API_BASE_URL = "https://thedokis.com.mx/api";

export const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

//Tipos de las respuestas
export interface LoginResponse{
	exito: boolean;
	mensaje: string;
}

export interface GenericResponse{
	exito: boolean;
	mensaje: string;
}

export interface ClienteResponse{
	id: number;
	nombre: string;
	apellido: string;
	numeroCelular: string;
	correo: string;
}
 
