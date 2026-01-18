"use client";
import { useState, useEffect } from "react";
import { LeadSection } from "@/app/components/LeadSection";
import {
  Play,
  Monitor,
  BarChart3,
  Rocket,
  Zap,
  Smartphone,
  ShieldCheck,
  Gift,
} from "lucide-react";
import { Faq } from "../components/Faq";

const faqs = [
  {
    q: "O sorteio é realmente gratuito?",
    a: "Sim, é 100% gratuito. O Projeto Impulso Digital é um sorteio oficial da Marques Digital para selecionar 3 empresas ou profissionais para ganharem uma estrutura de elite sem custo de desenvolvimento.",
  },
  {
    q: "Quem pode participar do sorteio?",
    a: "O sorteio está aberto para empresas de todos os tamanhos e profissionais autônomos (advogados, dentistas, psicólogos, etc.) que desejam profissionalizar sua presença online.",
  },
  {
    q: "O que exatamente os 3 sorteados recebem?",
    a: "Cada um dos 3 ganhadores receberá uma estrutura completa: Landing Page ou Site Institucional em Next.js 14, configuração de API de Conversão do Meta e textos persuasivos (copywriting).",
  },
  {
    q: "Preciso pagar para me inscrever?",
    a: "Não. A inscrição e a participação são totalmente gratuitas. O único investimento opcional é o valor que você desejar colocar em anúncios nas plataformas (Meta/Google).",
  },
  {
    q: "Como saberei se fui um dos 3 ganhadores?",
    a: "Nossa equipe entrará em contato diretamente via WhatsApp e e-mail com os selecionados após o encerramento do cronômetro e análise das descrições enviadas.",
  },
];

export default function SelecaoPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-25T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-cyan/30 pb-20 mt-10 md:mt-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/10 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Banner de Sorteio Gratuito */}
        <div className="bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan py-2 mt-20 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
            SORTEIO 100% GRATUITO • 03 VAGAS DISPONÍVEIS
          </p>
        </div>

        {/* Timer */}
        <div className="sticky top-0 z-50 min-h-[60px] flex items-center bg-brand-black/80 backdrop-blur-md border-b border-white/5 py-4">
          <div className="max-w-4xl mx-auto flex justify-center items-center gap-6 px-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hidden md:block italic">
              O sorteio encerra em:
            </span>
            <div className="flex gap-4 font-black italic text-brand-cyan text-xl">
              <div className="w-[45px] tabular-nums text-center">
                {timeLeft.days}d
              </div>
              <div className="w-[45px] tabular-nums text-center">
                {timeLeft.hours}h
              </div>
              <div className="w-[45px] tabular-nums text-center">
                {timeLeft.mins}m
              </div>
              <div className="w-[45px] tabular-nums text-center text-brand-purple">
                {timeLeft.secs}s
              </div>
            </div>
          </div>
        </div>

        <header className="py-20 px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-brand-cyan/30 bg-brand-cyan/5 rounded-full">
            <Gift size={14} className="text-brand-cyan" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">
              Oportunidade Gratuita
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8 [text-rendering:optimizeSpeed]">
            SORTEIO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan">
              IMPULSO DIGITAL
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base leading-relaxed">
            Estamos sorteando a criação de{" "}
            <span className="text-white font-bold">
              03 estruturas digitais completas
            </span>{" "}
            para transformar o seu negócio. Inscrição 100% gratuita para
            empresas e profissionais autônomos.
          </p>

          {/* Vídeo de Convite */}
          <div className="max-w-3xl mx-auto mt-12 aspect-video bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden relative shadow-xl md:shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all z-20">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-purple rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(124,58,237,0.5)] group-hover:scale-110 transition-transform">
                <Play className="text-white fill-current" size={28} />
              </div>
              <p className="mt-4 font-black uppercase text-[10px] tracking-[0.3em]">
                Assistir explicações do sorteio
              </p>
            </div>
          </div>
        </header>

        {/* Seção "O que o Ganhador Leva" */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 border border-white/10 p-8 md:p-16 rounded-[3rem] backdrop-blur-xl">
            <div>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase mb-6 leading-none">
                Prêmios para os <br />
                <span className="text-brand-cyan font-black">
                  03 sorteados:
                </span>
              </h2>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                Cada ganhador receberá uma consultoria e implementação
                tecnológica avaliada em{" "}
                <span className="text-white font-bold">R$ 2.500,00</span> sem
                custo algum.
              </p>
              <div className="p-4 bg-brand-cyan/10 border border-brand-cyan/20 rounded-2xl inline-block">
                <p className="text-[10px] uppercase font-black text-brand-cyan tracking-widest italic">
                  Inscrição Grátis
                </p>
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

        <LeadSection
          buttonText="QUERO PARTICIPAR DO SORTEIO"
          campaignSource="sorteio_impulso_digital_3_vagas"
        />

        <Faq faqs={faqs} />
      </div>
    </main>
  );
}
