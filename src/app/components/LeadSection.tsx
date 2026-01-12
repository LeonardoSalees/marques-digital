export function LeadSection() {
  return (
    <section className="py-24 bg-brand-black px-6 relative overflow-hidden">
      {/* Círculo de luz de fundo para dar profundidade */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 p-8 md:p-16 rounded-[2.5rem] backdrop-blur-md relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Pronto para o próximo nível?</h2>
          <p className="text-zinc-500">Solicite uma análise gratuita da sua operação de marketing.</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-zinc-500 uppercase ml-2">Nome</label>
            <input type="text" placeholder="Seu nome" className="bg-brand-black border border-zinc-800 p-4 rounded-2xl focus:border-brand-gold outline-none text-white transition-all" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-zinc-500 uppercase ml-2">WhatsApp</label>
            <input type="text" placeholder="(00) 00000-0000" className="bg-brand-black border border-zinc-800 p-4 rounded-2xl focus:border-brand-gold outline-none text-white transition-all" />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-bold text-zinc-500 uppercase ml-2">Seu Negócio</label>
            <textarea placeholder="Fale um pouco sobre o que você vende..." className="bg-brand-black border border-zinc-800 p-4 rounded-2xl focus:border-brand-gold outline-none text-white transition-all h-32"></textarea>
          </div>

          <button className="md:col-span-2 bg-brand-gold text-black font-black py-5 rounded-2xl hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest mt-4">
            Enviar Solicitação
          </button>
        </form>
      </div>
    </section>
  );
}