```tsx
import { useRef, useState } from "react";
import Heading from "./Heading";
import {
  CircleUser,
  Mail,
  MapPinHouse,
  Paperclip,
  Phone,
  X,
  MapPin,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_b72uxul",
        "template_qvvsuhf",
        formRef.current,
        "5orIRZIdfZevmq3Jc"
      );

      alert("Message Sent Successfully");

      formRef.current.reset();

      setFileName("");
    } catch (err) {
      console.error(err);

      alert("Failed To Send Message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative md:min-h-screen flex items-center overflow-hidden text-white"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12">

          <button className="mb-6 flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs">
            <CircleUser
              className="text-(--primary)"
              size={20}
            />
            CONTACT
          </button>

          <Heading
            as="h2"
            id="contact-heading"
            className="pb-6 text-4xl md:text-6xl font-semibold leading-tight"
          >
            Let’s Work
            <span className="font-normal text-(--primary)">
              {" "}Together!
            </span>
          </Heading>

          <p className="mb-8 max-w-2xl text-gray-300">
            Looking for a Web Designer or Frontend Developer?
            Contact me for responsive websites, UI/UX,
            React.js, Next.js, Shopify, WordPress,
            and custom frontend projects.
          </p>

          <div className="mb-6 flex justify-between">

            <div />

            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-sm text-(--primary)"
            >
              <MapPin size={18} />
              Open Map
            </button>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <Phone
              className="text-(--primary)"
              size={16}
            />

            <a href="tel:+919056343091">
              +91 90563 43091
            </a>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <Mail
              className="text-(--primary)"
              size={16}
            />

            <a href="mailto:sk3645797@gmail.com">
              sk3645797@gmail.com
            </a>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <MapPinHouse
              className="text-(--primary)"
              size={16}
            />

            <span>
              Patiala, Punjab 140701
            </span>
          </div>

          {/* Modal */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">

              <div
                className="absolute inset-0 bg-black/70"
                onClick={() => setOpen(false)}
              />

              <div className="relative z-10 w-[90%] max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black">

                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

                  <h3 className="text-sm">
                    📍 My Location
                  </h3>

                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close map"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="h-[450px] w-full">
                  <iframe
                    title="Sunil Kumar Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    className="h-full w-full"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid gap-8 md:grid-cols-2"
        >

          <div className="space-y-6">
            <Input
              name="from_name"
              label="FULL NAME *"
              autoComplete="name"
            />

            <Input
              name="phone"
              label="PHONE"
              autoComplete="tel"
            />

            <Input
              name="budget"
              label="YOUR BUDGET"
            />

            <Textarea
              name="message"
              label="MESSAGE *"
            />
          </div>

          <div className="space-y-6">

            <Input
              type="email"
              name="reply_to"
              label="EMAIL *"
              autoComplete="email"
            />

            <Input
              name="subject"
              label="SUBJECT *"
            />

            <div>

              <button
                type="button"
                onClick={handleClick}
                className="flex items-center gap-3 text-sm hover:text-(--primary)"
              >
                <Paperclip
                  className="text-(--primary)"
                  size={20}
                />

                ADD ATTACHMENT
              </button>

              {fileName && (
                <p className="mt-2 text-xs text-green-400">
                  {fileName}
                </p>
              )}

              <input
                ref={fileRef}
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="mt-10 rounded-full bg-(--primary) px-10 py-4 font-semibold text-black transition hover:scale-105 disabled:opacity-50"
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

          </div>

        </form>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="text-xs text-(--primary)">
        {label}
      </label>

      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        aria-label={label}
        required={label.includes("*")}
        className="w-full border-b border-white/20 bg-transparent py-3 text-sm outline-none focus:border-(--primary)"
      />
    </div>
  );
}

function Textarea({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div>
      <label className="text-xs text-(--primary)">
        {label}
      </label>

      <textarea
        name={name}
        rows={4}
        aria-label={label}
        required
        className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-sm outline-none focus:border-(--primary)"
      />
    </div>
  );
}
```
