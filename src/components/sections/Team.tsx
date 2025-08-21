"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        <Image
          src="/images/ava-default.jpg"
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
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
      role: "FOUNDER - DEWAN PENGAWAS",
      bio: "Internationally recognized neuroscientist with expertise in stroke recovery research. Previously affiliated with the University of Wisconsin and now leading Neuroscience Institute to advance neuroscience in Indonesia.",
    },
    {
      name: "Dr. dr. Shahdevi Sp.S (K)",
      role: "Ketua",
      bio: "Leading the Neuroscience Institute's initiatives and overseeing all research and educational programs to advance neuroscience in Indonesia.",
    },
    {
      name: "Dr. Husnul Khotimah",
      role: "Sekretaris",
      bio: "Manages the institute's administrative operations and coordinates communication between different departments and external partners.",
    },
    {
      name: "Dr. dr. Veronica",
      role: "Bendahara",
      bio: "Oversees the financial management and budget planning of the Neuroscience Institute to ensure sustainable operations and research funding.",
    },
    {
      name: "Obed Irwanto S.T.",
      role: "Kepala IT",
      bio: "Leads the institute's technological infrastructure, digital communications, and research data management systems.",
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
