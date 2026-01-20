"use client";
import Link from "next/link";
import { ArrowRight, Share2, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import confetti from "canvas-confetti"; // Opcional: npm install canvas-confetti

export default function SucessoPage() {
  // Efeito de confetes ao carregar a página para gerar dopamina no lead
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);

  const handleShareSorteio = () => {
    // Verifica se o navegador suporta o compartilhamento nativo
    if (navigator.share) {
      navigator
        .share({
          title: "Projeto Impulso Digital",
          text: "Dá uma olhada nesse sorteio da Marques Digital!",
          url: "https://marques-digital.vercel.app/sorteio",
        })
        .catch((error) => console.log("Erro ao compartilhar:", error));
    } else {
      // Caso não suporte (ex: Desktop), copia o link e avisa o usuário
      navigator.clipboard.writeText(
        "https://marques-digital.vercel.app/sorteio",
      );
      alert("Link copiado para a área de transferência!");
    }
  };
  
  const phoneNumber = "5511972347027";
  const message = encodeURIComponent(
    "Olá Eduardo! Acabei de me inscrever no sorteio do Impulso Digital e gostaria de adiantar meu diagnóstico gratuito.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <main className="min-h-screen bg-brand-black text-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/20 blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/20 blur-[150px]" />

      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
            <CheckCircle2 size={40} />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
          INSCRIÇÃO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan">
            CONFIRMADA!
          </span>
        </h1>

        <p className="text-zinc-400 text-sm md:text-base mb-12 leading-relaxed">
          Seus dados foram enviados com sucesso para nossa base. Agora você está
          oficialmente concorrendo a uma das{" "}
          <span className="text-white font-bold">
            03 estruturas digitais de elite
          </span>
          .
        </p>

        {/* Card de Ação Imediata (O Pulo do Gato) */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 mb-8 backdrop-blur-xl">
          <h3 className="text-brand-cyan font-black uppercase italic tracking-widest text-xs mb-4">
            Quer acelerar o processo?
          </h3>
          <p className="text-white text-lg font-bold mb-8 italic">
            "Não quero esperar o sorteio, preciso de uma estrutura profissional
            para ontem."
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 px-8 rounded-2xl transition-all hover:scale-105 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3)]"
          >
            FALAR COM O EDUARDO NO WHATSAPP
            <ArrowRight size={18} />
          </a>
          <p className="mt-4 text-[10px] text-zinc-500 uppercase tracking-widest">
            Fale diretamente com o especialista responsável
          </p>
        </div>

        {/* Botões Secundários */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Voltar para o site
          </Link>
          <span className="hidden md:block text-zinc-800">|</span>
          <button
            onClick={handleShareSorteio}
            className="flex items-center justify-center gap-2 text-zinc-500 hover:text-brand-purple text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <Share2 size={14} />
            Compartilhar Sorteio
          </button>
        </div>
      </div>
    </main>
  );
}
