"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <footer
      ref={footerRef}
      id="contact"
      style={{
        background: "linear-gradient(135deg, #b0d0f0, #f3c8d5, #c7f0e5)",
      }}
      className="text-black py-12 relative overflow-hidden shadow-lg border-t-[1px] border-gray-300"
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-5"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'url("/brain-bg.svg")',
          backgroundSize: "50%",
          filter: "blur(5px)",
        }}
      />
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Neuroscience Institute</h3>
            <p className="text-black mb-4">
              Indonesia Neuroscience Institute - Satriotomo Foundation
            </p>
            <p className="text-black">
              Advancing neuroscience research and education in Indonesia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <motion.ul className="space-y-2 text-black">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 mt-0.5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:obed031@gmail.com">obed031@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 mt-0.5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62 818 0891 8918</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 mt-0.5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Jakarta, Indonesia</span>
              </li>
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-black">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="#programs"
                  className="hover:text-primary transition-colors"
                >
                  Programs
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="#publications"
                  className="hover:text-primary transition-colors"
                >
                  Publications
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="#team"
                  className="hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <motion.div className="mb-4 md:mb-0">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-dark font-medium py-2 px-6 rounded-md transition-colors inline-block"
              >
                Support Us
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="text-black font-semibold text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            © {new Date().getFullYear()} Indonesia Neuroscience Institute -
            Satriotomo Foundation. All rights reserved.
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
