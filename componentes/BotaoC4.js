"use client";

import dynamic from "next/dynamic";
import PDFelementos from "./PDFelementos";
const PDFDownloadLink = dynamic(
  () =>
    import("@react-pdf/renderer").then(
      (module) => module.PDFDownloadLink
    ),
  { ssr: false }
);

export default function BotaoC4() {
  return (
    <PDFDownloadLink
      document={<PDFelementos />}
      fileName="elementos.pdf"
      className="
        inline-flex
        items-center
        justify-center
        px-4
        py-2
        rounded-lg
        bg-yellow-600
        text-white
        font-medium
        shadow-md
        hover:bg-yellow-700
        transition-colors
        duration-200
        cursor-pointer
      "
    >
      {({ loading }) =>
        loading ? "Gerando PDF..." : "📊 Elementos Gráficos"
      }
    </PDFDownloadLink>
  );
}
