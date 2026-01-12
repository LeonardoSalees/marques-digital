export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-brand-black px-6 pt-5 relative overflow-hidden">
      {/* Background Glows para combinar com a logo */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-purple/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-brand-purple"></span>
            <span className="text-brand-purple font-mono text-xs uppercase tracking-[0.3em]">
              Performance Digital
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Menos cliques, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">
              Mais lucro.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Unimos desenvolvimento web de alta performance com gestão de tráfego
            estratégica para tirar sua empresa do amadorismo e escalar suas
            vendas.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-black px-8 py-4 rounded-lg hover:brightness-110 transition-all text-sm uppercase tracking-wider shadow-lg shadow-brand-purple/20">
              Agendar Consultoria
            </button>
            <button className="border border-zinc-800 text-white px-8 py-4 rounded-lg hover:bg-zinc-900 transition-all text-sm uppercase tracking-wider">
              Ver Cases
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Glow de fundo - Roxo sutil baseado na logo */}
          <div className="absolute -inset-4 bg-brand-purple/20 blur-3xl rounded-full"></div>

          <div className="relative bg-zinc-900/60 border border-white/5 p-10 rounded-3xl backdrop-blur-xl shadow-2xl">
            <div className="space-y-6">
              {/* Header: Foco em Transparência */}
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                    Metodologia de Trabalho
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-magenta rounded-full animate-pulse"></div>
                    <p className="text-white font-bold text-sm">
                      Análise e Otimização Diária
                    </p>
                  </div>
                </div>
                <div className="bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20">
                  <p className="text-brand-purple text-[10px] font-bold uppercase">
                    Foco em Performance
                  </p>
                </div>
              </div>

              {/* Frase de Posicionamento (Substituindo o depoimento falso) */}
              <div className="space-y-2">
                <p className="text-zinc-300 text-sm italic font-medium leading-relaxed">
                  "Trabalhamos com transparência total: nosso objetivo é fazer o
                  seu investimento retornar em leads qualificados e vendas
                  reais."
                </p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold">
                  — Nosso Compromisso
                </p>
              </div>

              {/* Grid de Pilares (Substituindo métricas por promessas de serviço) */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-brand-black/50 border border-zinc-800 p-5 rounded-2xl group hover:border-brand-purple/40 transition-colors">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold mb-2">
                    Pilar 01
                  </p>
                  <p className="text-white font-bold text-lg leading-tight">
                    Decisões em Dados
                  </p>
                  <p className="text-brand-purple text-[10px] mt-2 font-medium">
                    Análise minuciosa
                  </p>
                </div>

                <div className="bg-brand-black/50 border border-zinc-800 p-5 rounded-2xl group hover:border-brand-purple/40 transition-colors">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold mb-2">
                    Pilar 02
                  </p>
                  <p className="text-white font-bold text-lg leading-tight">
                    Escala Viável
                  </p>
                  <p className="text-brand-magenta text-[10px] mt-2 font-medium">
                    Crescimento constante
                  </p>
                </div>
              </div>

              {/* Rodapé: Especialidades do seu amigo e as suas */}
              <div className="bg-brand-purple/5 p-3 rounded-xl border border-brand-purple/10 text-center">
                <p className="text-brand-purple text-[11px] font-bold uppercase tracking-tight">
                  Estratégia Digital & Desenvolvimento Web
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
