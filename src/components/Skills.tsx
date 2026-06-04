import { Figma, Brain } from "lucide-react";

import {
  SiNextdotjs,
  SiReact,
  SiWebflow,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiAntdesign,
  SiShopify,
  SiWix,
} from "react-icons/si";

import Heading from "./Heading";

const skills = [
  {
    name: "Figma",
    percent: "92%",
    icon: <Figma size={34} className="text-(--primary)" />,
  },
  {
    name: "Next.js",
    percent: "85%",
    icon: <SiNextdotjs size={34} className="text-(--primary)" />,
  },
  {
    name: "React.js",
    percent: "90%",
    icon: <SiReact size={34} className="text-(--primary)" />,
  },
  {
    name: "Webflow",
    percent: "80%",
    icon: <SiWebflow size={34} className="text-(--primary)" />,
  },
  {
    name: "WordPress",
    percent: "86%",
    icon: <SiWordpress size={34} className="text-(--primary)" />,
  },
  {
    name: "HTML5",
    percent: "90%",
    icon: <SiHtml5 size={34} className="text-(--primary)" />,
  },
  {
    name: "CSS3",
    percent: "88%",
    icon: <SiCss3 size={34} className="text-(--primary)" />,
  },
  {
    name: "Bootstrap",
    percent: "86%",
    icon: <SiBootstrap size={34} className="text-(--primary)" />,
  },
  {
    name: "Tailwind CSS",
    percent: "95%",
    icon: <SiTailwindcss size={34} className="text-(--primary)" />,
  },
  {
    name: "Ant Design",
    percent: "75%",
    icon: <SiAntdesign size={34} className="text-(--primary)" />,
  },
  {
    name: "Shopify",
    percent: "86%",
    icon: <SiShopify size={34} className="text-(--primary)" />,
  },
  {
    name: "Wix",
    percent: "70%",
    icon: <SiWix size={34} className="text-(--primary)" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skill"
      aria-labelledby="skills-heading"
      className="relative text-white md:min-h-screen md:py-24 pt-12"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Badge */}

        <div
          className="
          inline-flex items-center gap-2
          px-4 py-1 mb-8
          rounded-full border border-white/20
          text-sm
          "
        >
          <Brain className="text-(--primary)" size={20} />
          MY SKILLS
        </div>

        {/* Heading */}

        <Heading
          as="h2"
          id="skills-heading"
          className="
          text-4xl md:text-6xl
          font-semibold
          leading-tight
          pb-12
          "
        >
          My
          <span className="text-(--primary) font-normal">
            {" "}Advantages
          </span>
        </Heading>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="flex flex-col items-center text-center"
            >
              <div
                aria-label={`${skill.name} skill level ${skill.percent}`}
                className="
                w-full sm:w-44
                min-h-[170px]
                rounded-3xl
                border border-white/15
                flex flex-col items-center justify-center
                px-4 py-6
                transition-all duration-300
                hover:border-(--primary)
                hover:-translate-y-1
                hover:bg-white/5
                "
              >
                <div className="mb-4 transition-transform duration-300 hover:scale-110">
                  {skill.icon}
                </div>

                <span className="text-2xl font-semibold text-(--primary)">
                  {skill.percent}
                </span>
              </div>

              <h3 className="mt-4 text-sm font-medium">
                {skill.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
