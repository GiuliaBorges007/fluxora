import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-900">
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-24 text-center lg:py-32">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge className="mb-6 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-400 hover:bg-sky-500/10">
            Gestão inteligente de matéria-prima
          </Badge>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Controle seu estoque.
            <span className="block text-sky-400">
              Antecipe sua produção.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            A Fluxora ajuda indústrias a acompanhar matérias-primas,
            identificar estoques críticos e visualizar os principais
            indicadores em um único ambiente.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/demo">
              <Button
                size="lg"
                className="w-full rounded-xl bg-sky-500 px-7 py-6 text-base font-bold text-white shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400 sm:w-auto"
              >
                Experimentar demonstração
                <span className="ml-2">→</span>
              </Button>
            </Link>

            <a href="#contato">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-xl border-slate-700 bg-transparent px-7 py-6 text-base text-slate-200 transition hover:border-slate-600 hover:bg-slate-900 sm:w-auto"
              >
                Solicitar contato
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}