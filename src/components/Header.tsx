```tsx id="hd2p9k"
import { Link } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";
import {
  Settings,
  TextAlignJustify,
} from "lucide-react";

type Props = {
  onMenuClick: () => void;
  onConfigClick: () => void;
};

export default function Header({
  onMenuClick,
  onConfigClick,
}: Props) {
  return (
    <header
      className="bg-white"
      role="banner"
    >
      {/* Logo */}

      <div className="fixed left-20 top-6 z-50">

        <Link
          to="/"
          aria-label="Sunil Kumar Homepage"
        >
          <img
            src="/logo.svg"
            alt="Sunil Kumar Logo"
            className="h-10 w-10"
          />
        </Link>

      </div>

      {/* Mobile Menu Button */}

      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open Navigation Menu"
        className="
        fixed right-7 top-5 z-50
        flex h-14 w-14
        cursor-pointer flex-col
        items-center justify-center gap-1
        rounded-full border border-[#575757]
        bg-[#1f1f1f]
        transition-all duration-300
        hover:border-[#00ff88]
        "
      >
        <TextAlignJustify
          size={20}
          className="text-(--primary)"
        />
      </button>

      {/* Settings */}

      <button
        type="button"
        onClick={onConfigClick}
        aria-label="Open Settings"
        className="
        fixed left-6 top-6 z-50
        flex h-10 w-10
        items-center justify-center
        rounded border border-gray-600
        bg-[#1f1f1f]
        cursor-pointer
        "
      >
        <span className="animate-spin">
          <Settings
            size={20}
            className="text-(--primary)"
          />
        </span>
      </button>

      <nav aria-label="Profile Navigation">
        <ProfilePopup />
      </nav>
    </header>
  );
}
```
