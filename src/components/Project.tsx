```tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import { FolderOpenDot } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    tech: "Next.js · Tailwind CSS · Shopify",
    description:
      "Responsive ecommerce platform with optimized UI and performance.",
    image:
      "https://images.unsplash.com/photo-1579389083175-247ef703006f?w=600&auto=format&fit=crop&q=60",
  },

  {
    title: "Corporate Landing Page",
    tech: "React · Tailwind CSS · UI/UX",
    description:
      "Modern business landing page with responsive layouts.",
    image:
      "https://images.unsplash.com/photo-1579389083123-53a622ebaec2?w=600&auto=format&fit=crop&q=60",
  },

  {
    title: "Portfolio Website",
    tech: "Next.js · Animation · SEO",
    description:
      "Personal portfolio optimized for performance and SEO.",
    image:
      "https://images.unsplash.com/photo-1759844197486-5b3612c7d534?w=600&auto=format&fit=crop&q=60",
  },

  {
    title: "Dashboard UI",
    tech: "Next.js · Charts · Admin Panel",
    description:
      "Interactive admin dashboard with analytics UI.",
    image:
      "https://media.istockphoto.com/id/1144645520/photo/busy-call-centre-in-operation.webp",
  },
];

export default function ProjectSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-8 text-white lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Badge */}

        <div
          className="
          mb-8 inline-flex items-center
          gap-2 rounded-full
          border border-white/20
          px-4 py-1 text-xs
          "
        >
          <FolderOpenDot
            className="text-(--primary)"
            size={20}
          />

          PROJECTS
        </div>

        {/* Heading */}

        <Heading
          as="h2"
          id="projects-heading"
          className="
          pb-10 text-4xl
          font-semibold leading-10
          md:text-6xl lg:leading-17
          "
        >
          Selected
          <span className="font-normal text-(--primary)">
            {" "}Works
          </span>
        </Heading>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Project List */}

          <div className="space-y-10">

            {projects.slice(0, 3).map((project, i) => (

              <button
                key={project.title}
                type="button"
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`
                w-full border-b pb-6
                text-left transition-all
                ${
                  active === i
                    ? "border-(--primary)"
                    : "border-white/20 hover:border-white/50"
                }
                `}
              >
                <h3 className="mb-1 text-2xl font-light">
                  {project.title}
                </h3>

                <p className="text-sm">
                  {project.tech}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  {project.description}
                </p>

              </button>

            ))}

            <Link
              to="/projects"
              className="
              inline-flex items-center gap-2
              border-b border-white/30
              text-sm tracking-wide
              hover:border-(--primary)
              "
            >
              View All Projects →
            </Link>

          </div>

          {/* Image */}

          <div className="relative">

            <img
              key={active}
              src={projects[active].image}
              alt={`${projects[active].title} project preview`}
              loading="lazy"
              draggable={false}
              className="
              rounded-3xl border
              border-white/20
              transition-all duration-500
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
}
```
