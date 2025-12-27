import Heading from "./Heading";
import { FileUser } from 'lucide-react';

export default function Resume() {
  return (
    <section
      className="relative md:min-h-screen text-white flex items-center md:pt-0 pt-12"
      id="resume"
      data-aos="zoom-in"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Badge */}
        <div
          className="
            inline-flex items-center gap-2 px-4 py-1 mb-8
            rounded-full border border-white/20 text-sm text-white
          "
        >
          <FileUser className="text-(--primary)" size={20}/> RESUME
        </div>

        {/* Heading */}
        <Heading
          as="h2"
          className="text-4xl md:text-6xl  font-semibold lg:leading-17 leading-10 pb-10"
        >
          My
          <span className="text-(--primary) font-normal"> Journey</span>
        </Heading>

        {/* Timeline */}
      <div className="relative pl-10 border-l border-white/20 space-y-16">
  {/* EXPERIENCE 1 */}
  <div className="relative">
    <span className="absolute -left-5.25 top-2 w-3 h-3 rounded-full bg-(--primary)" />
    <p className="text-sm text-white mb-4">2025 – Present</p>
    <h3 className="text-xl font-medium">Frontend Developer</h3>
    <p className="text-gray-500 mb-2">Web Perfection Technology</p>
    <p className="text-white text-sm leading-relaxed">
      Working on modern web applications using Next.js, React, Tailwind CSS,
      Laravel APIs, and creating scalable, high-performance user interfaces.
    </p>
  </div>

  {/* EXPERIENCE 2 */}
  <div className="relative">
    <span className="absolute -left-5.25 top-2 w-3 h-3 rounded-full bg-white/40" />
    <p className="text-sm text-white mb-4">2023 – Nov 2025</p>
    <h3 className="text-xl font-medium">Web Designer / Frontend Developer</h3>
    <p className="text-gray-500 mb-2">BinaryData Pvt Ltd, Mohali</p>
    <p className="text-white text-sm leading-relaxed">
      Designed and developed responsive websites, landing pages, and dashboards.
      Worked with Tailwind CSS, JavaScript, WordPress, Shopify, and UI
      to pixel-perfect frontend conversion.
    </p>
  </div>

  {/* EXPERIENCE 3 */}
  <div className="relative">
    <span className="absolute -left-5.25 top-2 w-3 h-3 rounded-full bg-white/40" />
    <p className="text-sm text-white mb-4">2022 – 30 April 2023</p>
    <h3 className="text-xl font-medium">Junior Web Designer</h3>
    <p className="text-gray-500 mb-2">ARC Web Media Solution</p>
    <p className="text-white text-sm leading-relaxed">
      Started career as a web designer, worked on website layouts, UI design,
      HTML, CSS, and responsive pages while learning real-world project workflows.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}
