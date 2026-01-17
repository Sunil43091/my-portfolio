import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPinHouse,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white lg:py-20 py-10   ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ">
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 border-t border-white/10 pt-10">
          {/* BRAND */}
          <div className="md:text-start text-center">
            <h2 className="text-3xl font-semibold text-(--primary) mb-5">
              <Link to="/">
                <img src="/logo.svg" alt="" className="w-15 h-15 mx-auto md:mx-0" />
              </Link>
            </h2>
            <p className="text-sm leading-relaxed">
              Crafting modern, visually appealing websites with clean UI and
              intuitive user experiences. Focused on smooth animations,
              responsive layouts, and strong performance to deliver high-quality
              digital solutions that help brands grow online.
            </p>
          </div>

          {/* LINKS */}
          <div className="md:text-start text-center">
            <h3 className="text-(--primary) mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/#${item.toLowerCase()}`}
                      className="hover:text-(--primary) transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* CONTACT */}
          <div className="md:text-start text-center">
            <h3 className="text-(--primary) mb-4 font-medium">Get in Touch</h3>

            <div className="flex items-center gap-3 md:justify-start justify-center text-sm mb-4">
              <Phone className="text-(--primary)" size={16} />
              <span>+919056343091</span>
            </div>
            <div className="flex items-center gap-3 md:justify-start justify-center text-sm mb-4">
              <Mail className="text-(--primary)" size={16} />
              <span>sk3645797@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 md:justify-start justify-center text-sm mb-4">
              <MapPinHouse className="text-(--primary)" size={16} />
              <span>Patiala Punjab 140701</span>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 md:justify-start justify-center">
  {[
    { Icon: Github, url: "https://github.com/Sunil43091" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/sunil-kumar-7495601a5/" },
  ].map(({ Icon, url }, i) => (
    <a
      key={i}
      href={url}
      target="_blank" // nava tab vich khulega
      rel="noopener noreferrer" // security
      className="
        w-10 h-10 rounded-full border border-white/20
        flex items-center justify-center
        hover:border-[var(--primary)]
        hover:text-[var(--primary)]
        transition
      "
    >
      <Icon className="text-[var(--primary)]" size={16} />
    </a>
  ))}
</div>

          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
          mt-14 pt-6 border-t border-white/10
          flex flex-col md:flex-row
          items-center justify-between
          text-xs gap-4
        "
        >
          <p>© {new Date().getFullYear()} SP. All rights reserved.</p>

          <p>
            Designed & Built with ❤️ by{" "}
            <span className="text-(--primary)">Sunil Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
