"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function LeadForm() {
  const [enviado, setEnviado] = useState(false);
  const [area, setArea] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!area) return;

    setEnviado(true);
  }

  return (
    <>
      <section id="contato" className="bg-slate-950 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
            <div className="mb-8">
              <Badge className="border border-sky-500/20 bg-sky-500/10 text-sky-400 hover:bg-sky-500/10">
                Fale com a Fluxora
              </Badge>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Vamos conversar?
              </h2>

              <p className="mt-3 max-w-2xl text-slate-400">
                Preencha os dados abaixo para conhecer melhor a Fluxora.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-slate-300">
                  Nome
                </Label>

                <Input
                  id="nome"
                  name="nome"
                  required
                  placeholder="Seu nome"
                  className="border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  E-mail corporativo
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="voce@empresa.com"
                  className="border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa" className="text-slate-300">
                  Empresa
                </Label>

                <Input
                  id="empresa"
                  name="empresa"
                  required
                  placeholder="Nome da empresa"
                  className="border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">
                  Área de interesse
                </Label>

                <Select value={area} onValueChange={setArea}>
                  <SelectTrigger className="border-slate-700 bg-slate-950 text-slate-300">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="estoque">
                      Controle de estoque
                    </SelectItem>

                    <SelectItem value="materias-primas">
                      Gestão de matérias-primas
                    </SelectItem>

                    <SelectItem value="indicadores">
                      Indicadores e relatórios
                    </SelectItem>

                    <SelectItem value="fluxora">
                      Conhecer a Fluxora
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-sky-500 py-6 font-semibold text-white hover:bg-sky-400"
                >
                  Solicitar contato
                </Button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <AlertDialog open={enviado} onOpenChange={setEnviado}>
        <AlertDialogContent className="border-slate-800 bg-slate-900">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              Solicitação enviada!
            </AlertDialogTitle>

            <AlertDialogDescription className="text-slate-400">
              Esta é uma demonstração acadêmica. Os dados informados são
              fictícios e não foram enviados para nenhum servidor.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction className="bg-sky-500 text-white hover:bg-sky-400">
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}