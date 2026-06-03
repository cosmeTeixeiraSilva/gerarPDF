"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import CurriculumDinamico from "./CurriculumDinamico";
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
  { ssr: false }
);

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");

  // AQUI você junta os campos num objeto (o "JSON" que vai pro currículo)
  const dados = {
    nome,
    cargo,
    email,
    celular

  };

  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md text-black">
        <input className="border border-gray-300 rounded-md p-2"
          value={nome} placeholder="Nome Completo"
          onChange={(e) => setNome(e.target.value)} />
        <input className="border border-gray-300 rounded-md p-2"
          value={cargo} placeholder="Cargo"
          onChange={(e) => setCargo(e.target.value)} />
        <input className="border border-gray-300 rounded-md p-2"
          value={email} placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
        <input className="border border-gray-300 rounded-md p-2"
          value={celular} placeholder="Celular"
          onChange={(e) => setCelular(e.target.value)} />
      </form>

      {/* passa o objeto dados pro modelo */}
      <PDFDownloadLink document={<CurriculumDinamico dados={dados} />} fileName="curriculo.pdf"
        className="bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600 transition-colors">
        {({ loading }) => (loading ? "Gerando..." : "Baixar currículo")}
      </PDFDownloadLink>
      <Link href="/" className="bg-green-500 text-white py-2 px-4 rounded-md text-center hover:bg-green-600 transition-colors">
        Voltar
      </Link>
    </div>
  );
}
