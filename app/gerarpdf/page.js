import Formulario from "../../componentes/Formulario";
export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-zinc-100 dark:bg-zinc-950 px-4">
      <main className="w-full max-w-4xl bg-slate-200 dark:bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-16 mt-10">
        <div className="flex flex-col items-start text-center gap-8">
          <h1 className="text-xl  font-extrabold text-orange-500 dark:text-zinc-100">
            Preencha os campos do formulário e baixe seu currículo em PDF!
          </h1>

        </div>
      <Formulario />
      </main>
    </div>
  );
}
