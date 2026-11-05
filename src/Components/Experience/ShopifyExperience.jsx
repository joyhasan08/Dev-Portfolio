import { FaCode, FaChartLine, FaBolt } from "react-icons/fa";
import shopifyImg from "../../assets/tech/sp.png";

const ShopifyExperience = () => {
  return (
    <div className="mt-8 bg-gradient-to-br from-[#f0fdf4] via-white to-[#f7fee7] rounded-2xl border-2 border-black p-6 sm:p-8 shadow-[0.35rem_0.35rem_#121212]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b-2 border-black/10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-[#95BF47]/20 border-2 border-black p-2 shadow-[0.15rem_0.15rem_#121212] flex items-center justify-center shrink-0">
            <img src={shopifyImg} alt="Shopify" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#95BF47] text-black border border-black shadow-[0.1rem_0.1rem_#121212]">
                eCommerce Experience
              </span>
            </div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold text-gray-900 mt-1">
              Shopify Liquid & Store Engineering
            </h3>
          </div>
        </div>
        <div className="font-mono text-xs font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-lg border-2 border-black shadow-[0.1rem_0.1rem_#121212] self-start sm:self-auto">
          International Client Deliveries
        </div>
      </div>

      {/* Main summary */}
      <p className="font-mono text-xs sm:text-sm text-gray-700 leading-relaxed mt-4 font-medium">
        Customized and maintained production Shopify stores using Shopify Liquid, delivering high-performance eCommerce solutions with tailored dropshipping workflows and conversion-driven features.
      </p>

      {/* 3 Compact Minimal Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-5">
        <div className="bg-white rounded-xl border-2 border-black p-4 shadow-[0.15rem_0.15rem_#121212] flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
          <div>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-black flex items-center justify-center text-emerald-800 text-sm mb-2.5 shadow-[0.1rem_0.1rem_#121212]">
              <FaCode />
            </div>
            <h4 className="font-mono text-xs font-bold uppercase text-gray-900 mb-1">
              Custom Themes & Liquid
            </h4>
            <p className="font-mono text-xs text-gray-600 leading-relaxed">
              Custom Liquid sections, dynamic schema architecture, responsive styling, and custom template logic.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-black p-4 shadow-[0.15rem_0.15rem_#121212] flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
          <div>
            <div className="w-8 h-8 rounded-lg bg-lime-100 border border-black flex items-center justify-center text-lime-800 text-sm mb-2.5 shadow-[0.1rem_0.1rem_#121212]">
              <FaChartLine />
            </div>
            <h4 className="font-mono text-xs font-bold uppercase text-gray-900 mb-1">
              Conversions & Integrations
            </h4>
            <p className="font-mono text-xs text-gray-600 leading-relaxed">
              Dropshipping flows, custom app integrations, subscription billing models, and smart upsell strategies.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-black p-4 shadow-[0.15rem_0.15rem_#121212] flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
          <div>
            <div className="w-8 h-8 rounded-lg bg-yellow-100 border border-black flex items-center justify-center text-yellow-800 text-sm mb-2.5 shadow-[0.1rem_0.1rem_#121212]">
              <FaBolt />
            </div>
            <h4 className="font-mono text-xs font-bold uppercase text-gray-900 mb-1">
              Speed & Email Automation
            </h4>
            <p className="font-mono text-xs text-gray-600 leading-relaxed">
              Email marketing automation (Klaviyo), core web vital speed optimization, and cross-functional team delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-black/10 font-mono text-[11px] font-bold">
        <span className="px-2.5 py-1 rounded-md bg-white border border-black shadow-[0.1rem_0.1rem_#121212] text-gray-800">
          Shopify Liquid
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white border border-black shadow-[0.1rem_0.1rem_#121212] text-gray-800">
          Theme Customization
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white border border-black shadow-[0.1rem_0.1rem_#121212] text-gray-800">
          Dropshipping Workflows
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white border border-black shadow-[0.1rem_0.1rem_#121212] text-gray-800">
          Subscription & Upsells
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white border border-black shadow-[0.1rem_0.1rem_#121212] text-gray-800">
          Email Automation
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white border border-black shadow-[0.1rem_0.1rem_#121212] text-gray-800">
          Performance Optimization
        </span>
      </div>
    </div>
  );
};

export default ShopifyExperience;

