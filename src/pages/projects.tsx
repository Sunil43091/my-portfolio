import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

// Add link property for each project
const allProjects = [
  {
    title: "E-commerce Website",
    tech: "Next.js · Tailwind · Shopify",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    link: "https://seva-love.netlify.app/",
  },
  {
    title: "Corporate Business Website",
    tech: "React · Tailwind · UI Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "https://luxury-eye-wear.netlify.app/",
  },
  {
    title: "Personal Portfolio",
    tech: "Next.js · Animation · SEO",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    link: "https://cooks-site.netlify.app/",
  },
  {
    title: "Landing Page Design",
    tech: "HTML · CSS · Tailwind",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    link: "https://sunilecommerce.netlify.app/",
  },
  {
    title: "WordPress Business Site",
    tech: "WordPress · Elementor · UI",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "https://sunilkumar123.netlify.app/",
  },
  {
    title: "Admin Dashboard UI",
    tech: "React · Tailwind · Charts",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    link: "hhttps://rocketcarsell.com/",
  },
  {
    title: "Shopify Store Design",
    tech: "Shopify · Liquid · CSS",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    link: "https://connectlegal.ae/",
  },
  {
    title: "Marketing Website",
    tech: "Next.js · Framer Motion",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    link: "https://www.thetalentpoint.ae/",
  },
  {
    title: "Agency Website",
    tech: "React · Tailwind · UX",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    link: "https://imperialhealthclinic.com/en",
  },
  {
    title: "SaaS Landing Page",
    tech: "Next.js · Tailwind · UI",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    link: "https://viatour-nextjs.vercel.app/",
  },
  {
    title: "Blog Website",
    tech: "Next.js · Markdown · SEO",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    link: "https://viatour-nextjs.vercel.app/home-2",
  },
  {
    title: "Startup Website",
    tech: "React · Tailwind · Responsive",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
    link: "https://martex-tailwindcss.ibthemespro.com/demo-1.html",
  },
];

const PER_PAGE = 6;

export default function ProjectsPage() {
  const [visible, setVisible] = useState(PER_PAGE);

  const handleSeeMore = () => {
    setVisible((prev) => prev + PER_PAGE);
  };

  return (
    <section
      className="lg:py-28 py-8 md:mt-0 mt-20 text-white"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Heading & Back Button */}
        <div className="flex items-center justify-between md:pb-0 pb-10">
          <div
            className="
              w-12 h-12 rounded-full
              flex items-center justify-center
              bg-(--primary) text-black
              cursor-pointer
            "
          >
            <Link to="/">
              <ArrowLeftIcon size={20} />
            </Link>
          </div>
          <Heading
            as="h2"
            className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 md:pb-10"
          >
            All
            <span className="text-(--primary) font-normal"> Projects</span>
          </Heading>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.slice(0, visible).map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative rounded-2xl overflow-hidden
                border border-white/15
                transition-all duration-500 ease-out
                hover:border-(--primary)/50
                hover:-translate-y-2
              "
            >
              {/* Image */}
              <img
                src={p.image}
                className="
                  h-56 w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
                alt={p.title}
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 bg-black/0
                  transition-all duration-500
                  group-hover:bg-black/30
                "
              />

              {/* Content */}
              {/* <div className="relative p-5">
                <h3 className="text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-white">{p.tech}</p>
              </div> */}
            </a>
          ))}
        </div>

        {/* See More Button */}
        {visible < allProjects.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={handleSeeMore}
              className="
                px-8 py-3 rounded-full
                border border-white/20
                text-sm tracking-wide
                transition-all duration-300
                hover:border-(--primary)
                hover:text-(--primary)
              "
            >
              See More Projects →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
