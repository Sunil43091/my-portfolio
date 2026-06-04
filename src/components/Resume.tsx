```tsx
import Heading from "./Heading";
import { FileUser } from "lucide-react";

const experience = [
  {
    year: "2025 – Present",
    role: "Frontend Developer",
    company: "Web Perfection Technology",
    description:
      "Building modern web applications using Next.js, React.js, Tailwind CSS, Laravel APIs, and creating scalable, responsive, and performance-focused user interfaces.",
  },

  {
    year: "2023 – Nov 2025",
    role: "Frontend Developer",
    company: "BinaryData Pvt Ltd, Mohali",
    description:
      "Developed responsive websites, landing pages, dashboards, and frontend systems using Tailwind CSS, JavaScript, Shopify, WordPress, and pixel-perfect UI implementation.",
  },

  {
    year: "2022 – April 2023",
    role: "Junior Frontend Developer",
    company: "ARC Web Media Solution",
    description:
      "Started career as a web designer creating responsive layouts, UI designs, HTML, CSS projects, and learning real-world development workflows.",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      data-aos="zoom-in"
      className="
      relative flex items-center
      text-white
      pt-12 md:min-h-screen md:pt-0
      "
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Badge */}

        <div
          className="
          mb-8 inline-flex
          items-center gap-2
          rounded-full
          border border-white/20
          px-4 py-1
          text-sm
          "
        >
          <FileUser
            className="text-(--primary)"
            size={20}
          />

          RESUME
        </div>

        {/* Heading */}

        <Heading
          as="h2"
          id="resume-heading"
          className="
          pb-6 text-4xl
          font-semibold leading-10
          md:text-6xl lg:leading-17
          "
        >
          My
          <span className="font-normal text-(--primary)">
            {" "}Journey
          </span>
        </Heading>

        <p className="mb-12 max-w-2xl text-gray-300">
          Professional journey as a Web Designer and Frontend Developer
          specializing in React.js, Next.js, Tailwind CSS,
          responsive design, UI/UX, and scalable frontend systems.
        </p>

        {/* Timeline */}

        <ol
          className="
          relative space-y-16
          border-l border-white/20
          pl-10
          "
        >

          {experience.map((item, index) => (

            <li
              key={index}
              className="relative"
            >

              <span
                aria-hidden="true"
                className="
                absolute top-2
                -left-[21px]
                h-3 w-3 rounded-full
                bg-(--primary)
                "
              />

              <time className="mb-4 block text-sm">
                {item.year}
              </time>

              <h3 className="text-xl font-medium">
                {item.role}
              </h3>

              <p className="mb-2 text-(--primary)">
                {item.company}
              </p>

              <p className="text-sm leading-relaxed text-white">
                {item.description}
              </p>

            </li>

          ))}

        </ol>
      </div>
    </section>
  );
}
```
