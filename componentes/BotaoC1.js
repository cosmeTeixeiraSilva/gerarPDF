"use client";

import dynamic from "next/dynamic";
import CurriculoModerno from "./curriculum1";
const PDFDownloadLink = dynamic(
  () =>
    import("@react-pdf/renderer").then(
      (module) => module.PDFDownloadLink
    ),
  { ssr: false }
);

export default function BotaoC1() {
  return (
    <PDFDownloadLink
      document={<CurriculoModerno />}
      fileName="modelo.pdf"
      className="
        inline-flex
        items-center
        justify-center
        px-4
        py-2
        rounded-lg
        bg-orange-600
        text-white
        font-medium
        shadow-md
        hover:bg-orange-700
        transition-colors
        duration-200
        cursor-pointer
      "
    >
      {({ loading }) =>
        loading ? "Gerando PDF..." : "📄 Currículo 1"
      }
    </PDFDownloadLink>
  );
}
