import {
  Code,
  Layout,
  Rocket,
  Toolbox,
} from "lucide-react";

import Heading from "./Heading";

const services = [
  {
    title: "Website Design",
    desc:
      "Designing modern, responsive, and user-friendly website interfaces with strong UI/UX principles using Figma and modern design systems.",

    projects: "24+ Projects",

    icon: Layout,
  },

  {
    title: "Frontend Development",

    desc:
      "Building fast, scalable, and responsive websites using React.js, Next.js, Tailwind CSS, JavaScript, and modern frontend technologies.",

    projects: "120+ Projects",

    icon: Code,
  },

  {
    title: "SEO & Performance",

    desc:
      "Improving website visibility with SEO optimization, performance enhancements, technical SEO, and faster user experiences.",

    projects: "15+ Projects",

    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="
      relative text-white
      pt-12 md:min-h-screen
      md:py-24 md:pt-0
      "
    >
      <div className="absolute inset-0" />

      <div
        className="
        relative z-10
        mx-auto max-w-4xl
        px-4 sm:px-6
        md:px-8 lg:px-12
        "
      >
        {/* Badge */}

        <div
          className="
          mt-10 mb-8
          inline-flex items-center
          gap-2 rounded-full
          border border-white/20
          px-4 py-1 text-sm
          "
        >
          <Toolbox
            size={20}
            className="text-(--primary)"
          />

          SERVICES
        </div>

        {/* Heading */}

        <Heading
          as="h2"
          id="services-heading"
          className="
          pb-10 text-4xl
          font-semibold leading-10
          md:text-6xl lg:leading-17
          "
        >
          My
          <span className="font-normal text-(--primary)">
            {" "}Specializations
          </span>
        </Heading>

        {/* Service Cards */}

        <div className="space-y-6">

          {services.map(
            (service) => {
              const Icon =
                service.icon;

              return (
                <article
                  key={service.title}
                  className="
                  flex flex-col
                  justify-between gap-6
                  rounded-2xl
                  border border-white/15
                  p-8 transition
                  hover:border-(--primary)/40
                  md:flex-row
                  md:items-start
                  md:p-10
                  "
                >
                  {/* Content */}

                  <div>

                    <h3 className="mb-3 text-2xl font-medium">
                      {service.title}
                    </h3>

                    <p className="mb-8 max-w-xl text-gray-300">
                      {service.desc}
                    </p>

                    <span className="text-sm text-white/80">
                      {service.projects}
                    </span>

                  </div>

                  {/* Icon */}

                  <div
                    aria-hidden="true"
                    className="text-(--primary)"
                  >
                    <Icon size={28} />
                  </div>

                </article>
              );
            }
          )}

        </div>
      </div>
    </section>
  );
}
