interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  
  faqs?: FaqItem[]; 
}
export function Faq({faqs=[]}:FaqProps) {
  

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