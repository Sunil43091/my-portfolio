import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import Heading from "./Heading";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Founder",
    company: "TechGrow Agency",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "Sunil is an excellent web designer with a strong eye for detail. He delivered our website on time with a clean, modern UI. Communication was smooth and professional throughout the project.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "Creative Hub India",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Working with Sunil was a great experience. His design sense and frontend skills are impressive. He understood our requirements perfectly and delivered beyond expectations.",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Co-Founder",
    company: "StartupX Solutions",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    text:
      "Very professional and reliable designer. Sunil helped us build a responsive and user-friendly website. I would definitely recommend him for any web design project.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const total = testimonials.length;
  const current = testimonials[index];

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="testimonial"
      aria-labelledby="testimonial-heading"
      className="
      relative text-white
      md:min-h-screen
      flex items-center
      py-12
      overflow-hidden
      "
    >
      {/* Background */}

      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wpriverthemes.com/drake/wp-content/uploads/2023/06/testimonial-bg.png')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        
        {/* Badge */}

        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-white/20 text-sm">
          <ShieldCheck className="text-(--primary)" size={20} />
          TESTIMONIALS
        </div>

        {/* Heading */}

        <Heading
          as="h2"
          id="testimonial-heading"
          className="text-4xl md:text-6xl font-semibold leading-tight pb-12"
        >
          Trusted by
          <span className="text-(--primary) font-normal">
            {" "}Clients
          </span>
        </Heading>

        {/* Card */}

        <article
          className="
          relative rounded-3xl
          border border-white/20
          bg-white/5 backdrop-blur-sm
          p-8 md:p-14
          "
        >
          {/* Client */}

          <div className="flex items-center gap-4 mb-8">
            <img
              src={current.image}
              alt={`${current.name} testimonial`}
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold">
                {current.name}
              </h3>

              <p className="text-sm text-gray-300">
                {current.role}
                {" • "}
                <span className="text-(--primary)">
                  {current.company}
                </span>
              </p>
            </div>
          </div>

          {/* Testimonial */}

          <blockquote className="text-lg leading-relaxed text-gray-200">
            “{current.text}”
          </blockquote>

          {/* Controls */}

          <div className="mt-10 flex items-center justify-between">
            <span className="text-xs tracking-widest text-gray-400">
              TESTIMONIAL {index + 1}
            </span>

            <div className="flex items-center gap-4">
              <button
                aria-label="Previous testimonial"
                onClick={prev}
                className="
                w-10 h-10 rounded-full
                border border-white/30
                flex items-center justify-center
                hover:border-(--primary)
                "
              >
                <ChevronLeft size={18} />
              </button>

              <span className="text-sm">
                {index + 1}/{total}
              </span>

              <button
                aria-label="Next testimonial"
                onClick={next}
                className="
                w-10 h-10 rounded-full
                border border-white/30
                flex items-center justify-center
                hover:border-(--primary)
                "
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
