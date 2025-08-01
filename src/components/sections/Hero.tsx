"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // State for storing local images
  const [images] = useState<string[]>(["/images/bio1.jpg"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading] = useState(false);

  // Change image every 5 seconds
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen image section */}
      <div className="absolute inset-0 w-full h-full">
        {!isLoading && images.length > 0 && (
          <motion.div
            className="absolute inset-0 w-full h-full"
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Next/Image component with remote URL */}
            <div className="relative w-full h-full">
              <Image
                src={images[currentImageIndex]}
                alt="Neuroscience Image"
                fill
                className="object-cover"
                priority
                // Local images don't need unoptimized
              />
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 via-primary/60 to-gray-900/80"></div>
            </div>
          </motion.div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="animate-pulse text-white text-xl">Loading...</div>
          </div>
        )}
      </div>

      {/* Centered content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center justify-center text-center px-4 md:px-12 py-20">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Advancing Indonesian Neuroscience for the World
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-white font-medium mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Indonesia Neuroscience Institute – Satriotomo Foundation
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="bg-blue-500 hover:bg-primary/90 text-white border-[1px] border-white font-medium py-3 px-8 rounded-md transition-colors block shadow-lg"
              >
                Join Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#about"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/50 font-medium py-3 px-8 rounded-md transition-colors block shadow-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image indicators */}
      {!isLoading && images.length > 0 && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentImageIndex === index ? "bg-white" : "bg-white/50"
              } transition-all duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
