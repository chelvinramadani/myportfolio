import Timeline from "../components/Timeline";
import GlassCard from "../components/GlassCard";

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

const experiences = [
  {
    year: "Agustus – Desember 2025",
    title: "Frontend Developer (Magang)",
    place: "PT Jawa Pos Media Televisi (JTV)",
    description:
      "Mengembangkan UI menggunakan React JS dan Tailwind CSS serta berkolaborasi dengan tim backend untuk integrasi API.",
  },
];


const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 pt-28 pb-24">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-center mx-auto">
            About <span className="text-cyan-400">Me</span>
        </h1>

      {/* Summary */}
      <GlassCard className="p-8 mb-12">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <p className="text-slate-300 leading-relaxed">
          Mahasiswa aktif Program Studi S1 Informatika Universitas Pembangunan Nasional "Veteran"
          Jawa Timur. Memiliki keterampilan yang berfokus dalam bidang Front End Web Development.
          Berpengalaman mengembangkan tampilan website menggunakan Figma, Tailwind CSS, Framework React
          JS serta Laravel melalui proyek akademik, pelatihan, maupun magang industri. Terbiasa bekerja secara
          kolaboratif dalam tim dengan kemampuan komunikasi yang baik, manajemen waktu yang efektif, dan rasa
          tanggung jawab tinggi.
        </p>
      </GlassCard>

      {/* Education Timeline */}
      <GlassCard className="p-8 mb-12">
        <h2 className="text-xl font-semibold mb-6">Pendidikan</h2>
        <Timeline items={education} />
      </GlassCard>

      {/* Experience */}
      <GlassCard className="p-8 mb-12">
        <h2 className="text-xl font-semibold mb-4">Pengalaman</h2>
        <Timeline items={experiences} />
      </GlassCard>

      {/* Skills */}
      <GlassCard className="p-8 mb-12">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Fullstack Website Development",
            "Frontend Website Development",
            "Time Management",
            "Team Work",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm bg-white/10 border border-white/20
              rounded-full text-slate-200 transition-all duration-300
              hover:bg-white/20 hover:border-cyan-400/60 hover:text-white hover:-translate-y-0.5">
              {skill}
            </span>
          ))}
        </div>
      </GlassCard>

      {/* Tech Stack */}
      <GlassCard className="p-8">
        <h2 className="text-xl font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "MySQL",
            "Figma",
            "GitHub",
            "Laravel",
            "React JS",
            "JavaScript",
            "Tailwind CSS",
            "Bootstrap CSS",
          ].map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 text-sm bg-white/10 border border-white/20
              rounded-full text-slate-200 transition-all duration-300
              hover:bg-white/20 hover:border-cyan-400/60 hover:text-white hover:-translate-y-0.5">
              {tech}
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
};

export default About;