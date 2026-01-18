"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Verifica se o usuário está na página de seleção/sorteio
  const isSelecaoPage = pathname === "/selecao";

  const handleLogoClick = () => {
    if (isSelecaoPage) {
      // Se estiver na página de sorteio, vai para a Home
      router.push("/");
    } else {
      // Se já estiver na Home, sobe para o topo
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const phoneNumber = "5511972347027";
  const message = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de um diagnóstico gratuito do meu negócio.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-black/70 backdrop-blur-lg border-b border-brand-purple/20 py-4 shadow-[0_4px_30px_rgba(124,58,237,0.1)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Dinâmico */}
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="w-8 h-8 relative group-hover:scale-110 transition-transform">
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              alt="logo"
              priority
              fetchPriority="high"
            />
          </div>
          <span className="text-white font-black text-xl tracking-tighter italic">
            MARQUES
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">
              DIGITAL
            </span>
          </span>
        </div>

        {/* Links Desktop - Só aparecem na Home para não distrair no Sorteio */}
        {!isSelecaoPage ? (
          <div className="hidden md:flex items-center gap-8">
            {["Serviços", "workflow", "Contatos", "FAQ"].map((item) => (
              <a
                key={item}
                href={
                  item === "Serviços" ? "#services" : `#${item.toLowerCase()}`
                }
                className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-brand-purple transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        ) : (
          <div className="hidden md:block">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              Projeto Impulso Digital
            </span>
          </div>
        )}

        {/* Botão CTA */}
        <button className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-magenta rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <a
            className="relative bg-brand-black border border-white/10 text-white text-[10px] md:text-xs font-black px-5 py-2 md:px-7 md:py-3 rounded-full hover:border-brand-purple/50 transition-all block"
            target="_blank"
            rel="noopener noreferrer"
            href={whatsappUrl}
          >
            {isSelecaoPage ? "FALAR NO WHATSAPP" : "CONSULTORIA GRÁTIS"}
          </a>
        </button>
      </div>
    </nav>
  );
}
