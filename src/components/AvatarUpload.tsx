"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { Lock, X } from "lucide-react";

const OWNER_PIN = process.env.NEXT_PUBLIC_OWNER_PIN || "";

export default function AvatarUpload() {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("profile-avatar");
    if (saved) setImage(saved);

    setMounted(true);
  }, []);

  const handleUnlock = () => {
    setPin("");
    setError("");
    setShowModal(true);
  };

  const handleSubmit = useCallback(() => {
    if (pin === OWNER_PIN) {
      setShowModal(false);
      fileRef.current?.click();
    } else {
      setError("Wrong password");
    }
  }, [pin]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert("Upload image only");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        alert("Max file size 2MB");
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const base64 = reader.result as string;

        setImage(base64);

        localStorage.setItem("profile-avatar", base64);
      };

      reader.readAsDataURL(file);
    },
    []
  );

  if (!mounted) return null;

  return (
    <>
      <div className="relative mx-auto w-40 h-40 group">
        <Image
          src={image || "https://i.pravatar.cc/300"}
          alt="Sunil Kumar Profile Avatar"
          width={160}
          height={160}
          priority
          draggable={false}
          className="rounded-3xl border border-white/10 object-cover w-full h-full"
        />

        <button
          aria-label="Upload Avatar"
          onClick={handleUnlock}
          className="absolute inset-0 rounded-3xl bg-black/40 opacity-0
          group-hover:opacity-100 transition flex items-center justify-center"
        >
          <Lock className="text-white" />
        </button>

        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
          <div className="relative w-[90%] max-w-sm rounded-3xl border border-white/10 bg-black p-6 text-white">

            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4"
            >
              <X size={18} />
            </button>

            <h3 className="mb-4 text-center text-xl font-semibold">
              Owner Access
            </h3>

            <input
              type="password"
              value={pin}
              placeholder="Enter password"
              onChange={(e) => setPin(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
              className="w-full rounded-xl border border-white/20
              bg-black px-4 py-3 outline-none"
            />

            {error && (
              <p className="mt-2 text-center text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="mt-5 w-full rounded-full bg-white py-3
              font-semibold text-black"
            >
              Unlock
            </button>
          </div>
        </div>
      )}
    </>
  );
}
