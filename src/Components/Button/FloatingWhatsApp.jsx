import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "8801788450069";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const defaultText = "Hi Joy, I saw your portfolio and would like to connect!";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:block font-mono text-xs font-bold bg-white text-gray-900 py-1.5 px-3 rounded-lg border-2 border-black shadow-[0.15rem_0.15rem_#121212] animate-fade-in whitespace-nowrap">
          Chat with Joy
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white border-2 border-black shadow-[0.25rem_0.25rem_#121212] hover:scale-110 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212] transition-all duration-200 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-black"></span>
        </span>
        <FaWhatsapp className="text-3xl text-white group-hover:rotate-12 transition-transform duration-200" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;

