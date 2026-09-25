import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Platform from "@/components/Platform";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Hero />
      <Benefits />
      <Features />
      <Platform />
      <LeadForm />
      <Footer />
    </main>
  );
}