"use client";
import { motion } from "framer-motion";

const passos = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Analisamos os dados atuais do seu negócio para identificar gargalos e oportunidades de lucro.",
    color: "from-brand-purple" // Baseado no início do prisma da logo
  },
  {
    n: "02",
    title: "Estrutura",
    desc: "Desenvolvemos sua Landing Page ultra-rápida, focada em converter visitantes em orçamentos.",
    color: "from-brand-magenta" // Tom médio da logo
  },
  {
    n: "03",
    title: "Tráfego",
    desc: "Ativamos anúncios estratégicos para levar o público certo direto para o seu WhatsApp.",
    color: "from-blue-500" // Transição para o ciano
  },
  {
    n: "04",
    title: "Escala",
    desc: "Otimizamos as campanhas e a página para reduzir custos e aumentar suas vendas continuamente.",
    color: "from-brand-cyan" // Final do prisma da logo
  }
];

export function Workflow() {
  return (
    <section className="py-24 bg-brand-black px-6 relative overflow-hidden" id="workflow">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção */}
        <div className="mb-16">
          <span className="text-brand-purple font-bold text-xs uppercase tracking-[0.3em]">Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 italic uppercase">
            COMO COLOCAMOS SUA <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              EMPRESA NO TOPO
            </span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((passo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Linha conectora (apenas desktop) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}

              <div className="relative z-10">
                {/* Número com Gradiente conforme a logo */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${passo.color} to-transparent p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-brand-black rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{passo.n}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {passo.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {passo.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frase de fechamento para o cliente de marcenaria */}
        <div className="mt-20 p-8 border border-white/5 bg-zinc-900/30 rounded-[2rem] text-center backdrop-blur-sm">
          <p className="text-zinc-400 text-sm md:text-base">
            "Não é apenas um site bonito. É uma <span className="text-white font-bold">estratégia de dados</span> desenhada para o seu crescimento."
          </p>
        </div>
      </div>
    </section>
  );
}