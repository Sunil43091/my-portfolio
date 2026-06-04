import Heading from "./Heading";
import { UsersRound, Mail } from "lucide-react";

const team = [
  {
    name: "Rohit Rana",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1637855195094-992d3d578f42?w=600",
    email: "rohit@gmail.com",
  },
  {
    name: "Arjun Verma",
    role: "UI / UX Designer",
    image: "https://images.unsplash.com/photo-1531539427495-97c44a449837?w=600",
    email: "arjun@gmail.com",
  },
  {
    name: "Abhinav Developer",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1675434303097-210c75b61d3f?q=80&w=685",
    email: "abhinav@gmail.com",
  },
  {
    name: "Shilpa Sharma",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1677078610172-7ff3e0772ba7?w=600",
    email: "shilpa@gmail.com",
  },
  {
    name: "Sushant Verma",
    role: "UI / UX Designer",
    image: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?w=600",
    email: "sushant@gmail.com",
  },
  {
    name: "Jagtar Developer",
    role: "Backend Developer",
    image:
      "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.webp",
    email: "jagtar@gmail.com",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="lg:py-28 py-12 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Badge */}

        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-white/20 text-sm">
          <UsersRound className="text-(--primary)" size={20} />
          TEAM MEMBERS
        </div>

        {/* Heading */}

        <Heading
          as="h2"
          id="team-heading"
          className="text-4xl md:text-6xl font-semibold leading-tight pb-12"
        >
          Meet Our
          <span className="text-(--primary) font-normal">
            {" "}Team
          </span>
        </Heading>

        {/* Team Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <article
              key={member.email}
              className="
              group relative overflow-hidden
              rounded-3xl border border-white/10
              hover:border-(--primary)/50
              transition-all duration-500
              "
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                loading="lazy"
                className="
                h-[360px] w-full object-cover
                transition-transform duration-700
                group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-black via-black/40 to-transparent
                opacity-90
                "
              />

              {/* Content */}

              <div
                className="
                absolute bottom-0 left-0 right-0
                p-6
                translate-y-6
                opacity-0
                group-hover:translate-y-0
                group-hover:opacity-100
                transition-all duration-500
                "
              >
                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-300">
                  {member.role}
                </p>

                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="
                  mt-4 inline-flex items-center gap-2
                  text-(--primary)
                  text-sm
                  "
                >
                  <Mail size={14} />
                  Contact Member
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
