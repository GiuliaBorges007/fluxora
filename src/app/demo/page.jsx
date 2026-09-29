"use client";

import { useMemo, useState } from "react";

import { initialMaterials } from "@/data/materials";

import DemoHeader from "@/components/DemoHeader";
import MetricCards from "@/components/MetricCards";
import MaterialFilters from "@/components/MaterialFilters";
import MaterialsTable from "@/components/MaterialsTable";
import StockCharts from "@/components/StockCharts";
import AddMaterialDialog from "@/components/Amd";
import MovementDialog from "@/components/MovementDialog";


function getStatus(quantity, minStock) {
  if (quantity === 0) {
    return "NO_STOCK";
  }

  if (quantity < minStock) {
    return "LOW_STOCK";
  }

  return "NORMAL";
}

export default function DemoPage() {
  const [materials, setMaterials] = useState(initialMaterials);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [addOpen, setAddOpen] = useState(false);

  const [movementOpen, setMovementOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const [movement, setMovement] = useState({
    type: "",
    amount: "",
  });

  const metrics = useMemo(() => {
    const normal = materials.filter(
      (material) =>
        getStatus(material.quantity, material.minStock) ===
        "NORMAL"
    ).length;

    const low = materials.filter(
      (material) =>
        getStatus(material.quantity, material.minStock) ===
        "LOW_STOCK"
    ).length;

    const noStock = materials.filter(
      (material) =>
        getStatus(material.quantity, material.minStock) ===
        "NO_STOCK"
    ).length;

    return {
      total: materials.length,
      normal,
      low,
      noStock,
    };
  }, [materials]);

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        material.name.toLowerCase().includes(searchValue) ||
        material.id.toLowerCase().includes(searchValue);

      const matchesCategory =
        categoryFilter === "ALL" ||
        material.category === categoryFilter;

      const matchesStatus =
        statusFilter === "ALL" ||
        getStatus(material.quantity, material.minStock) ===
          statusFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [
    materials,
    search,
    categoryFilter,
    statusFilter,
  ]);

  const categoryData = useMemo(() => {
    const categories = [
      "Metais",
      "Plásticos",
      "Químicos",
      "Embalagens",
    ];

    return categories.map((category) => ({
      category,
      materiais: materials.filter(
        (material) => material.category === category
      ).length,
    }));
  }, [materials]);

  const statusData = useMemo(() => {
    return [
      {
        status: "Normal",
        value: metrics.normal,
        fill: "#34d399",
      },
      {
        status: "Estoque baixo",
        value: metrics.low,
        fill: "#fbbf24",
      },
      {
        status: "Sem estoque",
        value: metrics.noStock,
        fill: "#f87171",
      },
    ];
  }, [metrics]);

  function handleAddMaterial(newMaterial) {
    const nextNumber =
      Math.max(
        ...materials.map((material) =>
          Number(material.id.replace("MP-", ""))
        )
      ) + 1;

    const material = {
      id: `MP-${String(nextNumber).padStart(3, "0")}`,
      ...newMaterial,
    };

    setMaterials((prev) => [material, ...prev]);
  }

  function openMovement(material) {
    setSelectedMaterial(material);

    setMovement({
      type: "",
      amount: "",
    });

    setMovementOpen(true);
  }

  function handleMovement() {
    if (!selectedMaterial) {
      return;
    }

    const amount = Number(movement.amount);

    if (!movement.type || Number.isNaN(amount) || amount <= 0) {
      return;
    }

    if (
      movement.type === "OUT" &&
      amount > selectedMaterial.quantity
    ) {
      return;
    }

    setMaterials((prev) =>
      prev.map((material) => {
        if (material.id !== selectedMaterial.id) {
          return material;
        }

        const newQuantity =
          movement.type === "IN"
            ? material.quantity + amount
            : material.quantity - amount;

        return {
          ...material,
          quantity: newQuantity,
        };
      })
    );

    setMovement({
      type: "",
      amount: "",
    });

    setSelectedMaterial(null);
    setMovementOpen(false);
  }

  function clearFilters() {
    setSearch("");
    setCategoryFilter("ALL");
    setStatusFilter("ALL");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <DemoHeader onNewMaterial={() => setAddOpen(true)} />

        <MetricCards metrics={metrics} />

        <MaterialFilters
          search={search}
          setSearch={setSearch}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          onClear={clearFilters}
        />

        <MaterialsTable
          materials={filteredMaterials}
          onMovement={openMovement}
        />

        <StockCharts
          categoryData={categoryData}
          statusData={statusData}
        />

        <AddMaterialDialog
          open={addOpen}
          onOpenChange={setAddOpen}
          onAdd={handleAddMaterial}
        />

        <MovementDialog
          open={movementOpen}
          onOpenChange={setMovementOpen}
          material={selectedMaterial}
          movement={movement}
          setMovement={setMovement}
          onMovement={handleMovement}
        />
      </div>
    </main>
  );
}