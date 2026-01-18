"use client";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

interface LeadSectionProps {
  buttonText?: string; // O "?" indica que é opcional
  campaignSource?: string; // Útil para sua análise de dados
}

export function LeadSection({buttonText = "SOLICITAR ANÁLISE GRATUITA", // Valor padrão
  campaignSource = "site_direto"}: LeadSectionProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = Date.now();

    // Proteção contra múltiplos cliques e spam
    if (now - lastSubmit < 60000) {
      setStatus("Aguarde um minuto para enviar novamente.");
      return;
    }

    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);


    formData.append("access_key", "3d95e88a-0d3d-4263-a69c-8a2b04b06922");
    // Adicione o e-mail do Eduardo como cópia
    formData.append("cc", "marquesedu7070@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Solicitação enviada com sucesso!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      setStatus("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-24 bg-brand-black px-6 relative overflow-hidden"
      id="contatos"
    >
      <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-white/5 p-8 md:p-16 rounded-[2.5rem] backdrop-blur-xl relative z-10 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 italic uppercase">
            Sua empresa no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              topo.
            </span>
          </h2>
          <p className="text-zinc-500 font-medium italic">
            Estratégia e performance para o seu negócio.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">
              Nome
            </label>
            <input
              name="nome"
              required
              maxLength={50}
              placeholder="Seu nome"
              className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all placeholder:text-zinc-700"
            />
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">
              E-mail
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="seu@email.com"
              className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all placeholder:text-zinc-700"
            />
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">
              WhatsApp
            </label>
            <PatternFormat
              name="whatsapp"
              format="(##) #####-####"
              mask="_"
              required
              placeholder="(00) 00000-0000"
              className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all placeholder:text-zinc-700"
            />
          </div>

          {/* Texto de Apoio UX */}
          <div className="hidden lg:flex flex-col justify-end pb-2">
            <p className="text-[9px] text-zinc-600 uppercase tracking-tighter">
              Analisamos seu negócio em até 24h.
            </p>
          </div>

          {/* Seu Negócio (Mensagem) */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">
              Seu Negócio
            </label>
            <textarea
              name="mensagem"
              required
              maxLength={400}
              placeholder="Ex: Orçamento para Marcenaria"
              className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all h-32 resize-none placeholder:text-zinc-700"
            ></textarea>
          </div>

          {/* CAMPO OCULTO: Para você saber de onde veio o lead */}
          <input type="hidden" name="origem" value={campaignSource} />

          <button
            disabled={loading}
            className={`md:col-span-2 relative group mt-4 overflow-hidden rounded-2xl transition-all ${
              loading ? "opacity-50" : "active:scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan"></div>
            <div className="relative py-5 text-white font-black uppercase tracking-[0.2em] text-sm">
              {loading ? "PROCESSANDO..." : buttonText}
            </div>
          </button>

          {status && (
            <p className="md:col-span-2 text-center text-[10px] font-bold text-brand-cyan uppercase tracking-widest animate-pulse">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
