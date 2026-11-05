const CardTech = ({ title, category, img, desc, tags, bg = "bg-slate-100" }) => {
  return (
    <div className="group relative bg-white rounded-2xl border-2 border-black p-6 shadow-[0.25rem_0.25rem_#121212] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0.35rem_0.35rem_#121212] flex flex-col justify-between">
      <div>
        {/* Top Header: Icon + Category Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-xl border-2 border-black ${bg} flex items-center justify-center p-2.5 shadow-[0.15rem_0.15rem_#121212] group-hover:scale-105 transition-transform`}
          >
            <img className="w-full h-full object-contain" src={img} alt={title} />
          </div>
          {category && (
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 border border-black/20 text-gray-700">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-mono text-xl font-bold text-gray-900 group-hover:text-black">
            {title}
          </h3>
          <p className="font-mono text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
            {desc}
          </p>
        </div>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-black/5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-50 border border-slate-300 text-slate-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardTech;
