```tsx id="pr7nqa"
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import {
  UserRoundPen,
  X,
} from "lucide-react";

export default function ProfilePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";

      window.addEventListener(
        "keydown",
        handleEscape
      );
    }

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  return (
    <>
      {/* Open Button */}

      <button
        type="button"
        aria-label="Open Profile Card"
        onClick={() => setOpen(true)}
        className="
        fixed bottom-6 left-6
        z-40 block
        rounded-full
        bg-(--primary)
        p-2 text-black
        transition hover:scale-105
        2xl:hidden
        "
      >
        <UserRoundPen />
      </button>

      {/* Modal */}

      {open && (
        <div
          className="
          fixed inset-0 z-50
          flex items-center
          justify-center
          "
          role="dialog"
          aria-modal="true"
          aria-label="Profile Popup"
        >
          {/* Backdrop */}

          <div
            onClick={() => setOpen(false)}
            className="
            absolute inset-0
            bg-black/70
            backdrop-blur-sm
            "
          />

          {/* Content */}

          <div
            className="
            relative z-10
            animate-popup
            "
          >
            {/* Close */}

            <button
              type="button"
              aria-label="Close Popup"
              onClick={() => setOpen(false)}
              className="
              absolute right-3 top-3
              z-20 rounded-full
              bg-black/50 p-2
              "
            >
              <X size={18} />
            </button>

            <ProfileCard />
          </div>
        </div>
      )}
    </>
  );
}
```
