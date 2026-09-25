import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Platform() {
  return (
    <section
      id="plataforma"
      className="border-y border-slate-800 bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Badge className="border border-sky-500/20 bg-sky-500/10 text-sky-400 hover:bg-sky-500/10">
              Plataforma
            </Badge>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Veja seus materiais de uma nova forma.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Experimente uma demonstração interativa da Fluxora com
              materiais fictícios, indicadores, filtros, gráficos e
              movimentações de estoque.
            </p>

            <Link href="/demo">
              <Button
                size="lg"
                className="mt-8 rounded-xl bg-sky-500 px-7 font-bold hover:bg-sky-400"
              >
                Acessar demonstração
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>

          <Card className="overflow-hidden rounded-2xl border-slate-700 bg-slate-950 shadow-2xl">
            <CardHeader className="border-b border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Dashboard
                  </p>

                  <CardTitle className="mt-1 text-lg text-white">
                    Resumo do estoque
                  </CardTitle>
                </div>

                <Badge className="bg-slate-800 text-slate-400 hover:bg-slate-800">
                  Dados fictícios
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-xs text-slate-500">
                    Total
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    248
                  </p>
                </div>

                <div className="rounded-xl bg-sky-500/10 p-4">
                  <p className="text-xs text-slate-500">
                    Normal
                  </p>

                  <p className="mt-2 text-2xl font-bold text-sky-400">
                    186
                  </p>
                </div>

                <div className="rounded-xl bg-amber-500/10 p-4">
                  <p className="text-xs text-slate-500">
                    Baixo
                  </p>

                  <p className="mt-2 text-2xl font-bold text-amber-400">
                    42
                  </p>
                </div>

                <div className="rounded-xl bg-red-500/10 p-4">
                  <p className="text-xs text-slate-500">
                    Sem estoque
                  </p>

                  <p className="mt-2 text-2xl font-bold text-red-400">
                    20
                  </p>
                </div>
              </div>

              <Separator className="my-5 bg-slate-800" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Status do sistema
                </span>

                <span className="flex items-center gap-2 text-sm text-sky-400">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Operacional
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}