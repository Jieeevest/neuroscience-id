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
      whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      className="bg-white p-6 rounded-lg shadow-md transition-all"
    >
      <motion.div
        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.span
          className="text-primary text-xl"
          animate={isInView ? { scale: [0.8, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {icon}
        </motion.span>
      </motion.div>
      <h3 className="text-xl font-bold text-darkGray mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Programs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const researchProjects = [
    {
      title: "Stroke Recovery Research",
      description:
        "Investigating novel therapeutic approaches for post-stroke recovery, focusing on neuroplasticity and rehabilitation techniques.",
      icon: "🧠",
    },
    {
      title: "Epilepsy Studies",
      description:
        "Researching the genetic and environmental factors contributing to epilepsy in Indonesian populations, with a focus on developing targeted treatments.",
      icon: "⚡",
    },
    {
      title: "Neurodegenerative Disorders",
      description:
        "Studying the mechanisms of neurodegenerative diseases like Alzheimer's and Parkinson's, with particular attention to risk factors prevalent in Southeast Asia.",
      icon: "🔬",
    },
    {
      title: "Neurotrauma Research",
      description:
        "Developing improved diagnostic and treatment protocols for traumatic brain and spinal cord injuries, addressing the specific challenges in Indonesian healthcare settings.",
      icon: "🏥",
    },
    {
      title: "Neurodevelopmental Research",
      description:
        "Investigating the neural basis of developmental disorders and creating culturally appropriate assessment tools for Indonesian children.",
      icon: "👶",
    },
    {
      title: "Neuro-oncology",
      description:
        "Researching brain and spinal cord tumors, with a focus on developing novel therapeutic approaches and improving patient outcomes in Indonesia.",
      icon: "🔎",
    },
  ];

  const collaborations = [
    {
      title: "University of Wisconsin",
      description:
        "Collaborative research on stroke recovery mechanisms and therapeutic interventions, sharing expertise and resources.",
      icon: "🇺🇸",
    },
    {
      title: "Keio University, Japan",
      description:
        "Joint research initiatives focusing on neurodegenerative diseases, with exchange programs for researchers and students.",
      icon: "🇯🇵",
    },
    {
      title: "Seoul National University",
      description:
        "Collaboration on neuroimaging techniques and their application in diagnosing and monitoring neurological disorders.",
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
