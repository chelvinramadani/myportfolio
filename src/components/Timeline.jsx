const Timeline = ({ items = [] }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[24px_1fr] gap-6"
        >
          {/* Stepper */}
          <div className="relative flex justify-center">
            {/* Line */}
            {index !== items.length - 1 && (
              <span className="absolute top-6 h-full w-px bg-white/20" />
            )}

            {/* Dot */}
            <span className="w-3 h-3 bg-cyan-400 rounded-full mt-1" />
          </div>

          {/* Content */}
          <div>
            {item.year && (
              <span className="text-sm text-slate-400">
                {item.year}
              </span>
            )}

            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>

            {item.place && (
              <div className="text-slate-300">
                {item.place}
              </div>
            )}

            {item.description && (
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;