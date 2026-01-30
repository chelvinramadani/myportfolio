import Card from "../components/Card";
import dicodingweb from "../assets/certificate/dicodingpemweb.png";
import dicodingfrontend from "../assets/certificate/dicodingfrontend.png";
import dicodingai from "../assets/certificate/dicodingAI.png";
import Santika25 from "../assets/certificate/Santika2025.png"
import Pibiti23 from "../assets/certificate/pibiti23.png"
import Pibiti24 from "../assets/certificate/pibiti24.png"
import Pibiti25 from "../assets/certificate/pibiti25.png"

const certificates = [
  {
    title: "PIBITI 2023",
    image: Pibiti23,
    description:
      "Sertifikat peserta pelatihan yang diadakan oleh HIMATIFA UPN Veteran Jawa Timur untuk membangun website interaktif menggunakan Bootstrap & Javascript.",
  },
  {
    title: "PIBITI 2024",
    image: Pibiti24,
    description:
      "Sertifikat peserta pelatihan yang diadakan oleh HIMATIFA UPN Veteran Jawa Timur untuk membangun website menggunakan Framework Laravel bagi pemula.",
  },
  {
    title: "Belajar Frontend Web untuk pemula",
    image: dicodingfrontend,
    description:
      "Sertifikat kelas Dicoding Belajar Membuat Frontend Website untuk pemula.",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    image: dicodingweb,
    description:
      "Sertifikat kelas Dicoding yang ditujukan untuk seorang yang ingin mengembangkan kemampuan dasar pengembangan website.",
  },
  {
    title: "Belajar Dasar AI",
    image: dicodingai,
    description:
      "Sertifikat kelas Dicoding Belajar Dasar AI.",
  },
  {
    title: "Presenter SANTIKA 2025",
    image: Santika25,
    description:
      "Sertifikat sebagai pembicara/presenter jurnal Seminar Nasional Informatika Bela Negara (SANTIKA) 2025.",
  },
  {
    title: "PIBITI 2025",
    image: Pibiti25,
    description:
      "Sertifikat peserta pelatihan yang diadakan oleh HIMATIFA UPN Veteran Jawa Timur untuk membangun website menggunakan Framework React JS bagi pemula.",
  },
];

const Certificates = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 pt-28 pb-24">
      
      {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-center mx-auto">
            My <span className="text-cyan-400">Certificates</span>
        </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificates) => (
          <Card key={certificates.title} {...certificates} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;