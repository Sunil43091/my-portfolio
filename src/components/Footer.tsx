```tsx id="ft9m2a"
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
    <footer
      className="py-10 lg:py-20 text-white"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">

          {/* Brand */}
          <div className="text-center md:text-start">

            <Link
              to="/"
              aria-label="Sunil Kumar Homepage"
            >
              <img
                src="/logo.svg"
                alt="Sunil Kumar Logo"
                loading="lazy"
                className="mx-auto h-15 w-15 md:mx-0"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed">
              Professional Web Designer & Frontend Developer
              creating responsive websites, modern UI/UX,
              landing pages, portfolio websites, and
              performance-focused digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer Navigation"
            className="text-center md:text-start"
          >
            <h3 className="mb-4 font-medium text-(--primary)">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">

              {[
                "Home",
                "About",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="transition hover:text-(--primary)"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </nav>

          {/* Contact */}
          <div className="text-center md:text-start">

            <h3 className="mb-4 font-medium text-(--primary)">
              Get in Touch
            </h3>

            <div className="mb-4 flex items-center justify-center gap-3 text-sm md:justify-start">
              <Phone
                size={16}
                className="text-(--primary)"
              />

              <a href="tel:+919056343091">
                +91 90563 43091
              </a>
            </div>

            <div className="mb-4 flex items-center justify-center gap-3 text-sm md:justify-start">
              <Mail
                size={16}
                className="text-(--primary)"
              />

              <a href="mailto:sk3645797@gmail.com">
                sk3645797@gmail.com
              </a>
            </div>

            <div className="mb-4 flex items-center justify-center gap-3 text-sm md:justify-start">
              <MapPinHouse
                size={16}
                className="text-(--primary)"
              />

              <span>
                Patiala, Punjab 140701
              </span>
            </div>

            {/* Social */}
            <div className="flex justify-center gap-4 md:justify-start">

              {[
                {
                  Icon: Github,
                  url: "https://github.com/Sunil43091",
                  label: "Github Profile",
                },
                {
                  Icon: Linkedin,
                  url: "https://www.linkedin.com/in/sunil-kumar-7495601a5/",
                  label: "LinkedIn Profile",
                },
              ].map(({ Icon, url, label }, i) => (

                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  transition
                  hover:border-[var(--primary)]
                  hover:text-[var(--primary)]
                  "
                >
                  <Icon
                    size={16}
                    className="text-[var(--primary)]"
                  />
                </a>

              ))}

            </div>

          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          mt-14 flex flex-col items-center
          justify-between gap-4 border-t
          border-white/10 pt-6 text-xs
          md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} Sunil Kumar.
            All rights reserved.
          </p>

          <p>
            Designed & Built with ❤️  vdaafafafafafafby{" "}
            <span className="text-(--primary)">
              Sunil Kumar
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
```
