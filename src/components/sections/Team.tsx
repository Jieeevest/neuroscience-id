"use client";

import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  delay: number;
}

const TeamMember = ({ name, role, bio, delay }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="aspect-square relative bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-2xl font-bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-darkGray">{name}</h3>
        <p className="text-primary font-medium mb-4">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Prof. dr. Irawan Satriotomo, Ph.D.",
      role: "Founder & Director",
      bio: "Internationally recognized neuroscientist with expertise in stroke recovery research. Previously affiliated with the University of Wisconsin and now leading Neuroscience Institute to advance neuroscience in Indonesia.",
    },
    {
      name: "Dr. Anisa Wijaya",
      role: "Research Director",
      bio: "Specializes in neurodegenerative disorders with a focus on Alzheimer's disease. Leads the research initiatives and international collaborations at Neuroscience Institute.",
    },
    {
      name: "Dr. Budi Santoso",
      role: "Education Coordinator",
      bio: "Neurophysiologist with a passion for education. Oversees the training programs and educational initiatives to develop the next generation of Indonesian neuroscientists.",
    },
    {
      name: "Maya Putri, M.Sc.",
      role: "Laboratory Manager",
      bio: "Expert in neuroimaging techniques and laboratory management. Ensures the smooth operation of research facilities and equipment at Neuroscience Institute.",
    },
    {
      name: "Reza Firmansyah",
      role: "IT & Digital Strategy",
      bio: "Specializes in research data management and digital communications. Manages the institute's online presence and technological infrastructure.",
    },
    {
      name: "Siti Rahmah, M.B.A.",
      role: "Administration & Finance",
      bio: "Experienced in non-profit management and fundraising. Handles the administrative and financial aspects of Neuroscience Institute to support its research mission.",
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-4">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind Neuroscience Institute who
            are working to advance neuroscience research in Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
