import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Fluxora — Gestão Industrial & Controle de Estoque em Tempo Real",
  description:
    "Elimine gargalos operacionais, previna a falta de insumos críticos e acompanhe cada movimentação com inteligência e precisão no Fluxora OS.",
  keywords: ["gestão de estoque", "automação industrial", "ERP industrial", "Next.js", "Fluxora"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} dark scroll-smooth`}>
      <body className="bg-[#090D16] text-slate-100 antialiased font-sans selection:bg-sky-500 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

