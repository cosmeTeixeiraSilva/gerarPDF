"use client";
import { useState } from "react";

export default function Formulario() {
  // cada campo tem o SEU estado
const [nome, setNome] = useState("");
const [cargo, setCargo] = useState("");
const [email, setEmail] = useState("");
return (
  <form className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
    {/* cada input mexe só no seu */}
    <input
    className="border border-gray-300 rounded-md p-2"
      value={nome}
      placeholder="Nome Completo"
      onChange={(e) => setNome(e.target.value)}
    />
    <input
      className="border border-gray-300 rounded-md p-2"
      value={cargo}
      placeholder="Cargo"
      onChange={(e) => setCargo(e.target.value)}
    />
    <input
      className="border border-gray-300 rounded-md p-2"
      value={email}
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </form>
);
}
