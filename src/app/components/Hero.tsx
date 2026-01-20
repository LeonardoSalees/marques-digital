import { redirect } from "next/navigation";
import Typewriter from "typewriter-effect";
export function Hero() {
  const phoneNumber = "5511972347027"; // COLOQUE O NÚMERO DO SEU AMIGO AQUI
  const message = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de um diagnóstico gratuito do meu negócio.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-brand-black px-6 pt-5 relative overflow-hidden">
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
            <a
              className="bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-black px-8 py-4 rounded-lg hover:brightness-110 transition-all text-sm uppercase tracking-wider shadow-lg shadow-brand-purple/20"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Consultoria
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Glow de fundo - Roxo sutil baseado na logo */}
          <div className="absolute -inset-4 bg-brand-purple/20 blur-3xl rounded-full"></div>

          <div className="relative bg-zinc-900/60 border border-white/5 p-10 rounded-3xl backdrop-blur-xl shadow-2xl">
            <Typewriter
              options={{
                strings: [
                  "Dados",
                  "Performance",
                  "Estratégia",
                  "Tecnologia",
                  "Conversão",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 10,
                cursor: "▋", // Cursor estilo terminal Linux
              }}
            />
          </div>
        </div>
      </div>
      {/* Seta de Indução Visual */}
      <div className="absolute z-50 bottom-1 left-1/2 -translate-x-1/2 ...">
        <a href="#services" className="hover:scale-110 transition-transform">
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            {/* Texto em Português sutil */}
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 italic ml-1">
              Explorar
            </span>

            {/* Container da Seta com Animação */}
            <div className="relative flex items-center justify-center">
              {/* Círculo de pulsação ao fundo (opcional para dar mais destaque) */}
              <div className="absolute w-8 h-8 bg-brand-purple/20 rounded-full animate-ping" />

              {/* A Seta em si */}
              <div className="relative animate-bounce">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-cyan"
                >
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
