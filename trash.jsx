<div className="p-5 flex items-center justify-center">
  <h2 className="text-[20px] font-bold tracking-[0.15em]">
    {"SYSTEM PROJECTS".split("").map((char, i) => (
      <span
        key={i}
        className="inline-block"
        style={{
          animation: `pulseColor 1.2s ease-in-out infinite`,
          animationDelay: `${i * 0.12}s`,
          color: "#a78a25ff", // default yellow-ish
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </h2>

  <style>{`
    @keyframes pulseColor {
      0%, 100% {
        transform: scale(1);
        color: #a78a25ff; /* yellow */
      }
      50% {
        transform: scale(1.3);
        color: #ffffff; /* white */
      }
    }
  `}</style>
</div>
