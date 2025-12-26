"use client";

import { useRef, useState } from "react";
import Heading from "./Heading";
import { CircleUser, Mail, MapPinHouse, Paperclip, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { X, MapPin } from "lucide-react";

export default function ContactSection() {
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);

  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_b72uxul", // ✅ Service ID
        "template_qvvsuhf", // ✅ Template ID
        formRef.current,
        "5orIRZIdfZevmq3Jc" // ✅ Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
          setFileName("");
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);
          alert("❌ Failed to send message");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="relative md:min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-12">
          <button className="flex items-center gap-2 text-xs border border-white/20 rounded-full px-4 py-2 mb-6">
            <CircleUser className="text-(--primary)" size={20} /> CONTACT
          </button>
          <Heading
            as="h2"
            className="text-4xl md:text-6xl md:text-start text-center font-semibold leading-tight pb-10"
          >
            Let’s Work
            <span className="text-(--primary) font-normal"> Together!</span>
          </Heading>
           <div className="flex justify-between align-center">
            <p className="text-lg text-white"></p>
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-sm text-(--primary) cursor-pointer"
            >
              <MapPin size={18} />
              Open Map
            </button>
          </div>
          <div className="flex items-center gap-3 md:justify-start  text-sm mb-4">
            <Phone className="text-(--primary)" size={16} />
            <span>+919056343091</span>
          </div>
          <div className="flex items-center gap-3 md:justify-start  text-sm mb-4">
            <Mail className="text-(--primary)" size={16} />
            <span>sk3645797@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 md:justify-start  text-sm mb-4">
            <MapPinHouse className="text-(--primary)" size={16} />
            <span>Patiala Punjab 140701</span>
          </div>
         
          {/* POPUP */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              {/* BACKDROP */}
              <div
                onClick={() => setOpen(false)}
                className="absolute inset-0 bg-black/70"
              />

              {/* MODAL */}
              <div className="relative z-10 w-[90%] max-w-3xl bg-black rounded-2xl overflow-hidden border border-white/10">
                {/* HEADER */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <h3 className="text-white text-sm font-medium">
                    📍 My Location
                  </h3>
                  <button onClick={() => setOpen(false)}>
                    <X className="text-white" size={18} />
                  </button>
                </div>

                {/* MAP */}
                <div className="w-full h-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110180.69773781118!2d76.32665317093905!3d30.34677746209809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028935a3313df%3A0xd5bc56ad3b90bc7f!2sPatiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1766750881978!5m2!1sen!2sin"
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* LEFT */}
          <div className="space-y-6">
            <Input name="from_name" label="FULL NAME *" />
            <Input name="phone" label="PHONE (OPTIONAL)" />
            <Input name="budget" label="YOUR BUDGET (OPTIONAL)" />
            <Textarea name="message" label="MESSAGE *" />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <Input name="reply_to" label="EMAIL *" />
            <Input name="subject" label="SUBJECT *" />

            <div className="space-y-2">
              <div
                onClick={handleClick}
                className="flex items-center gap-3 text-sm cursor-pointer hover:text-(--primary)"
              >
                <Paperclip className="text-(--primary)" size={20} />
                ADD AN ATTACHMENT
              </div>

              {fileName && (
                <p className="text-xs text-green-400">Selected: {fileName}</p>
              )}

              <input
                ref={fileRef}
                type="file"
                name="attachment"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-10 bg-(--primary) text-black font-semibold px-10 py-4 rounded-full hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* INPUT */
function Input({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label className="text-xs text-(--primary)">{label}</label>
      <input
        name={name}
        required={label.includes("*")}
        className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-(--primary)"
      />
    </div>
  );
}

/* TEXTAREA */
function Textarea({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label className="text-xs text-(--primary)">{label}</label>
      <textarea
        name={name}
        rows={4}
        required
        className="w-full bg-transparent border-b border-white/20 py-3 text-sm resize-none focus:outline-none focus:border-(--primary)"
      />
    </div>
  );
}
