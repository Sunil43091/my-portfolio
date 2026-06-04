import {
  Home,
  User,
  Briefcase,
  Layers,
  UsersRound,
  Grid,
  MessageSquare,
  MessageCircle,
  FolderKanban,
  Mail,
  Linkedin,
  Github,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import ResumeButton from "./ResumeButton";

const menu = [
  { icon: Home, id: "home", label: "Home" },
  { icon: User, id: "about", label: "About" },
  { icon: Briefcase, id: "resume", label: "Resume" },
  { icon: Layers, id: "services", label: "Services" },
  { icon: Grid, id: "skill", label: "Skills" },
  { icon: MessageCircle, id: "testimonial", label: "Testimonial" },
  { icon: FolderKanban, id: "projects", label: "Projects" },
  { icon: UsersRound, id: "team", label: "Team" },
  { icon: MessageSquare, id: "contact", label: "Contact" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function RightMenuSide({
  open,
  onClose,
}: Props) {

  useEffect(() => {
    const handleEscape = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow =
        "hidden";

      window.addEventListener(
        "keydown",
        handleEscape
      );
    }

    return () => {
      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open, onClose]);

  const scrollToSection = (
    id: string
  ) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    onClose();
  };

  return (
    <>
      {/* Backdrop */}

      {open && (
        <div
          aria-hidden="true"
          onClick={onClose}
          className="
          fixed inset-0 z-40
          bg-black/50
          "
        />
      )}

      {/* Sidebar */}

      <nav
        aria-label="Main Navigation"
        className={`
        fixed top-0 right-0
        z-50 h-full w-72
        border-l border-white/15
        bg-black text-white
        transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }
        `}
      >
        {/* Logo */}

        <Link
          to="/"
          className="
          absolute left-6 top-4
          "
        >
          <img
            src="/logo.svg"
            alt="Sunil Kumar Logo"
            className="h-10 w-10"
          />
        </Link>

        {/* Close */}

        <button
          type="button"
          aria-label="Close Menu"
          onClick={onClose}
          className="
          absolute right-4 top-4
          flex h-10 w-10
          items-center justify-center
          rounded-full
          border border-[#575757]
          bg-[#1f1f1f]
          hover:border-(--primary)
          "
        >
          <X size={18} />
        </button>

        {/* Links */}

        <ul
          className="
          mt-24 max-h-[80vh]
          overflow-y-auto
          border-t border-white/15
          pr-2
          "
        >
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.id}
                className="
                border-b border-white/15
                px-3 py-4
                "
              >
                <button
                  type="button"
                  aria-label={item.label}
                  onClick={() =>
                    scrollToSection(
                      item.id
                    )
                  }
                  className="
                  group flex w-full
                  items-center gap-4
                  text-left text-lg
                  hover:text-(--primary)
                  "
                >
                  <Icon
                    size={18}
                    className="text-(--primary)"
                  />

                  {item.label}
                </button>
              </li>
            );
          })}

          {/* CTA */}

          <div className="px-3">

            <a
              href="mailto:sk3645797@gmail.com?subject=Hiring Inquiry"
              className="
              mt-8 flex w-full
              items-center justify-center
              gap-2 rounded-full
              bg-(--primary)
              py-3 font-semibold
              text-black
              "
            >
              <Mail size={18} />
              HIRE ME
            </a>

            <ResumeButton />

          </div>

          {/* Social */}

          <div className="mt-6 flex justify-center gap-4">

            {[
              {
                Icon: Linkedin,
                url: "https://www.linkedin.com/in/sunil-kumar-7495601a5/",
                label: "LinkedIn",
              },

              {
                Icon: Github,
                url: "https://github.com/Sunil43091",
                label: "Github",
              },
            ].map(
              (
                item,
                index
              ) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  transition
                  hover:border-(--primary)
                  hover:text-(--primary)
                  "
                >
                  <item.Icon
                    size={18}
                  />
                </a>
              )
            )}

          </div>

        </ul>
      </nav>
    </>
  );
}
