"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o efeito após 20px de scroll
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-brand-black/70 backdrop-blur-lg border-b border-brand-purple/20 py-4 shadow-[0_4px_30px_rgba(124,58,237,0.1)]" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-3 flex justify-between items-center">
        
        {/* Logo baseada na imagem enviada */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 relative">
            <Image src={'/logo.png'} width={100} height={100} alt="logo"/>
          </div>
          <span className="text-white font-black text-xl tracking-tighter italic">
            MARQUES<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">DIGITAL</span>
          </span>
        </div>

        {/* Links Desktop - Ocultos no Mobile */}
        <div className="hidden md:flex items-center gap-8">
          {['Serviços', 'workflow', 'Contatos', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={item === 'Serviços' ? '#services' : `#${item.toLowerCase()}`}
              className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-brand-purple transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Botão CTA com as cores novas */}
        <button className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-magenta rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative bg-brand-black border border-white/10 text-white text-[10px] md:text-xs font-black px-5 py-2 md:px-7 md:py-3 rounded-full hover:border-brand-purple/50 transition-all">
            CONSULTORIA GRÁTIS
          </div>
        </button>

      </div>
    </nav>
  );
}