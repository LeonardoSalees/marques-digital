'use client'
import { motion } from "framer-motion";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { LeadSection } from "./components/LeadSection";
import { Footer } from "./components/Footer";
import { Faq } from "./components/Faq";
import { Workflow } from "./components/Workflow";

export default function Home() {
  const faqs = [
  { 
    q: "Preciso investir muito em anúncios logo de cara?", 
    a: "Não. O segredo do marketing digital não é o quanto você investe, mas sim como você escala. Recomendamos começar com um valor confortável para validar a estratégia e aumentar o investimento conforme o retorno (ROI) for aparecendo." 
  },
  { 
    q: "Em quanto tempo verei os primeiros resultados?", 
    a: "Campanhas de busca (Google) podem gerar leads no primeiro dia. Já estratégias de autoridade e redes sociais levam de 15 a 30 dias para maturação. Nosso foco é gerar faturamento rápido enquanto construímos sua marca." 
  },
  { 
    q: "O marketing digital serve para o meu tipo de negócio?", 
    a: "Se o seu cliente tem um celular na mão, sim. Hoje, 90% das jornadas de compra começam com uma pesquisa no Google ou uma descoberta no Instagram. Se você não está lá, seu concorrente está." 
  }
];
  return (
    // Exemplo de como aplicar no Hero
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <Services />
      <Workflow/>
      <LeadSection />
      <Faq faqs={faqs}/>
    </motion.div>
  );
}
