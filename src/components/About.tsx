import Heading from "./Heading";
import { ShieldUser } from "lucide-react";

export default function About() {
  return (
    <section
      className="relative md:min-h-screen text-white flex items-center md:pt-0 pt-12"
      id="about"
      data-aos="zoom-in"
    >
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ">
        {/* Badge */}
        <div
          className="
            inline-flex items-center gap-2 px-4 py-1 mb-8
            rounded-full border border-white/20
            text-sm text-white
          "
        >
          <ShieldUser className="text-(--primary)" size={20} /> ABOUT ME
        </div>

        {/* Heading */}
        <Heading
          as="h2"
          className="text-4xl md:text-6xl  font-semibold lg:leading-17 leading-10"
        >
          Designing clean & modern <span className="text-(--primary) font-normal"> digital experiences
          </span>
        </Heading>

        {/* Paragraph */}
        <p className="mt-10 max-w-3xl text-white leading-relaxed text-base md:text-lg">
          Hi, I’m <span className="text-(--primary)">Sunil Kumar</span>, a
          passionate Web Designer & Frontend Developer with over{" "}
          <span className="text-(--primary)">4+ years of experience</span> in
          designing and developing visually appealing, user-friendly, and fully
          responsive websites for businesses and individuals.
        </p>

        <p className="mt-6 max-w-3xl text-white leading-relaxed text-base md:text-lg">
          I specialize in modern UI/UX design, responsive layouts, and
          converting designs into pixel-perfect web interfaces using Figma to
          HTML, HTML, CSS, Tailwind CSS, React.js, Next.js, WordPress,{" "}
          <span className="text-(--primary)">Shopify, Webflow, and Wix</span>.
        </p>

        <p className="mt-6 max-w-3xl text-white leading-relaxed text-base md:text-lg">
          I believe great design is not just about looks—it’s about clarity,
          usability, performance, and delivering smooth user experiences that
          help brands grow and stand out online.
        </p>
      </div>
    </section>
  );
}
