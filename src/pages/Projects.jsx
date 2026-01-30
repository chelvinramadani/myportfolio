import Card from "../components/Card";
import animatoon from "../assets/project/animatoon.png";
import cashed from "../assets/project/cashed.png";
import imphnen from "../assets/project/imphnen.png"
import kayoo from "../assets/project/kayoo.png"
import landingpage from "../assets/project/landingpage.png"
import linkku from "../assets/project/linkku.png"
import cleanify from "../assets/project/cleanify.png"

const projects = [
  {
    title: "Linkku",
    image: linkku,
    tools: ["HTML", "CSS", "Javascript"],
    description:
      "Link Ku adalah website sederhana seperti Linktree, untuk menampilkan berbagai tautan dalam satu halaman.",
    link: "https://chelvinramadani.github.io/my-link/"
  },
  {
    title: "Simple Landing Page",
    image: landingpage,
    tools: ["HTML", "CSS", "Bootstrap","Javascript"],
    description:
      "Landing page ini dikembangkan untuk memenuhi tugas project PIBITI 2023.",
    link: "https://chelvinramadani.github.io/Pibiti-2023-Project/"
  },
  {
    title: "Cashed",
    image: cashed,
    tools: ["Bootstrap","Laravel"],
    description:
      "Cashed adalah sistem kasir berbasis Laravel dengan fitur lengkap, dikembangkan untuk memenuhi tugas project PIBITI 2024.",
    link: "https://github.com/chelvinramadani/Cashed"
  },
  {
    title: "Kayoo.Id",
    image: kayoo,
    tools: ["HTML", "CSS", "Bootstrap","Javascript", "php"],
    description:
      "Website landing page Kayoo UMKM produksi aksesoris dan dekorasi rumah.",
  },
  {
    title: "Desain UI/UX Cleanify",
    image: cleanify,
    tools: ["Figma"],
    description:
      "Desain UI/UX aplikasi penyedia jasa layanan kebersihan Cleanify merupakan hasil final project mata kuliah Desain Antarmuka.",
    link: "https://www.figma.com/proto/BsP6Y76fgF09l2rmLBEg9Y/Cleanify?node-id=78-592&p=f&t=1SslHTknhTNQNrQW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=78%3A592"
  },
  {
    title: "Website landing page IMPHNEN",
    image: imphnen,
    tools: ["React JS", "Tailwind"],
    description:
      "Project iseng, Website landing page komunitas IT di Facebook.",
    link: "https://websitekomunitas-imphnen.vercel.app/"
  },
  {
    title: "Website Animatoon",
    image: animatoon,
    tools: ["React JS", "Tailwind"],
    description:
      "Website untuk menonton berbagai film dan serial animasi populer yang merupakan bagian dari Final Project PIBITI 2025.",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 pt-28 pb-24">
      
      {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-center mx-auto">
            My <span className="text-cyan-400">Projects</span>
        </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;