import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MetricCards({ metrics }) {
  return (
    <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-slate-800 bg-slate-900 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Total de materiais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-black text-white">
            {metrics.total}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Estoque Normal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-black text-emerald-400">
            {metrics.normal}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Estoque Baixo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-black text-amber-400">
            {metrics.low}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-red-400">
            Sem Estoque
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-black text-red-400">
            {metrics.noStock}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}