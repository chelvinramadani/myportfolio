import { useEffect, useState } from "react";
import profile from "../assets/profil.png";

const roles = [
  "Mahasiswa Informatika",
  "Web Developer",
  "Content Creator",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    if (!deleting && subIndex <= current.length) {
      setTimeout(() => {
        setText(current.substring(0, subIndex));
        setSubIndex(subIndex + 1);
      }, 100);
    } else if (deleting && subIndex >= 0) {
      setTimeout(() => {
        setText(current.substring(0, subIndex));
        setSubIndex(subIndex - 1);
      }, 60);
    } else if (!deleting && subIndex > current.length) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && subIndex < 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }
  }, [subIndex, index, deleting]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        {/* Foto */}
        <img
          src={profile}
          alt="Profile"
          className="w-70 h-70 mx-auto rounded-full object-cover
          border-4 border-cyan-400 shadow-lg mb-6"
        />

        {/* Nama */}
        <h1 className="text-3xl md:text-3xl font-extrabold mb-2">
         <span className="text-cyan-400">Halo, Saya </span> Chelvin Ramadani Yulianto
        </h1>

        {/* Typing Text */}
        <p className="text-lg text-slate-300 mb-8 h-7">
          Saya adalah seorang{" "}
          <span className="text-cyan-400 font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </p>

        {/* Button CV */}
        <a href="https://drive.google.com/drive/folders/1ZFlGwq6SDoZGwqGMqWXsYL3yIjCRsM1s" target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium
          bg-cyan-500 hover:bg-cyan-700 transition">
          Lihat CV
        </a>
      </div>
    </section>
  );
};

export default Home;