"use client";

export function Services() {
  const services = [
    // --- DEVELOPMENT (A sua especialidade) ---
    {
      title: "Landing Pages de Elite",
      area: "Development 💻​",
      desc: "Desenvolvimento de páginas ultra-rápidas focadas em converter visitantes em agendamentos ou vendas.",
    },
    {
      title: "Página de Links (Bio Pro)",
      area: "Development 💻​",
      desc: "Substitua o Linktree por uma página própria que carrega em 1s e possui rastreamento total para remarketing.",
    },
    {
      title: "Mídia Kit para Influencers",
      area: "Development 💻​",
      desc: "Um site exclusivo com suas métricas para profissionalizar sua imagem e fechar contratos de alto valor.",
    },
    {
      title: "Automação de WhatsApp",
      area: "Development 💻​",
      desc: "Criamos robôs inteligentes que fazem o primeiro atendimento e filtram os clientes interessados 24/7.",
    },
    {
      title: "Sites Institucionais High-End",
      area: "Development 💻​",
      desc: "Presença digital robusta com tecnologias modernas (Next.js) para empresas que buscam autoridade.",
    },

    // --- MARKETING (A especialidade do seu amigo) ---
    {
      title: "Tráfego Pago Local",
      area: "Marketing 🏆​",
      desc: "Anúncios estratégicos no Instagram e Facebook para levar pessoas direto para o balcão ou WhatsApp.",
    },
    {
      title: "Gestão de Busca (Google Ads)",
      area: "Marketing 🏆​",
      desc: "Apareça exatamente no momento em que seu cliente pesquisa pelo seu serviço no Google.",
    },
    {
      title: "Google Meu Negócio Pro",
      area: "Marketing 🏆​",
      desc: "Colocamos sua empresa no topo das buscas locais e do Maps para atrair clientes da sua região.",
    },
    {
      title: "Funis para Infoprodutos",
      area: "Marketing 🏆​",
      desc: "Estrutura completa de anúncios e páginas para lançamento de cursos, mentorias e ebooks.",
    },
    {
      title: "Recuperação de Vendas",
      area: "Marketing 🏆​",
      desc: "Estratégias para reengajar pessoas que abandonaram o carrinho ou pararam de responder no WhatsApp.",
    },
    {
      title: "SEO Local & Posicionamento",
      area: "Marketing 🏆​",
      desc: "Estratégias para sua empresa ser encontrada organicamente sem depender apenas de anúncios pagos.",
    },

    // --- DATA & DESIGN (O diferencial competitivo) ---
    {
      title: "Análise de Dados e Métricas",
      area: "Data",
      desc: "Instalação de Pixels e Analytics para você saber exatamente de onde vem cada real faturado.",
    },
    {
      title: "Identidade Visual Express",
      area: "Design 🎨​",
      desc: "Criação de logotipos e paleta de cores para empresas que precisam de um posicionamento profissional imediato.",
    },
    {
      title: "Social Media Branding",
      area: "Design 🎨​",
      desc: "Padronização visual do Instagram e LinkedIn para transmitir autoridade e confiança aos seguidores.",
    },
    {
      title: "Design de Criativos para Anúncios",
      area: "Design 🎨​",
      desc: "Artes e vídeos projetados especificamente para chamar atenção e gerar cliques em campanhas de tráfego pago.",
    },
    {
      title: "UI/UX Design​ de Interfaces",
      area: "Design 🎨​",
      desc: "Projetamos a experiência do usuário antes de codar, garantindo interfaces intuitivas e modernas.",
    },
    {
      title: "Apresentações e Propostas Premium",
      area: "Design 🎨​",
      desc: "Design de PDFs e apresentações de vendas para profissionais liberais que desejam cobrar mais caro por seus serviços.",
    },
  ];

  return (
    <section className="py-24 bg-brand-black px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-4">
            Nossa Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Soluções para <br /> gerar receita.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:bg-brand-purple/5 hover:border-brand-purple/30 transition-all duration-500 flex flex-col items-start"
            >
              {/* Badge Dinâmico */}
              <span
                className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6 border ${
                  service.area === "Development"
                    ? "text-blue-400 border-blue-400/30 bg-blue-400/5"
                    : "text-brand-gold border-brand-gold/30 bg-brand-gold/5"
                }`}
              >
                {service.area}
              </span>

              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h4>
              <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
    </section>
  );
}
