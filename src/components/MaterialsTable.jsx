import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function getStatus(quantity, minStock) {
  if (quantity === 0) {
    return {
      label: "Sem estoque",
      color:
        "bg-red-500/10 text-red-400 border-red-500/20",
    };
  }

  if (quantity < minStock) {
    return {
      label: "Estoque baixo",
      color:
        "bg-amber-500/10 text-amber-400 border-amber-500/20",
    };
  }

  return {
    label: "Normal",
    color:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };
}

export default function MaterialsTable({
  materials,
  onMovement,
}) {
  return (
    <section className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
  <div className="border-b border-slate-800 p-5">
    <h2 className="text-2xl font-semibold text-white">
      Matérias-primas
    </h2>

        <p className="mt-1 text-slate-400">
          Lista de materiais conforme os filtros selecionados.
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800 hover:bg-transparent">
              <TableHead className="text-slate-400">
                Código
              </TableHead>

              <TableHead className="text-slate-400">
                Material
              </TableHead>

              <TableHead className="text-slate-400">
                Categoria
              </TableHead>

              <TableHead className="text-slate-400">
                Unidade
              </TableHead>

              <TableHead className="text-slate-400">
                Quantidade disponível
              </TableHead>

              <TableHead className="text-slate-400">
                Estoque mínimo
              </TableHead>

              <TableHead className="text-slate-400">
                Situação
              </TableHead>

              <TableHead className="text-left text-slate-400">
                Ação
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {materials.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="h-32 text-center text-slate-500"
                >
                  Nenhum material encontrado com os filtros
                  selecionados.
                </TableCell>
              </TableRow>
            ) : (
              materials.map((material) => {
                const status = getStatus(
                  material.quantity,
                  material.minStock
                );

                return (
                  <TableRow
                    key={material.id}
                    className="border-slate-800"
                  >
                    <TableCell className="font-medium text-sky-400">
                      {material.id}
                    </TableCell>

                    <TableCell className="font-medium text-white">
                      {material.name}
                    </TableCell>

                    <TableCell className="text-slate-300">
                      {material.category}
                    </TableCell>

                    <TableCell className="text-slate-300">
                      {material.unit}
                    </TableCell>

                    <TableCell className="text-slate-300">
                      {material.quantity}
                    </TableCell>

                    <TableCell className="text-slate-300">
                      {material.minStock}
                    </TableCell>

                    <TableCell>
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </TableCell>

                    <TableCell className="text-left">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onMovement(material)}
                        className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        Movimentar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}