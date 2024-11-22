"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Define the type for project data
interface Project {
  id: number;
  // title: string;
  // description?: string;
  image: string;
  tag: string[];
  // gitUrl?: string;
  previewUrl: string;
}

// Define the type for ProjectsSection component state
interface ProjectsSectionProps {
  projectsData: Project[];
}

const projectsData: Project[] = [
  {
    id: 1,
    // title: "App Design",
    // description: "hi",
    image: "/app1.jpg",
    tag: [ "UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 2,
    // title: "App Design",
    // description: "Project 2 description",
    image: "/app2.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 3,
    // title: "E-commerce Application",
    // description: "Project 3 description",
    image: "/app3.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 4,
    // title: "Food Ordering Application",
    // description: "Project 4 description",
    image: "/app4.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 5,
    // title: "React Firebase Template",
    // description: "Authentication and CRUD operations",
    image: "/app5.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 6,
    // title: "Full-stack Roadmap",
    // description: "Project 5 description",
    image: "/app6.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 7,
    // title: "Full-stack Roadmap",
    // description: "Project 5 description",
    image: "/web1.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 8,
    // title: "Full-stack Roadmap",
    // description: "Project 5 description",
    image: "/web2.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 9,
    // title: "Full-stack Roadmap",
    // description: "Project 5 description",
    image: "/web3.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 10,
    // title: "Full-stack Roadmap",
    // description: "Project 5 description",
    image: "/web4.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 11,
    // title: "Full-stack Roadmap",
    // description: "Project 5 description",
    image: "/web5.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 12,
    // title: "Full-stack Roadmap",
    // description: "Project 5 description",
    image: "/web6.jpg",
    tag: ["UI/UX Design"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id: 13,
    // title: "Full-stack Roadmap",
    // description: "Project 5 description",
    image: "/web7.jpg",
    tag: ["Web"],
    // gitUrl: "/",
    previewUrl: "https://www.behance.net/fatimaparveen1",
  },
  {
    id:14,
    image:"illus.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:15,
    image:"illus2.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:16,
    image:"illus3.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:17,
    image:"illus4.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:18,
    image:"illus5.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:19,
    image:"illus6.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:20,
    image:"illus7.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:21,
    image:"logo1.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:22,
    image:"logo2.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:23,
    image:"logo3.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },{
    id:24,
    image:"logo4.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:25,
    image:"logo5.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:26,
    image:"logo6.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:27,
    image:"sm1.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:28,
    image:"sm2.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:29,
    image:"sm3.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:30,
    image:"sm4.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:31,
    image:"sm5.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
  {
    id:32,
    image:"sm6.jpg",
    tag:["Graphic Design"],
    previewUrl:"https://www.behance.net/fatimaparveen1"
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [tag, setTag] = useState<string>("UI/UX Design");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-5">
      <h2 className="text-center text-4xl  font-bold text-white mt-4 mb-8 md:mb-12">
        Portfolio
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX Design"
          isSelected={tag === "UI/UX Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Graphic Design"
          isSelected={tag === "Graphic Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id} // Use project.id instead of index for better key handling
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id} // Using project.id for consistency
              // title={project.title}
              // description={project.description}
              imgUrl={project.image}
              // gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

