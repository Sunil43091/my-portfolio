import Heading from "./Heading";
import { ShieldUser } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      data-aos="zoom-in"
      className="relative md:min-h-screen text-white flex items-center md:pt-0 pt-12"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-white/20 text-sm text-white">
          <ShieldUser className="text-(--primary)" size={20} />
          ABOUT ME
        </div>

        {/* SEO Heading */}
        <Heading
          as="h2"
          id="about-heading"
          className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10"
        >
          Web Designer & Frontend Developer Creating
          <span className="text-(--primary) font-normal">
            {" "}Modern Digital Experiences
          </span>
        </Heading>

        {/* Paragraphs */}
        <p className="mt-10 max-w-3xl leading-relaxed text-base md:text-lg">
          Hi, I’m <span className="text-(--primary)">Sunil Kumar</span>, a
          passionate <strong>Web Designer and Frontend Developer</strong> with
          over <span className="text-(--primary)">3+ years of experience</span>
          creating responsive websites, modern interfaces, and user-friendly
          digital products for businesses, startups, and individuals.
        </p>

        <p className="mt-6 max-w-3xl leading-relaxed text-base md:text-lg">
          I specialize in <strong>UI/UX Design</strong>, responsive web design,
          Figma to HTML conversion, landing page development, and building
          fast-loading websites using HTML, CSS, Tailwind CSS, React.js,
          Next.js, WordPress, Shopify, Webflow, and Wix.
        </p>

        <p className="mt-6 max-w-3xl leading-relaxed text-base md:text-lg">
          My focus is on creating pixel-perfect, SEO-friendly, and
          performance-optimized websites that improve user experience, boost
          engagement, and help brands establish a strong online presence.
        </p>

        <p className="mt-6 max-w-3xl leading-relaxed text-base md:text-lg">
          Whether you need a portfolio website, business website, landing page,
          eCommerce store, or custom frontend solution, I create scalable and
          visually engaging web experiences tailored to business goals.
        </p>
      </div>
    </section>
  );
}
