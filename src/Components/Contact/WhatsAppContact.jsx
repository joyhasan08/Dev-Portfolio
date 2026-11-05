import { useState } from "react";
import { FaWhatsapp, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";

const WHATSAPP_NUMBER = "8801788450069";
const DISPLAY_NUMBER = "+880 1788-450069";

const QUICK_PROMPTS = [
  "Hi Joy, I saw your portfolio and have a project to discuss!",
  "Hello! Are you available for a freelance/full-time role?",
  "Hey Joy, loved your portfolio projects! Let's connect."
];

const WhatsAppContact = () => {
  const [message, setMessage] = useState(QUICK_PROMPTS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(`+${WHATSAPP_NUMBER}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppRedirect = (customText) => {
    const textToSend = customText || message || "Hi Joy, I saw your portfolio!";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto mb-20 px-6 pt-12">
      {/* <h1 className="text-2xl font-bold w-full mb-10 text-center uppercase font-mono bg-white py-3 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212]">
        Contact Me via WhatsApp
      </h1> */}

      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-2 border-black shadow-[0.35rem_0.35rem_#121212] p-6 sm:p-10 font-mono">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-black/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#25D366] border-2 border-black shadow-[0.2rem_0.2rem_#121212] flex items-center justify-center text-white text-3xl shrink-0">
              <FaWhatsapp />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Let&apos;s Connect Directly</h2>
              <p className="text-sm text-gray-600 mt-1">
                Fastest response for project inquiries, freelance work, or collaborations.
              </p>
            </div>
          </div>

          {/* Number badge & copy action */}
          <div className="flex items-center gap-2 bg-slate-100 py-2 px-4 rounded-xl border-2 border-black shadow-[0.15rem_0.15rem_#121212]">
            <span className="font-bold text-base text-gray-800">{DISPLAY_NUMBER}</span>
            <button
              onClick={handleCopyNumber}
              className="p-2 hover:bg-white rounded-lg transition-colors cursor-pointer text-gray-700"
              title="Copy WhatsApp number"
              aria-label="Copy phone number"
            >
              {copied ? <FaCheck className="text-green-600" /> : <FaCopy />}
            </button>
            {copied && <span className="text-xs text-green-700 font-semibold">Copied!</span>}
          </div>
        </div>

        {/* Quick prompt chips */}
        <div className="mt-6">
          <label className="block text-xs uppercase font-bold text-gray-700 mb-2">
            Select a quick message or customize your own:
          </label>
          <div className="flex flex-wrap gap-2">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setMessage(prompt)}
                className={`text-xs py-2 px-3 rounded-lg border-2 border-black text-left cursor-pointer transition-all ${message === prompt
                  ? "bg-[#FFDE59] shadow-[0.15rem_0.15rem_#121212] font-bold"
                  : "bg-slate-50 hover:bg-slate-100 shadow-[0.1rem_0.1rem_#121212]"
                  }`}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Message input area */}
        <div className="mt-6">
          <label htmlFor="wa-message" className="block text-sm font-bold text-gray-800 mb-2">
            Message Preview
          </label>
          <textarea
            id="wa-message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full font-mono bg-white font-medium p-3.5 rounded-xl border-2 border-black shadow-[0.2rem_0.2rem_#121212] focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all"
          />
        </div>

        {/* Primary CTA button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            Clicking will open WhatsApp Web or the WhatsApp app directly on your device.
          </p>
          <button
            onClick={() => handleWhatsAppRedirect(message)}
            className="w-full sm:w-auto cursor-pointer uppercase font-mono font-bold py-3.5 px-8 rounded-xl border-2 border-black bg-[#25D366] text-white shadow-[0.25rem_0.25rem_#121212] hover:bg-[#20ba5a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212] hover:scale-105 duration-200 flex items-center justify-center gap-3 shrink-0"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Chat On WhatsApp</span>
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppContact;

