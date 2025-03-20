import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Artisan Brew Co.",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-4xl lg:text-8xl md:text-7xl">Selected Works</h2>
        <div className="lg:mt-20 md:mt-16 mt-10">
          {projects.map((project, index) => (
            <a
              href="#"
              key={index}
              className="flex flex-col border-dotted border-stone-400 border-t group/project last:border-b lg:py-10 md:py-8 py-6 relative"
            >
              <div className="bg-stone-300 h-0 w-full absolute bottom-0 duration-700 group-hover/project:h-full left-0 transition-all"></div>
              <div className="relative">
                <div className="aspect-video md:hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="object-cover size-full"
                  />
                </div>
                <div className="flex justify-between items-center md:[grid-template-columns:1fr_300px_max-content] md:gap-8 md:grid md:mt-0 mt-8">
                  <div className="duration-700 lg:group-hover/project:pl-8 transition-all">
                    <h3 className="text-2xl lg:text-4xl md:text-3xl">
                      {project.name}
                    </h3>
                  </div>
                  <div className="relative">
                    <div className="w-full -translate-y-1/2 absolute aspect-video duration-500 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 opacity-0 scale-90 top-1/2 transition-all z-10">
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="object-cover size-full"
                      />
                    </div>
                  </div>
                  <div className="lg:group-hover/project:pr-8 duration-700 transition-all">
                    <div className="overflow-hidden size-6">
                      <div className="flex h-6 w-12 duration-300 group-hover/project:-translate-x-1/2 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
