import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const Card = ({ image, title, tools = [], description, link }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="
          cursor-pointer
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl overflow-hidden
          transition hover:-translate-y-1 hover:shadow-xl
        "
      >
        {/* Image */}
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-3">{title}</h3>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="
                  text-xs px-3 py-1
                  bg-white/10 border border-white/20
                  rounded-full text-slate-300
                "
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
          >
            Lihat selengkapnya →
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal Content */}
          <div className="
            relative z-10 max-w-xl w-full mx-4
            bg-slate-900 border border-white/20
            rounded-2xl overflow-hidden
          ">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white z-10 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="aspect-[16/9] w-full">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{title}</h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                {description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="
                      text-xs px-3 py-1
                      bg-white/10 border border-white/20
                      rounded-full text-slate-300
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Project Link (conditional) */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-cyan-400 font-medium
                    hover:text-cyan-300 transition
                  "
                >
                  Kunjungi Project
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;