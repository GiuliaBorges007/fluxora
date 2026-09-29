import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Badge className="border border-sky-500/20 bg-sky-500/10 text-sky-400 hover:bg-sky-500/10">
              Funcionalidades
            </Badge>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Tudo em um só lugar.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              A Fluxora reúne os recursos essenciais para acompanhar
              matérias-primas e entender a situação do seu estoque.
            </p>

            <Link href="/demo">
              <Button className="mt-8 rounded-xl bg-sky-500 px-6 font-semibold hover:bg-sky-400">
                Explorar demonstração
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                numero: "01",
                titulo: "Cadastro de materiais",
                texto:
                  "Organize matérias-primas por código, categoria, unidade e quantidade.",
              },
              {
                numero: "02",
                titulo: "Indicadores",
                texto:
                  "Visualize rapidamente a situação geral do estoque.",
              },
              {
                numero: "03",
                titulo: "Busca e filtros",
                texto:
                  "Encontre materiais por nome, código, categoria ou situação.",
              },
              {
                numero: "04",
                titulo: "Movimentações",
                texto:
                  "Registre entradas e saídas mantendo o saldo atualizado.",
              },
            ].map((item) => (
              <Card
                key={item.numero}
                className="rounded-2xl border-slate-800 bg-slate-900/60 transition hover:border-sky-500/30"
              >
                <CardContent className="p-6">
                  <span className="text-xs font-bold tracking-widest text-sky-400">
                    {item.numero}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-white">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.texto}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}