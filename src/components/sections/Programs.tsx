"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ProgramCard = ({ title, description, icon, delay }: ProgramCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-xl shadow-md border border-gray-100 transition-all overflow-hidden relative flex flex-col h-full"
    >
      {/* Top accent bar with icon */}
      <div className="bg-gradient-to-r from-primary/80 to-primary h-2 w-full"></div>

      <div className="p-6 flex-grow">
        {/* Header with icon and title */}
        <div className="flex items-center mb-4">
          <motion.div
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span
              className="text-primary text-2xl"
              animate={isInView ? { scale: [0.8, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.3 }}
            >
              {icon}
            </motion.span>
          </motion.div>

          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>

      {/* Footer with read more link */}
      <div className="px-6 py-3 cursor-pointer">
        <motion.div
          className="flex items-center text-primary text-sm font-medium"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span>Selengkapnya</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const researchProjects = [
    {
      title: "Pengembangan Model Hewan Percobaan",
      description:
        "Pengembangan model hewan percobaan untuk penyakit stroke, epilepsi, multiple sclerosis, neurotoksisitas alkohol/obat-obat terlarang, dll serta terapi terbarunya.",
      icon: "🐀",
    },
    {
      title: "Lokakarya Teknik Penelitian Neurosains",
      description:
        "Workshop dan pelatihan teknik penelitian neurosains untuk peneliti dan mahasiswa.",
      icon: "🔬",
    },
    {
      title: "Development of Stroke Model",
      description:
        "Development of stroke model in rats including ischemic stroke, hemorrhagic stroke, and alcohol/withdrawal syndrome with focus on mechanisms.",
      icon: "🧠",
    },
    {
      title: "Neural Tracer Techniques",
      description:
        "WGA (Wheat Germ Agglutinin) for anterograde signaling and Cholera toxin B (CTB) for retrograde signaling studies.",
      icon: "🔬",
    },
    {
      title: "Immunohistochemistry Techniques",
      description:
        "Specialized techniques including indirect (DAB) methods and fluorescence techniques for neurological research.",
      icon: "🧪",
    },
    {
      title: "Pengembangan Animal Center",
      description:
        "Pengembangan fasilitas dan standar untuk animal center yang mendukung penelitian neurosains.",
      icon: "🏥",
    },
    {
      title: "ASEAN Neuroscience Training",
      description:
        "Pengenalan dan pelatihan neurosains di ASEAN bekerjasama dengan IBRO (International Brain Research Organization).",
      icon: "🌏",
    },
    {
      title: "Asian Journal of Neuroscience",
      description:
        "Bekerjasama dengan ahli neurosains di Asia dan penerbit internasional membuat peer-review Asian Journal of Neuroscience.",
      icon: "📚",
    },
  ];

  const collaborations = [
    {
      title: "Prof. Gordon S. Mitchell",
      description:
        "University of Wisconsin, USA - Collaborative research on stroke recovery mechanisms and therapeutic interventions.",
      icon: "🇺🇸",
    },
    {
      title: "Prof. Yoshiki Takeuchi, MD, Ph.D.",
      description:
        "Kagawa University, Japan - Joint research initiatives focusing on neurodegenerative diseases.",
      icon: "🇯🇵",
    },
    {
      title: "Prof. Yoshino Fukui, MD, Ph.D.",
      description:
        "Tokushima University, Japan - Collaboration on neurological research and exchange programs.",
      icon: "🇯🇵",
    },
    {
      title: "Prof. Park Seung-Won, MD, Ph.D.",
      description:
        "Ehwa University, South Korea - Collaboration on neuroimaging techniques and neurological disorders.",
      icon: "🇰🇷",
    },
  ];

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #b0d0f0, #f3c8d5, #c7f0e5)",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-4">
            Programs & Research
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our research programs focus on addressing critical neurological
            challenges while fostering international collaborations to advance
            neuroscience globally.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3
            className="text-2xl font-bold text-darkGray mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Research Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project, index) => (
              <ProgramCard
                key={index}
                title={project.title}
                description={project.description}
                icon={project.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h3
            className="text-2xl font-bold text-darkGray mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            International Collaborations
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collaborations.map((collab, index) => (
              <ProgramCard
                key={index}
                title={collab.title}
                description={collab.description}
                icon={collab.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
