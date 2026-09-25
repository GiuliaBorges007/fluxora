import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-slate-900/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="border border-sky-500/20 bg-sky-500/10 text-sky-400 hover:bg-sky-500/10">
            Por que Fluxora?
          </Badge>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Mais controle.
            <span className="text-sky-400"> Menos imprevistos.</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Transforme informações do estoque em uma visão clara para
            apoiar as decisões da sua operação.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              numero: "01",
              titulo: "Estoque organizado",
              texto:
                "Centralize suas matérias-primas, códigos, categorias e quantidades em um único ambiente.",
            },
            {
              numero: "02",
              titulo: "Antecipe faltas",
              texto:
                "Identifique materiais abaixo do estoque mínimo antes que eles comprometam sua operação.",
            },
            {
              numero: "03",
              titulo: "Decisões mais rápidas",
              texto:
                "Acompanhe indicadores e situações do estoque de forma visual e objetiva.",
            },
          ].map((item) => (
            <Card
              key={item.numero}
              className="group rounded-2xl border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/5"
            >
              <CardHeader>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sm font-bold text-sky-400 transition group-hover:bg-sky-500 group-hover:text-white">
                  {item.numero}
                </div>

                <CardTitle className="text-xl text-white">
                  {item.titulo}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-slate-400">
                  {item.texto}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}