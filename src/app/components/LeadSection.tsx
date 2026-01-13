"use client";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

export function LeadSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = Date.now();

    if (now - lastSubmit < 60000) {
      setStatus("Aguarde um minuto para enviar novamente.");
      return;
    }

    setLoading(true);
    // Simulação de envio para a Marques Digital
    setTimeout(() => {
      setLoading(false);
      setStatus("Solicitação enviada com sucesso!");
      setLastSubmit(now);
    }, 1500);
  };

  return (
    <section className="py-24 bg-brand-black px-6 relative overflow-hidden" id="contatos">
      {/* Glows de fundo para profundidade */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-white/5 p-8 md:p-16 rounded-[2.5rem] backdrop-blur-xl relative z-10 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 italic uppercase leading-tight">
            Sua empresa no <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">topo.</span>
          </h2>
          <p className="text-zinc-500 font-medium italic">Estratégia, performance e análise de dados.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">Nome</label>
            <input 
              required
              maxLength={50}
              type="text"
              placeholder="Seu nome" 
              className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all placeholder:text-zinc-700" 
            />
          </div>

          {/* E-mail (Novo campo) */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">E-mail</label>
            <input 
              required
              type="email"
              placeholder="seu@email.com" 
              className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all placeholder:text-zinc-700" 
            />
          </div>
          
          {/* WhatsApp com Máscara */}
          <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">WhatsApp</label>
            <PatternFormat
              format="(##) #####-####"
              mask="_"
              required
              placeholder="(00) 00000-0000"
              className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all placeholder:text-zinc-700"
            />
          </div>

          {/* Campo extra ou ajuste de layout para manter o grid bonito */}
          <div className="hidden lg:flex flex-col justify-end pb-2">
             <p className="text-[9px] text-zinc-600 uppercase tracking-tighter">Prometemos não enviar spam, apenas estratégia.</p>
          </div>

          {/* Mensagem/Negócio */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">Seu Negócio</label>
            <textarea 
              required
              maxLength={400}
              placeholder="Fale sobre seu projeto (Ex: Orçamento para Marcenaria)" 
              className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all h-32 resize-none placeholder:text-zinc-700"
            ></textarea>
          </div>

          {/* Botão com Gradiente da Logo */}
          <button 
            disabled={loading}
            className={`md:col-span-2 relative group mt-4 overflow-hidden rounded-2xl transition-all ${loading ? 'opacity-50' : 'active:scale-95'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan"></div>
            <div className="relative py-5 text-white font-black uppercase tracking-[0.2em] text-sm">
              {loading ? "PROCESSANDO DADOS..." : "SOLICITAR ANÁLISE GRATUITA"}
            </div>
          </button>
          
          {status && <p className="md:col-span-2 text-center text-[10px] font-bold text-brand-cyan uppercase tracking-widest animate-pulse">{status}</p>}
        </form>
      </div>
    </section>
  );
}