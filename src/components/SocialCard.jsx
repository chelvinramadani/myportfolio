const SocialCard = ({ icon: Icon, name, username, url }) => {
  return (
    <a
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
        <Icon className="text-cyan-400" size={22} />
      </div>

      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-slate-400">{username}</p>
      </div>
    </a>
  );
};

export default SocialCard;