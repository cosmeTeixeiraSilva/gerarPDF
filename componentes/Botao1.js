"use client";

import dynamic from "next/dynamic";
import ModeloPDF from "./modelopdf";

const PDFDownloadLink = dynamic(
  () =>
    import("@react-pdf/renderer").then(
      (module) => module.PDFDownloadLink
    ),
  { ssr: false }
);

export default function BotaoBaixar() {
  return (
    <PDFDownloadLink
      document={<ModeloPDF />}
      fileName="modelo.pdf"
      className="
        inline-flex
        items-center
        justify-center
        px-4
        py-2
        rounded-lg
        bg-blue-600
        text-white
        font-medium
        shadow-md
        hover:bg-blue-700
        transition-colors
        duration-200
        cursor-pointer
      "
    >
      {({ loading }) =>
        loading ? "Gerando PDF..." : "📄 Baixar PDF"
      }
    </PDFDownloadLink>
  );
}
