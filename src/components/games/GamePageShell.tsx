import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = { title: string; description: string; path: string; children: ReactNode };
const GamePageShell = ({ title, description, path, children }: Props) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 to-background">
    <Helmet><title>{title} | Интерактивные игры</title><meta name="description" content={description} /><link rel="canonical" href={`https://govorim-pravilno.ru${path}`} /></Helmet>
    <Header /><Breadcrumbs />
    <main className="flex-grow px-3 py-5 sm:px-4 md:py-8"><div className="container mx-auto max-w-5xl"><Link to="/materials/interaktivnye-igry" className="mb-4 inline-flex text-sm font-semibold text-primary hover:underline">← Все игры</Link>{children}</div></main>
    <Footer />
  </div>
);
export default GamePageShell;
