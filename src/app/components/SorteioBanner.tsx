"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Gift } from "lucide-react";

export function SorteioBanner() {
  const pathname = usePathname();
  
  // Não mostra o banner se já estiver na página de sorteio ou sucesso
  if (pathname.includes("/sorteio") || pathname.includes("/sucesso")) return null;

  return (
    <div className="bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan px-4 py-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <p className="text-[10px] md:text-xs font-black uppercase tracking-tighter text-white flex items-center gap-2">
          <Gift size={14} className="animate-bounce" />
          <span className="hidden sm:inline text-white/90 font-medium">Projeto Impulso Digital:</span> 
          Ganhe uma estrutura de elite 
        </p>
        
        <Link
          href="/sorteio"
          className="bg-brand-black/20 hover:bg-brand-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black text-white transition-all flex items-center gap-1 group whitespace-nowrap"
        >
          PARTICIPAR <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}