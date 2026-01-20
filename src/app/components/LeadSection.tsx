"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

interface LeadSectionProps {
  buttonText?: string;
  campaignSource?: string;
}

export function LeadSection({
  buttonText = "SOLICITAR ANÁLISE GRATUITA",
  campaignSource = "site_direto"
}: LeadSectionProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = Date.now();

    // Proteção contra múltiplos cliques (1 minuto de intervalo)
    if (now - lastSubmit < 60000) {
      setStatus("Aguarde um pouco para enviar novamente.");
      return;
    }

    setLoading(true);
    setStatus("Enviando dados...");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    // 1. Preparar dados para o Google Sheets (Objeto JSON)
    const sheetData = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      negocio: formData.get("mensagem"),
      origem: campaignSource,
    };

    // 2. Preparar dados para o Web3Forms (E-mail)
    formData.append("access_key", "3d95e88a-0d3d-4263-a69c-8a2b04b06922");
    formData.append("cc", "marquesedu7070@gmail.com");

    try {
      // EXECUÇÃO EM PARALELO: Envia para a Planilha e para o E-mail ao mesmo tempo
      const [web3Response] = await Promise.all([
        // Envio para o Web3Forms
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        }),
        // Envio para o Google Sheets (URL que você forneceu)
        fetch("https://script.google.com/macros/s/AKfycbwOlrWyaRfcOzn947Hwv82eK0lkanUSZeRrpBrBQ3rx-JVdxWO0H542bkNscaVwpK2m/exec", {
          method: "POST",
          mode: "no-cors", // Crucial para Google Apps Script
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sheetData),
        })
      ]);

      const result = await web3Response.json();

      if (result.success) {
        setStatus("Inscrição confirmada com sucesso!");
        setLastSubmit(now);
        formElement.reset();
        router.push("/sorteio/sucesso")
      } else {
        setStatus("Erro ao processar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na integração:", error);
      setStatus("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-brand-black px-6 relative overflow-hidden" id="contatos">
      <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-white/5 p-8 md:p-16 rounded-[2.5rem] backdrop-blur-xl relative z-10 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 italic uppercase">
            Sua empresa no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              topo.
            </span>
          </h2>
          <p className="text-zinc-500 font-medium italic">Estratégia e performance para o seu negócio.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">Nome</label>
            <input name="nome" required placeholder="Seu nome" className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">E-mail</label>
            <input name="email" required type="email" placeholder="seu@email.com" className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all" />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">WhatsApp</label>
            <PatternFormat name="whatsapp" format="(##) #####-####" mask="_" required placeholder="(00) 00000-0000" className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all" />
          </div>

          <div className="hidden lg:flex flex-col justify-end pb-2 text-[9px] text-zinc-600 uppercase tracking-tighter">
            Analisamos seu negócio em até 24h.
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-black text-brand-purple uppercase ml-2 tracking-widest">Seu Negócio / Projeto</label>
            <textarea name="mensagem" required placeholder="Fale um pouco sobre o que você faz..." className="bg-brand-black/50 border border-white/10 p-4 rounded-2xl focus:border-brand-purple outline-none text-white transition-all h-32 resize-none" />
          </div>

          <button
            disabled={loading}
            className={`md:col-span-2 relative group mt-4 overflow-hidden rounded-2xl transition-all ${loading ? "opacity-50" : "active:scale-95"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan"></div>
            <div className="relative py-5 text-white font-black uppercase tracking-[0.2em] text-sm text-center">
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