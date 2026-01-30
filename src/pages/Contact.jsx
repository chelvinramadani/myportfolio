import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/chelvinramadani",
    username: "@chelvinramadani",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/chelvin-ramadani-yulianto-3ab462286/",
    username: "Chelvin Ramadani Yulianto",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/username",
    username: "@chelvin_ramadani",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:chelvinramadani@gmail.com",
    username: "chelvinramadani@gmail.com",
  },
];

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto sm:px-6 lg:px-0 pt-28 pb-24 text-center">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Get in <span className="text-cyan-400">Touch</span>
      </h1>

      <p className="text-slate-400 mb-12">
        Hubungi saya melalui media sosial berikut:
      </p>

      {/* Social Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {socialLinks.map(({ name, icon: Icon, url, username }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-4 p-5
              bg-white/10 backdrop-blur-xl
              border border-white/20
              rounded-2xl
              transition hover:-translate-y-1 hover:bg-white/15
            "
          >
            <div className="p-3 rounded-xl bg-white/10">
              <Icon size={22} className="text-cyan-400" />
            </div>

            <div className="text-left">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-slate-400">{username}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;