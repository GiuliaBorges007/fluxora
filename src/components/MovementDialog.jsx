"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MovementDialog({
  open,
  onOpenChange,
  material,
  movement,
  setMovement,
  onMovement,
}) {
  if (!material) {
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!movement.type || movement.amount === "") {
      return;
    }

    const amount = Number(movement.amount);

    if (Number.isNaN(amount) || amount <= 0) {
      return;
    }

    if (
      movement.type === "OUT" &&
      amount > material.quantity
    ) {
      return;
    }

    onMovement();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-slate-800 bg-slate-950 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Movimentar estoque</DialogTitle>

          <DialogDescription className="text-slate-400">
            Registre uma entrada ou saída para este material.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm text-slate-400">
            Material
          </p>

          <p className="mt-1 font-medium text-white">
            {material.name}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Disponível: {material.quantity} {material.unit}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label>Tipo de movimentação</Label>

            <Select
              value={movement.type}
              onValueChange={(value) =>
                setMovement((prev) => ({
                  ...prev,
                  type: value,
                }))
              }
            >
              <SelectTrigger className="border-slate-700 bg-slate-900 text-white">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="IN">
                  Entrada
                </SelectItem>

                <SelectItem value="OUT">
                  Saída
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="movement-amount">
              Quantidade
            </Label>

            <Input
              id="movement-amount"
              type="number"
              min="1"
              value={movement.amount}
              onChange={(e) =>
                setMovement((prev) => ({
                  ...prev,
                  amount: e.target.value,
                }))
              }
              placeholder="Digite a quantidade"
              className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
            />
          </div>

          {movement.type === "OUT" &&
            movement.amount !== "" &&
            Number(movement.amount) > material.quantity && (
              <p className="text-sm text-red-400">
                A saída não pode ser maior que a quantidade
                disponível.
              </p>
            )}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              className="bg-sky-500 text-slate-950 hover:bg-sky-400"
            >
              Confirmar movimentação
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}