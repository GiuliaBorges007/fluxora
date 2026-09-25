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

export default function MaterialFilters({
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
  onClear,
}) {
  return (
    <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 md:flex-row">
      <div className="w-full md:w-1/3">
        <Label className="mb-1.5 block text-sm text-slate-400">
          Buscar material
        </Label>

        <Input
          type="text"
          placeholder="Nome ou código..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-500 focus:border-sky-500"
        />
      </div>

      <div className="flex w-full flex-wrap gap-3 md:w-auto md:flex-nowrap">
        <div className="min-w-[180px]">
          <Label className="mb-1.5 block text-sm text-slate-400">
            Categoria
          </Label>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="border-slate-800 bg-slate-950 text-white">
              <SelectValue placeholder="Todas as Categorias" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ALL">Todas as Categorias</SelectItem>
              <SelectItem value="Metais">Metais</SelectItem>
              <SelectItem value="Plásticos">Plásticos</SelectItem>
              <SelectItem value="Químicos">Químicos</SelectItem>
              <SelectItem value="Embalagens">Embalagens</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-[180px]">
          <Label className="mb-1.5 block text-sm text-slate-400">
            Situação
          </Label>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="border-slate-800 bg-slate-950 text-white">
              <SelectValue placeholder="Todas as Situações" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ALL">Todas as Situações</SelectItem>
              <SelectItem value="NORMAL">Normal</SelectItem>
              <SelectItem value="LOW_STOCK">Estoque Baixo</SelectItem>
              <SelectItem value="NO_STOCK">Sem Estoque</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button
            variant="ghost"
            onClick={onClear}
            className="h-10 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            Limpar filtros
          </Button>
        </div>
      </div>
    </div>
  );
}