"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Lock, X } from "lucide-react";

const OWNER_PIN = "1234"; // 🔴 apna PIN yahan change karo
const STORAGE_KEY = "profile-avatar";

export default function AvatarUpload() {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  // ✅ Load image AFTER page loads (hydration fix)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedImage = localStorage.getItem(STORAGE_KEY);
    if (savedImage) setImage(savedImage);
  }, []);

  // 🔓 Open password modal
  const handleUnlock = () => {
    setShowModal(true);
    setPin("");
    setError("");
  };

  // 🔐 Verify PIN
  const handleSubmit = useCallback(() => {
    if (pin === OWNER_PIN) {
      setShowModal(false);
      fileRef.current?.click();
    } else {
      setError("❌ Wrong password");
    }
  }, [pin]);

  // 🖼️ Image upload handler
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file");
        return;
      }

      // ⚠️ Optional: size check (2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Image must be less than 2MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setImage(base64);
        localStorage.setItem(STORAGE_KEY, base64);
      };
      reader.readAsDataURL(file);
    },
    []
  );

  return (
    <>
      {/* Avatar */}
      <div className="relative mx-auto w-40 h-40 group">
        {image ? (
          <img
            src={image}
            alt="Avatar"
            className="w-full h-full rounded-3xl object-cover border border-white/10"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full rounded-3xl bg-white/10 flex items-center justify-center text-sm text-white/50">
            No Image
          </div>
        )}

        {/* Lock Overlay */}
        <button
          type="button"
          onClick={handleUnlock}
          className="
            absolute inset-0 rounded-3xl
            bg-black/40 opacity-0
            flex items-center justify-center
            group-hover:opacity-100
            transition
          "
          aria-label="Change profile photo"
        >
          <Lock className="text-white" />
        </button>

        {/* Hidden file input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {/* 🔐 PASSWORD MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
          <div className="relative w-[90%] max-w-sm rounded-3xl bg-black border border-white/10 p-6 text-white">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-semibold mb-2 text-center">
              Owner Access
            </h3>

            <p className="text-sm text-white/70 text-center mb-4">
              Enter password to change profile photo
            </p>

            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter password"
              className="
                w-full rounded-xl bg-black border border-white/20
                px-4 py-3 text-white outline-none
                focus:border-white
              "
            />

            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="
                mt-5 w-full rounded-full bg-white
                py-3 text-black font-semibold
                hover:scale-[1.03] transition
              "
            >
              Unlock
            </button>
          </div>
        </div>
      )}
    </>
  );
}
