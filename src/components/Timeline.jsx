const education = [
  {
    year: "2023 – Sekarang",
    title: "S1 Informatika",
    place: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
    description:
      "Telah menempuh 5 semester perkuliahan. Mengembangkan berbagai proyek mata kuliah secara individu maupun berkolaborasi dengan tim.",
  },
  {
    year: "2020 – 2023",
    title: "SMA IPA",
    place: "SMA Negeri 22 Surabaya",
    description:
      "Mengikuti kegiatan ekstrakurikuler TKJ dan Web Programming untuk mengembangkan minat pada bidang Teknologi Informasi.",
  },
];

const Timeline = () => {
  return (
    <div className="space-y-8">
      {education.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[24px_1fr] gap-6"
        >
          {/* Stepper */}
          <div className="relative flex justify-center">
            {/* Line */}
            {index !== education.length - 1 && (
              <span className="absolute top-6 h-full w-px bg-white/20" />
            )}

            {/* Dot */}
            <span className="w-3 h-3 bg-cyan-400 rounded-full mt-1" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm text-slate-400">
              {item.year}
            </span>

            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>

            <div className="text-slate-300">
              {item.place}
            </div>

            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;