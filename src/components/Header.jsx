import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-lg font-black text-white shadow-lg shadow-sky-500/20 transition group-hover:scale-105">
            F
          </div>

          <div>
            <p className="text-xl font-bold tracking-tight text-white">
              Fluxora
            </p>

            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Industrial intelligence
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a
            href="#beneficios"
            className="transition hover:text-sky-400"
          >
            Benefícios
          </a>

          <a
            href="#funcionalidades"
            className="transition hover:text-sky-400"
          >
            Funcionalidades
          </a>

          <a
            href="#plataforma"
            className="transition hover:text-sky-400"
          >
            Plataforma
          </a>

          <a
            href="#contato"
            className="transition hover:text-sky-400"
          >
            Contato
          </a>
        </nav>

        <Link href="/demo">
          <Button className="rounded-lg bg-sky-500 px-5 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400">
            Ver demonstração
          </Button>
        </Link>
      </div>
    </header>
  );
}