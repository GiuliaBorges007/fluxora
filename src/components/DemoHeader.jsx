import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DemoHeader({ onNewMaterial }) {
  return (
    <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="mb-4 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
          DEMONSTRAÇÃO
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Controle de Matérias-Primas
        </h1>

        <p className="mt-4 text-base text-slate-400">
          Acompanhe estoques, movimentações e disponibilidade dos materiais.
        </p>
      </div>

      <div className="flex gap-3">
        <Link href="/">
  <Button variant="outline">
    Home
  </Button>
</Link>

        <Button
          onClick={onNewMaterial}
          className="bg-sky-500 text-slate-950 hover:bg-sky-400"
        >
          + Novo Material
        </Button>
      </div>
    </header>
  );
}