"use client";
import { useState, useEffect } from "react";
import { LeadSection } from "@/app/components/LeadSection";
import { Faq } from "../components/Faq";
import { 
  Monitor, 
  BarChart3, 
  Rocket, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  Gift, 
  CheckCircle2, 
  Users, 
  MousePointer2 
} from "lucide-react";

const faqs = [
  {
    q: "O sorteio é realmente 100% gratuito?",
    a: "Sim. O Projeto Impulso Digital é uma iniciativa da Marques Digital para fomentar novos negócios. Os 03 selecionados não pagarão nada pelo desenvolvimento da estrutura (Landing Page/Site + API).",
  },
  {
    q: "O que acontece se eu não for sorteado?",
    a: "Todos os inscritos que demonstrarem projetos sérios receberão uma condição exclusiva e um diagnóstico gratuito, caso queiram contratar a implementação à parte.",
  },
  {
    q: "Quais são os prazos de entrega para os ganhadores?",
    a: "Após o contato e coleta de dados, entregamos a estrutura completa em até 10 dias úteis.",
  },
  {
    q: "Preciso ter um domínio (link) e hospedagem?",
    a: "Sim, os custos de terceiros (domínio e servidor) são de responsabilidade do cliente, mas nós fazemos toda a configuração técnica sem cobrar mão de obra.",
  },
];

export default function SorteioPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-01-30T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-cyan/30 pb-20 mt-16 md:mt-24">
      {/* Background Decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/10 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Banner Superior de Urgência */}
        <div className="bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan py-2 text-center">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white">
            SORTEIO 100% GRATUITO • 03 VAGAS DISPONÍVEIS
          </p>
        </div>

        {/* Sticky Timer */}
        <div className="sticky top-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5 py-4">
          <div className="max-w-4xl mx-auto flex justify-center items-center gap-6 px-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hidden md:block italic">
              Inscrições encerram em:
            </span>
            <div className="flex gap-4 font-black italic text-brand-cyan text-xl tabular-nums">
              <div className="flex flex-col items-center w-10">{timeLeft.days}<span className="text-[7px] uppercase not-italic text-zinc-600">dias</span></div>
              <div className="flex flex-col items-center w-10">{timeLeft.hours}<span className="text-[7px] uppercase not-italic text-zinc-600">hrs</span></div>
              <div className="flex flex-col items-center w-10">{timeLeft.mins}<span className="text-[7px] uppercase not-italic text-zinc-600">min</span></div>
              <div className="flex flex-col items-center w-10 text-brand-purple">{timeLeft.secs}<span className="text-[7px] uppercase not-italic text-zinc-600">seg</span></div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="py-20 px-6 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-brand-cyan/30 bg-brand-cyan/5 rounded-full">
            <Gift size={14} className="text-brand-cyan" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">Oportunidade Gratuita</span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8">
            SORTEIO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan">
              IMPULSO DIGITAL
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base leading-relaxed mb-12">
            Estamos sorteando a criação de <span className="text-white font-bold">03 estruturas digitais de elite</span> para transformar o seu negócio em 2026. Inscrição gratuita para empresas e profissionais autônomos.
          </p>

          {/* Como Funciona (Substituindo o Vídeo) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { step: "01", title: "Inscrição", desc: "Preencha o formulário abaixo com seus dados reais.", icon: <MousePointer2 size={20}/> },
              { step: "02", title: "Análise", desc: "Analisaremos o potencial de escala do seu projeto.", icon: <BarChart3 size={20}/> },
              { step: "03", title: "Resultado", desc: "Os 3 selecionados ganham a estrutura completa.", icon: <CheckCircle2 size={20}/> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 text-left group hover:border-brand-purple/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 border border-brand-purple/20">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold uppercase italic text-sm mb-2">{item.step}. {item.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Social Proof Tecnológico */}
        <section className="py-12 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-8">Tecnologia de ponta integrada ao seu projeto</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale pointer-events-none">
              <span className="text-white font-bold text-lg">NEXT.JS 14</span>
              <span className="text-white font-bold text-lg">META API</span>
              <span className="text-white font-bold text-lg">VERCEL</span>
              <span className="text-white font-bold text-lg">TAILWIND CSS</span>
            </div>
          </div>
        </section>

        {/* O que os Ganhadores Levam */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/[0.02] border border-white/10 p-8 md:p-16 rounded-[3rem] backdrop-blur-xl">
            <div>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase mb-6 leading-none text-brand-cyan">
                O PRÊMIO DOS <br />03 SELECIONADOS
              </h2>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                Cada ganhador receberá uma consultoria e implementação tecnológica avaliada em <span className="text-white font-bold">R$ 2.500,00</span> totalmente gratuita.
              </p>
              <div className="p-4 bg-brand-cyan/10 border border-brand-cyan/20 rounded-2xl inline-block">
                 <p className="text-[10px] uppercase font-black text-brand-cyan tracking-widest italic">Valor: R$ 0,00</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Monitor size={18} />,
                  t: "Landing Page ou Site",
                  d: "Design de elite para Dentistas, Advogados e Serviços.",
                },
                {
                  icon: <BarChart3 size={18} />,
                  t: "API de Conversão",
                  d: "Rastreamento profissional para seus anúncios.",
                },
                {
                  icon: <Zap size={18} />,
                  t: "Velocidade Máxima",
                  d: "Site ultra-rápido desenvolvido em Next.js 14.",
                },
                {
                  icon: <Rocket size={18} />,
                  t: "Estratégia de Vendas",
                  d: "Copywriting focado em converter leads qualificados.",
                },
                {
                  icon: <Smartphone size={18} />,
                  t: "Totalmente Mobile",
                  d: "Experiência perfeita em todos os celulares.",
                },
                {
                  icon: <ShieldCheck size={18} />,
                  t: "Suporte Inicial",
                  d: "Acompanhamento para colocar sua estrutura no ar.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 bg-brand-purple/20 p-2 rounded-xl text-brand-purple group-hover:text-brand-cyan transition-colors italic">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-tight italic">
                      {item.t}
                    </h4>
                    <p className="text-[11px] text-zinc-500">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Nichos Alvo - Versão Expandida */}
<section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none">
      Quem estamos <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Buscando?</span>
    </h2>
    <p className="text-zinc-500 text-sm mt-4 max-w-2xl mx-auto italic">
      O Projeto Impulso Digital foi desenhado para profissionais e empresas que vendem serviços de alto valor e precisam de uma presença digital à altura.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { 
        title: "Saúde & Estética", 
        icon: "🩺", 
        d: "Médicos, Dentistas, Clínicas de Estética e Psicólogos que precisam de agendamentos qualificados e autoridade visual." 
      },
      { 
        title: "Direito & Jurídico", 
        icon: "⚖️", 
        d: "Advogados e Escritórios de Advocacia que buscam leads segmentados e uma imagem de confiança inabalável." 
      },
      { 
        title: "Arquitetura & Design", 
        icon: "📐", 
        d: "Arquitetos e Designers de Interiores que precisam de um portfólio de elite que valorize seus projetos de alto padrão." 
      },
      { 
        title: "Consultoria & B2B", 
        icon: "💼", 
        d: "Consultores, Contadores e Empresas de Software que desejam automatizar a captação de novos clientes corporativos." 
      },
      { 
        title: "Educação & Infoprodutos", 
        icon: "🎓", 
        d: "Especialistas, Mentores e Criadores de Conteúdo que querem profissionalizar suas páginas de vendas e lançamentos." 
      },
      { 
        title: "Imobiliário de Luxo", 
        icon: "🏢", 
        d: "Corretores e Imobiliárias focadas em imóveis de médio e alto padrão que precisam de conversão rápida." 
      }
    ].map((nicho, i) => (
      <div key={i} className="group p-8 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-brand-purple/30 transition-all duration-500 hover:-translate-y-1">
        <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
          {nicho.icon}
        </div>
        <h4 className="text-white font-bold uppercase italic mb-3 text-sm tracking-tight group-hover:text-brand-cyan transition-colors">
          {nicho.title}
        </h4>
        <p className="text-zinc-500 text-[11px] leading-relaxed group-hover:text-zinc-400 transition-colors">
          {nicho.d}
        </p>
      </div>
    ))}
  </div>

  {/* Frase de Efeito Final da Seção */}
  <div className="mt-16 p-8 rounded-3xl border border-dashed border-white/10 text-center">
    <p className="text-zinc-400 text-xs uppercase tracking-[0.2em]">
      Não encontrou seu nicho? <span className="text-white">Se o seu serviço é de alto valor, nós podemos te ajudar.</span>
    </p>
  </div>
</section>

        {/* Critérios de Seleção */}
        <section className="py-24 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black italic uppercase leading-tight mb-6">Não é sorte, <br />é <span className="text-brand-cyan">Parceria</span></h2>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Buscamos projetos reais. Os 03 ganhadores serão escolhidos por nossa equipe interna analisando o potencial de crescimento.
              </p>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-purple animate-ping" />
                <span className="text-[10px] font-black uppercase text-brand-purple tracking-widest">Inscrições abertas</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { t: "Clareza", d: "Objetivos definidos para o negócio." },
                { t: "Comprometimento", d: "Pronto para validar a estratégia." },
                { t: "Escalabilidade", d: "Potencial para crescer com tecnologia." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="font-black text-brand-purple italic">0{i+1}</div>
                  <div>
                    <h5 className="text-white font-bold text-[11px] uppercase italic">{item.t}</h5>
                    <p className="text-zinc-500 text-[10px]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Lead (Formulário) */}
        <div id="participar" className="py-20 bg-brand-black relative">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-black italic uppercase">Faça sua <span className="text-brand-cyan">Inscrição</span></h2>
             <p className="text-zinc-500 text-xs mt-2 uppercase tracking-widest">Leva menos de 60 segundos</p>
           </div>
           <LeadSection 
              buttonText="PARTICIPAR DO SORTEIO" 
              campaignSource="sorteio_impulso_digital_3_vagas" 
            />
        </div>

        {/* FAQ Final */}
        <Faq faqs={faqs} />
      </div>
    </main>
  );
}