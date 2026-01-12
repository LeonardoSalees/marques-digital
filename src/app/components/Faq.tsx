export function Faq() {
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
  },
  { 
    q: "Eu terei acesso aos relatórios de faturamento?", 
    a: "Com certeza. Transparência é um dos nossos pilares na Marques Digital. Você terá acesso a dashboards em tempo real para acompanhar cada real investido e o retorno gerado." 
  }
];

  return (
    <section className="py-24 bg-brand-black px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-12 text-center text-brand-gold">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 cursor-pointer">
              <summary className="list-none flex justify-between items-center text-white font-bold text-lg">
                {faq.q}
                <span className="text-brand-gold group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-zinc-500 mt-4 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}