"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { useState, useRef } from "react";
import Image from "next/image";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-lightGray relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-darkGray mb-4">
              Our History
            </h3>
            <p className="text-gray-700 mb-6">
              Indonesia Neuroscience Institute - Satriotomo Foundation
              (Neuroscience Institute) was established to advance neuroscience
              research and education in Indonesia. Founded by Prof. dr. Irawan
              Satriotomo, Ph.D., our institute bridges Indonesian neuroscience
              with global research communities.
            </p>
            <p className="text-gray-700">
              With a focus on developing local talent and fostering
              international collaborations, Neuroscience Institute aims to
              contribute to the global understanding of neurological disorders
              while addressing specific challenges in the Indonesian context.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden bg-white shadow-md group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Founder Image */}
              <Image
                src="/images/Dr-irawan-satriotomo.jpg"
                alt="Prof. dr. Irawan Satriotomo, Ph.D."
                width={500}
                height={500}
                className="rounded-lg object-cover"
                style={{ objectPosition: "center top" }}
                priority
              />

              {/* Hover overlay with name */}
              <motion.div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white ">
                  <div className="text-xl font-bold">
                    Prof. dr. Irawan Satriotomo, Ph.D.
                  </div>
                  <div className="text-sm text-primary font-bold">Founder</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Tabs.Root
            defaultValue="vision"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <Tabs.List
              className="flex border-b border-gray-300 mb-8"
              aria-label="About Neuroscience Institute"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tabs.Trigger
                  value="vision"
                  className="px-6 py-3 cursor-pointer text-gray-600 hover:text-primary data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-medium transition-colors"
                >
                  <motion.span
                    animate={{
                      color: activeTab === "vision" ? "#3B82F6" : "#4B5563",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Vision
                  </motion.span>
                </Tabs.Trigger>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tabs.Trigger
                  value="mission"
                  className="px-6 py-3 cursor-pointer text-gray-600 hover:text-primary data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-medium transition-colors"
                >
                  <motion.span
                    animate={{
                      color: activeTab === "mission" ? "#3B82F6" : "#4B5563",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Mission
                  </motion.span>
                </Tabs.Trigger>
              </motion.div>

              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tabs.Trigger
                  value="goals"
                  className="px-6 py-3 text-gray-600 hover:text-primary data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-medium transition-colors"
                >
                  <motion.span
                    animate={{
                      color: activeTab === "goals" ? "#3B82F6" : "#4B5563",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Goals
                  </motion.span>
                </Tabs.Trigger>
              </motion.div> */}
            </Tabs.List>

            <AnimatePresence mode="wait">
              {activeTab === "vision" && (
                <Tabs.Content
                  value="vision"
                  className="relative"
                  key="vision-content"
                >
                  <motion.div
                    className="p-4 bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-darkGray mb-4">
                      Our Vision
                    </h3>
                    <p className="text-gray-700">
                      To establish Indonesia as a leading contributor to global
                      neuroscience research and innovation, improving
                      neurological health outcomes both nationally and
                      internationally through cutting-edge research, education,
                      and clinical applications.
                    </p>
                  </motion.div>
                </Tabs.Content>
              )}
              {activeTab === "mission" && (
                <Tabs.Content
                  value="mission"
                  className="relative"
                  key="mission-content"
                >
                  <motion.div
                    className="p-4 bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-darkGray mb-4">
                      Our Mission
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      {[
                        "Conduct high-quality neuroscience research addressing both global challenges and Indonesia-specific neurological issues",
                        "Develop a robust network of neuroscience researchers within Indonesia and foster international collaborations",
                        "Provide education and training opportunities for the next generation of Indonesian neuroscientists",
                        "Translate research findings into practical applications that improve neurological healthcare in Indonesia",
                        "Advocate for increased awareness and support for neuroscience research in Indonesia",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </Tabs.Content>
              )}
              {activeTab === "goals" && (
                <Tabs.Content
                  value="goals"
                  className="relative"
                  key="goals-content"
                >
                  <motion.div
                    className="p-4 bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-darkGray mb-4">
                      Our Goals
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      {[
                        "Establish a state-of-the-art neuroscience research facility in Indonesia by 2025",
                        "Publish at least 50 peer-reviewed research papers in international journals by 2026",
                        "Train 100+ Indonesian researchers in advanced neuroscience techniques by 2027",
                        "Develop at least 5 international research partnerships with leading neuroscience institutions",
                        "Create a sustainable funding model to support long-term neuroscience research in Indonesia",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </Tabs.Content>
              )}
            </AnimatePresence>
          </Tabs.Root>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
