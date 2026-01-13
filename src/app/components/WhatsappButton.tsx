"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Mostra o balão de mensagem após 5 segundos
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "5511972347027"; // COLOQUE O NÚMERO DO SEU AMIGO AQUI
  const message = encodeURIComponent("Olá! Vim pelo site e gostaria de um diagnóstico gratuito do meu negócio.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Balão de Mensagem */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-200 max-w-[240px] relative"
          >
            {/* Botão de fechar o balão */}
            <button 
              onClick={() => setShowMessage(false)}
              className="absolute -top-2 -right-2 bg-zinc-800 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
            
            <p className="text-zinc-800 text-xs font-medium leading-relaxed">
              Fala! 👋 Vi que você está por aqui. Quer um <strong>diagnóstico gratuito</strong> da sua empresa?
            </p>
            
            {/* Triângulo do balão */}
            <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão do WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] relative group"
      >
        {/* Ping de notificação (opcional) */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.383.1.173.444.734.952 1.187.658.587 1.213.77 1.386.856.173.087.274.072.376-.043.101-.116.433-.506.548-.68.116-.173.231-.144.39-.087.158.058 1.011.477 1.184.564.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.621c-1.281 0-2.522-.351-3.593-.976l-3.991 1.047 1.066-3.896c-.694-1.117-1.061-2.408-1.06-3.737.003-3.844 3.129-6.969 6.978-6.969 3.846 0 6.981 3.133 6.981 6.978 0 3.848-3.132 6.983-6.981 6.983z"/>
        </svg>
      </motion.a>
    </div>
  );
}