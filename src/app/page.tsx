import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Sobre from "@/src/components/Sobre";
import Servicos from "@/src/components/Servicos";
import ProjetosDestaque from "@/src/components/ProjetosDestaque";
import ProjetosRepositorios from "@/src/components/ProjetosRepositorios";
import Contato from "@/src/components/Contato";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-[960px] px-8">
        <Header />
      </div>
      
      <Hero />
      <Sobre />
      <Servicos />
      <ProjetosDestaque />
      <ProjetosRepositorios />

      <div className="mx-auto max-w-[960px] px-8">
        <Contato />
      </div>
      <Footer />
    </main>
  );
}
