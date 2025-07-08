"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with neurological theme */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: "linear-gradient(135deg, #b0d0f0, #f3c8d5, #c7f0e5)",
          }}
        ></div>

        <motion.div
          className="absolute inset-0 bg-[url('/images/3d-brain.svg')] bg-no-repeat bg-center bg-cover opacity-10"
          style={{ y: backgroundY }}
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkGray leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Advancing Indonesian Neuroscience for the World
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-primary font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Indonesia Neuroscience Institute – Satriotomo Foundation
            </motion.h2>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="bg-blue-500 hover:bg-primary/90 text-white border-[1px] border-black font-medium py-3 px-6 rounded-md transition-colors block"
                >
                  Join Now
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#about"
                  className="bg-white hover:bg-lightGray text-primary border border-primary font-medium py-3 px-6 rounded-md transition-colors block"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full h-full rounded-full  flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/images/3d-brain.svg"
              alt="3D Brain with Neural Connections"
              width={800}
              height={800}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
