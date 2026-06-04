```tsx
import { useEffect, useState } from "react";
import {
  Github,
  Download,
  Linkedin,
  Mail,
} from "lucide-react";

export default function ProfileCard() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();

      const ist = new Date(
        now.toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      );

      const minutes =
        ist.getHours() * 60 + ist.getMinutes();

      const start = 9 * 60 + 30;
      const end = 18 * 60 + 30;

      setIsActive(
        minutes >= start && minutes <= end
      );
    };

    checkStatus();

    const interval = setInterval(
      checkStatus,
      60000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <article
      className="
      w-[320px]
      rounded-4xl
      border border-white/10
      bg-black/70
      p-6
      text-center text-white
      backdrop-blur-xl
      "
      aria-label="Profile Card"
    >
      {/* Header */}

      <div className="mb-6 flex items-start justify-between">

        <div className="flex items-center gap-2">

          <span
            aria-label={
              isActive
                ? "Currently Active"
                : "Currently Offline"
            }
            className={`
            h-3 w-3 rounded-full
            ${
              isActive
                ? "bg-(--primary)"
                : "bg-gray-500"
            }
            `}
          />

          <h2 className="text-2xl font-semibold">
            Sunil
            <span className="align-top text-sm">
              ©
            </span>
          </h2>
        </div>

        <div className="text-right">

          <p className="text-sm">
            Web Designer
          </p>

          <span className="text-xs">
            {isActive
              ? "Active (9:30–6:30 IST)"
              : "Offline"}
          </span>

        </div>

      </div>

      {/* Profile */}

      <div className="flex justify-center">

        <img
          src="/sunilkumar.jpeg"
          alt="Sunil Kumar Web Designer"
          loading="lazy"
          draggable={false}
          className="
          mb-6 h-40 w-40
          rounded-3xl
          object-cover
          grayscale
          "
        />

      </div>

      {/* Info */}

      <a
        href="mailto:sk3645797@gmail.com"
        className="
        flex items-center
        justify-center gap-2
        text-lg
        "
      >
        <Mail size={16} />
        sk3645797@gmail.com
      </a>

      <p className="mt-1">
        Based in India 🇮🇳
      </p>

      <p className="mt-4 text-xs text-(--primary)">
        © {new Date().getFullYear()} Sunil Kumar
      </p>

      {/* Social */}

      <div className="mt-6 flex justify-center gap-4">

        {[
          {
            Icon: Linkedin,
            url: "https://www.linkedin.com/in/sunil-kumar-7495601a5/",
            label: "LinkedIn Profile",
          },

          {
            Icon: Github,
            url: "https://github.com/Sunil43091",
            label: "Github Profile",
          },
        ].map(
          ({ Icon, url, label }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-white/20
              transition
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
              "
            >
              <Icon size={18} />
            </a>
          )
        )}

      </div>

      {/* Resume */}

      <a
        href="/resume/Sunil Kumar Designer.pdf"
        download
        aria-label="Download Resume"
        className="
        mt-6 flex w-full
        items-center justify-center
        gap-2 rounded-full
        border border-(--primary)
        py-3 font-semibold
        text-(--primary)
        transition
        hover:bg-(--primary)/10
        "
      >
        <Download size={18} />
        DOWNLOAD RESUME
      </a>
    </article>
  );
}
```
