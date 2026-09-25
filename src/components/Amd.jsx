"use client";

import { useState } from "react";

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

export default function AddMaterialDialog({
  open,
  onOpenChange,
  onAdd,
}) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    unit: "",
    quantity: "",
    minStock: "",
  });

  function handleChange(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.category ||
      !form.unit.trim() ||
      form.quantity === "" ||
      form.minStock === ""
    ) {
      return;
    }

    const quantity = Number(form.quantity);
    const minStock = Number(form.minStock);

    if (
      Number.isNaN(quantity) ||
      Number.isNaN(minStock) ||
      quantity < 0 ||
      minStock < 0
    ) {
      return;
    }

    onAdd({
      name: form.name.trim(),
      category: form.category,
      unit: form.unit.trim(),
      quantity,
      minStock,
    });

    setForm({
      name: "",
      category: "",
      unit: "",
      quantity: "",
      minStock: "",
    });
  }

  function handleClose(value) {
    onOpenChange(value);

    if (!value) {
      setForm({
        name: "",
        category: "",
        unit: "",
        quantity: "",
        minStock: "",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="border-slate-800 bg-slate-950 text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Novo Material</DialogTitle>

          <DialogDescription className="text-slate-400">
            Cadastre uma nova matéria-prima no estoque.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="material-name">
              Nome do material
            </Label>

            <Input
              id="material-name"
              value={form.name}
              onChange={(e) =>
                handleChange("name", e.target.value)
              }
              placeholder="Ex.: Chapa de aço carbono"
              className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label>Categoria</Label>

            <Select
              value={form.category}
              onValueChange={(value) =>
                handleChange("category", value)
              }
            >
              <SelectTrigger className="border-slate-700 bg-slate-900 text-white">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Metais">Metais</SelectItem>
                <SelectItem value="Plásticos">
                  Plásticos
                </SelectItem>
                <SelectItem value="Químicos">
                  Químicos
                </SelectItem>
                <SelectItem value="Embalagens">
                  Embalagens
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="material-unit">
                Unidade
              </Label>

              <Input
                id="material-unit"
                value={form.unit}
                onChange={(e) =>
                  handleChange("unit", e.target.value)
                }
                placeholder="Ex.: kg, L, un"
                className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="material-quantity">
                Quantidade inicial
              </Label>

              <Input
                id="material-quantity"
                type="number"
                min="0"
                value={form.quantity}
                onChange={(e) =>
                  handleChange("quantity", e.target.value)
                }
                placeholder="0"
                className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="material-min-stock">
              Estoque mínimo
            </Label>

            <Input
              id="material-min-stock"
              type="number"
              min="0"
              value={form.minStock}
              onChange={(e) =>
                handleChange("minStock", e.target.value)
              }
              placeholder="0"
              className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleClose(false)}
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              className="bg-sky-500 text-slate-950 hover:bg-sky-400"
            >
              Adicionar material
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}