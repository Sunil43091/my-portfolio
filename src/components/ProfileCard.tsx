import { useEffect, useState } from "react";
import {  Github, Download, Linkedin } from "lucide-react";

export default function ProfileCard() {
  const [isActive, setIsActive] = useState(false);

  // Check IST active time
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const istTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      const currentMinutes = istTime.getHours() * 60 + istTime.getMinutes();

      const start = 9 * 60 + 30; // 9:30 AM
      const end = 18 * 60 + 30; // 6:30 PM

      setIsActive(currentMinutes >= start && currentMinutes <= end);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        w-[320px] rounded-4xl border border-white/10
        bg-black/70 backdrop-blur-xl p-6 text-center text-white
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2">
          {/* Status Dot */}
          <span
            className={`h-3 w-3 rounded-full ${
              isActive ? "bg-(--primary)" : "bg-gray-500"
            }`}
          />

          <h2 className="text-2xl font-semibold">
            Sunil <span className="text-sm align-top">©</span>
          </h2>
        </div>

        <p className="text-sm text-white text-right">
          Web Designer
          <br />
          <span className="text-xs">
            {isActive ? "Active (9:30 – 6:30 IST)" : "Offline"}
          </span>
        </p>
      </div>
   <div className="flex justify-center items-center">
  <img
    src="/sunilkumar.jpeg"
    alt="Sunil Kumar"
    className="w-40 h-40 rounded-3xl object-cover grayscale mb-6"
  />
</div>


      {/* Info */}
      <p className="text-lg">sk3645797@gmail.com</p>
      <p className="text-white mt-1">Based in India 🇮🇳</p>

      <p className="text-xs text-(--primary) mt-4">
        © {new Date().getFullYear()} Sunil Kumar
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">
  {[
    { Icon: Linkedin, url: "https://www.linkedin.com/in/sunil-kumar-7495601a5/" },
    { Icon: Github, url: "https://github.com/Sunil43091" }
  ].map(({ Icon, url }, i) => (
    <a
      key={i}
      href={url}
      target="_blank"           // link nava tab vich khulega
      rel="noopener noreferrer" // security
      className="w-10 h-10 rounded-full border border-white/20
                 flex items-center justify-center
                 hover:border-[var(--primary)] hover:text-[var(--primary)]
                 transition"
    >
      <Icon size={18} />
    </a>
  ))}
</div>


      {/* Resume Button */}
      <a
        href="/resume/Sunil Kumar Designer.pdf"
        download
        className="
    mt-4 w-full rounded-full border border-(--primary)
    py-3 text-(--primary)font-semibold
    flex items-center justify-center gap-2
    hover:bg-(--primary)/10 transition
  "
      >
        <Download size={18} /> DOWNLOAD RESUME
      </a>
    </div>
  );
}
