import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 10;

      if (value >= 100) {
        value = 100;

        clearInterval(interval);

        setProgress(100);

        setFade(true);

        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 500);

        return;
      }

      setProgress(Math.floor(value));
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Website Loading"
      className={`
      fixed inset-0 z-[9999]
      flex flex-col items-center justify-center
      bg-[#1f3a4a]
      transition-opacity duration-500
      ${fade ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* Loading Text */}

      <p
        className="
        mb-4 text-sm
        tracking-[0.3em]
        uppercase
        text-(--primary)
        "
      >
        Loading...
      </p>

      {/* Progress */}

      <div
        className="
        relative h-5
        w-[85%] max-w-[320px]
        overflow-hidden
        rounded-full
        border-2 border-(--primary)
        "
      >
        <div
          className="
          absolute left-0 top-0
          h-full rounded-full
          bg-(--primary)
          transition-all duration-300
          "
          style={{
            width: `${progress}%`,
          }}
        >
          {/* stripes */}

          <div
            className="
            h-full w-full
            opacity-40
            "
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 4px, transparent 4px, transparent 8px)",
            }}
          />
        </div>
      </div>

      <span className="mt-4 text-xs text-gray-300">
        {progress}%
      </span>
    </div>
  );
}
