import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `
    relative text-sm font-medium transition-colors
    ${isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"}
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full after:bg-cyan-400
    after:origin-left after:transition-transform after:duration-300
    ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
  `;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="text-lg font-bold text-white">
            My<span className="text-cyan-400">Portfolio</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-b border-white/20">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;