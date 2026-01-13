export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-brand-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black text-white">
          MARQUES<span className="text-brand-gold">DIGITAL</span>
        </div>
        <p className="text-zinc-600 text-sm italic">
          © 2026 Todos os direitos reservados. Foco em Performance.
        </p>
        <div className="flex gap-6 text-zinc-400">
           <a href="https://www.instagram.com/marquesdigital_/" className="hover:text-brand-gold transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}