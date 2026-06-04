```tsx id="hr8m4z"
import { Counter } from "./Counter";
import Heading from "./Heading";
import { Hand } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
      relative md:min-h-screen
      flex items-center justify-center
      overflow-hidden text-white
      pt-28 md:pt-0
      "
    >
      <div
        className="
        relative z-10
        mx-auto max-w-4xl
        px-4 sm:px-6
        md:px-8 lg:px-12 xl:px-20
        "
      >
        {/* Badge */}

        <div
          className="
          mb-6 inline-flex items-center
          gap-2 rounded-full
          border border-white/20
          px-4 py-1 text-sm
          "
        >
          <Hand
            className="text-(--primary)"
            size={20}
          />

          HELLO, I'M
        </div>

        {/* Main Heading */}

        <Heading
          as="h1"
          id="hero-heading"
          className="
          text-4xl font-semibold
          md:text-7xl
          "
        >
          Sunil Kumar{" "}

          <span className="font-normal text-(--primary)">
            Web Designer & Frontend Developer
          </span>
        </Heading>

        {/* SEO Paragraph */}

        <p
          className="
          mt-6 max-w-2xl
          leading-relaxed text-white
          "
        >
          I’m a passionate{" "}
          <strong>
            Web Designer and Frontend Developer
          </strong>{" "}
          with 3+ years of experience creating
          responsive websites, modern UI/UX,
          landing pages, portfolio websites,
          and high-performing web applications.

          Specialized in Figma to HTML,
          React.js, Next.js, Tailwind CSS,
          WordPress, Shopify, and responsive
          frontend development focused on
          performance and user experience.
        </p>

        {/* Stats */}

        <div className="mt-5 flex gap-12 md:mt-14">

          <div>

            <Heading
              as="h2"
              className="
              text-4xl font-semibold
              text-(--primary)
              md:text-5xl
              "
            >
              <Counter end={3} />+
            </Heading>

            <span className="sr-only">
              More than 3 years experience
            </span>

            <p className="mt-2 text-sm leading-tight">
              YEARS OF
              <br />
              EXPERIENCE
            </p>

          </div>

          <div>

            <Heading
              as="h2"
              className="
              text-4xl font-semibold
              text-(--primary)
              md:text-5xl
              "
            >
              <Counter end={100} />+
            </Heading>

            <span className="sr-only">
              More than 100 projects completed
            </span>

            <p className="mt-2 text-sm leading-tight">
              PROJECTS COMPLETED
              <br />
              WORLDWIDE
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
```
