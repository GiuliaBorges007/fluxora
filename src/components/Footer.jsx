import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-lg font-black text-white">
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

            
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <a
              href="#beneficios"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Benefícios
            </a>

            <a
              href="#funcionalidades"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Funcionalidades
            </a>

            <Link
              href="/demo"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Demonstração
            </Link>

            <a
              href="#contato"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Contato
            </a>
          </div>
        </div>

        <center><div className="mt-10 border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-600">
            © 2026 Fluxora. Projeto acadêmico com dados fictícios.
          </p>
        </div></center>
      </div>
    </footer>
  );
}