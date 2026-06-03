import Link from "next/link";
import Botao1 from "../componentes/Botao1";
import BotaoC1 from "../componentes/BotaoC1";
import BotaoC2 from "../componentes/BotaoC2";
import BotaoC3 from "../componentes/BotaoC3";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-950 px-4">
      <main className="w-full max-w-4xl bg-slate-200 dark:bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-16">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 dark:text-zinc-100">
            Cosme Teixeira Silva
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Aula prática de geração de documentos PDF utilizando React,
            explorando conceitos modernos de componentes, estilização e
            exportação de arquivos.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Botao1 />
            <BotaoC1 />
            <BotaoC2 />
            <BotaoC3 />
            <Link href="/gerarpdf" className="bg-red-500 text-white py-2 px-4 rounded-md text-center hover:bg-red-600 transition-colors">
              Gerar Currículo
            </Link>

          </div>
        </div>
      </main>
    </div>
  );
}
