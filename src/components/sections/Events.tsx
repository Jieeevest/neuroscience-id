"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { EventCardImage } from "@/components/ui/EventCardImage";
import React, { useRef, useState } from "react";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  category: "past" | "present" | "future";
  delay: number;
  index?: number;
}

const EventCard = ({
  id,
  title,
  date,
  location,
  description,
  imageUrl,
  category,
  delay,
  index = 0,
}: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Format the date to be more readable
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Determine badge color based on category
  const getBadgeColor = () => {
    switch (category) {
      case "past":
        return "bg-gray-500 text-white";
      case "present":
        return "bg-green-500 text-white";
      case "future":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="overflow-hidden rounded-lg shadow-md bg-white h-full flex flex-col"
    >
      <Link href={`/events/${id}`} className="block flex-grow">
        <div className="relative aspect-video">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <EventCardImage
              src={imageUrl}
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className={`object-cover transition-transform duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              priority={index === 0}
            />
          </div>
          <div className="absolute top-0 right-0 m-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor()}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </div>
          <motion.div
            className="absolute inset-0 bg-black/30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                boxShadow: isHovered
                  ? "0 0 20px rgba(59, 130, 246, 0.6)"
                  : "0 0 0px rgba(59, 130, 246, 0)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                initial={{ x: -2 }}
                animate={{ x: isHovered ? 0 : -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <path d="M8 5v14l11-7z" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs text-gray-500">{formattedDate}</span>
            </div>
          </div>
          <h3 className="text-lg font-medium text-darkGray line-clamp-2 mb-2">
            {title}
          </h3>
          <div className="flex items-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            <span className="text-xs text-gray-500">{location}</span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={`/events/${id}`}
            className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
          >
            View Details
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
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const IMAGE_URL = "/images/10613.png";
  // Sample events data

  const events = [
    {
      id: "faons-icn-2022",
      title:
        "8th Symposium Federation of Asian-Oceanian Neuroscience Societies (FAONS) & 4th Indonesia Conference of Neuroscience (ICN)",
      date: "2022-08-19",
      location: "Virtual (Jakarta Time)",
      description:
        "Virtual event bringing together experts to discuss implementing basic neuroscience to clinical neuroscience. Includes multiple symposia on topics such as ageing brain, depression, anxiety, schizophrenia, dementia, and more.",
      imageUrl: "/images/faons_icn_2022.png",
      category: "past",
    },
    {
      id: "workshop-lab-animal-2017",
      title:
        "Workshop Strategi Pengembangan Laboratory Animal Center Berstandar Internasional",
      date: "2017-12-11",
      location:
        "Universitas YARSI, Cempaka Putih, Jakarta & Animal Lab, Salemba",
      description:
        "A 2-day workshop on developing an international-standard laboratory animal center, facilitated by experts from University of Florida, Dexa Medica, and IPB.",
      imageUrl: "/images/workshop_lab_animal_2017.png",
      category: "past",
    },
    {
      id: "workshop-publikasi-2017",
      title:
        "Workshop Kiat Sukses Publikasi di Jurnal Internasional Bereputasi",
      date: "2017-12-13",
      location: "Universitas YARSI, Cempaka Putih, Jakarta",
      description:
        "A workshop on successful strategies for publishing in reputable international journals, facilitated by Irawan Satriotomo, M.D., Ph.D.",
      imageUrl: "/images/workshop_publikasi_2017.png",
      category: "past",
    },
    {
      id: "epilepsy-101-2018",
      title: "Epilepsy 101: Diagnosis dan Tatalaksana Epilepsi",
      date: "2018-09-03",
      location:
        "Auditorium FK UIN Syarif Hidayatullah, Tangerang Selatan, Banten",
      description:
        "A seminar covering modern perspectives on epilepsy, its diagnosis and treatment, with multiple sessions and expert speakers from various fields.",
      imageUrl: "/images/epilepsy_101_2018.png",
      category: "past",
    },
    {
      id: "baw-indonesia-2021",
      title:
        "Brain Awareness Week Indonesia 2021: Mengenal Otak dan Penyakit-Penyakitnya",
      date: "2021-09-20",
      location: "Online (Zoom)",
      description:
        "A free webinar series for the general public and community to raise awareness about the brain and its diseases, held during Brain Awareness Week Indonesia 2021.",
      imageUrl: "/images/baw_indonesia_2021.png",
      category: "past",
    },
    {
      id: "animal-model-lecture-2021",
      title: "Guest Lecture: Animal Model in Neurodegenerative Disease",
      date: "2021-06-19",
      location: "Online (Zoom)",
      description:
        "A guest lecture featuring Prof. Dr. Irawan Satriotomo discussing the use of animal models in neurodegenerative disease research.",
      imageUrl: "/images/animal_model_lecture_2021.png",
      category: "past",
    },
    {
      id: "akademiability-anak-berkebutuhan-2021",
      title:
        "Kelas Diskusi: Anak Berkebutuhan Khusus dari Sudut Pandang Neuroscience",
      date: "2021-04-26",
      location: "Online",
      description:
        "A discussion class on children with special needs from a neuroscience perspective, featuring Irawan Satriotomo and hosted by YP Peduli Kasih ABK.",
      imageUrl: "/images/akademiability_2021.png",
      category: "past",
    },
    {
      id: "biomedical-seminar-neuroscience-2020",
      title:
        "Online Seminar: Enjoying the World of Biomedical Sciences — Neuroscience",
      date: "2020-07-25",
      location: "Online (Zoom & YouTube)",
      description:
        "An online seminar exploring neuroscience topics such as depression, neuroregeneration, and cognitive impairment with speakers from Atma Jaya and INI.",
      imageUrl: "/images/biomedical_seminar_neuroscience_2020.png",
      category: "past",
    },
    {
      id: "faons-icn-symposium-2022",
      title: "8th Symposium FAONS & 4th Indonesia Conference of Neuroscience",
      date: "2022-08-19",
      location: "Online",
      description:
        "A virtual event combining the Federation of Asian-Oceanian Neuroscience Societies Symposium and Indonesia Conference of Neuroscience, discussing translational neuroscience from bench to bedside.",
      imageUrl: "/images/faons_icn_symposium_2022.png",
      category: "past",
    },
    {
      id: "baw-otak-skizofrenia-bipolar-2021",
      title:
        "Brain Awareness Week Indonesia 2021: Otak, Skizofrenia, dan Bipolar",
      date: "2021-09-25",
      location: "Online (Zoom)",
      description:
        "A free webinar covering bipolar disorder, schizophrenia, and the latest in neuroscience during Brain Awareness Week Indonesia 2021.",
      imageUrl: "/images/baw_otak_skizofrenia_bipolar_2021.png",
      category: "past",
    },
    {
      id: "baw-epilepsi-2021",
      title: "Brain Awareness Week Indonesia 2021: Epilepsi",
      date: "2021-09-23",
      location: "Online (Zoom)",
      description:
        "A free webinar focusing on epilepsy treatment, surgery, and psychosocial issues for people with epilepsy.",
      imageUrl: "/images/baw_epilepsi_2021.png",
      category: "past",
    },
    {
      id: "neurotransmitter-cell-signalling-guest-lecture",
      title: "Free Guest Lecture: Neurotransmitter & Cell Signalling",
      date: "N/A",
      location: "Online",
      description:
        "A guest lecture on neurotransmitters and cell signalling in celebration of FKIK UAJ’s 63rd Dies Natalis, hosted by ANR & Biomedical Sciences Master Program.",
      imageUrl: "/images/neurotransmitter_cell_signalling_guest_lecture.png",
      category: "past",
    },
    {
      id: "baw-masalah-lansia-2021",
      title:
        "Brain Awareness Week Indonesia 2021: Mengatasi Masalah Lansia Secara Terpadu",
      date: "2021-09-21",
      location: "Online (Zoom)",
      description:
        "A free webinar on managing elderly issues comprehensively, covering geriatrics, brain degeneration, and psychiatric approaches.",
      imageUrl: "/images/baw_masalah_lansia_2021.png",
      category: "past",
    },
    {
      id: "biopsikologi-seri-2-2022",
      title:
        "Kuliah Tamu Biopsikologi Seri 2 — Neurobehavior and Behavioral Problems",
      date: "2022-05-25",
      location: "Online (Zoom)",
      description:
        "A guest lecture focusing on neurobehavior and behavioral problems, part of the Biopsychology Guest Lecture Series.",
      imageUrl: "/images/biopsikologi_seri_2_2022.png",
      category: "past",
    },
  ];
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || event.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section
      id="events"
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
            Events & Activities
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for our upcoming events, workshops, and conferences focused
            on advancing neuroscience research and education.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col space-y-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <motion.h3
                className="text-2xl font-bold text-darkGray mb-4 md:mb-0"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Featured Events
              </motion.h3>
              <motion.div
                className="relative w-full md:w-64"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {searchTerm ? (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="focus:outline-none"
                      aria-label="Clear search"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-sm text-gray-500 mr-2">
                {filteredEvents.length} events
              </span>
              <button
                onClick={() => setCategoryFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  categoryFilter === "all"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setCategoryFilter("past")}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors flex items-center ${
                  categoryFilter === "past"
                    ? "bg-gray-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Past
              </button>
              <button
                onClick={() => setCategoryFilter("present")}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors flex items-center ${
                  categoryFilter === "present"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Present
              </button>
              <button
                onClick={() => setCategoryFilter("future")}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors flex items-center ${
                  categoryFilter === "future"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Future
              </button>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
            {currentEvents.map((event, index) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                imageUrl={IMAGE_URL}
                category={event.category as "past" | "present" | "future"}
                delay={0.1 * index}
                index={index}
              />
            ))}
            {filteredEvents.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">
                  {searchTerm && categoryFilter !== "all"
                    ? `No ${categoryFilter} events found matching "${searchTerm}". Try a different search or filter.`
                    : searchTerm
                    ? `No events found matching "${searchTerm}". Try a different search term.`
                    : `No ${categoryFilter} events available.`}
                </p>
              </div>
            )}
          </div>

          {/* Pagination controls */}
          {filteredEvents.length > eventsPerPage && (
            <div className="flex justify-center mt-10 gap-2 flex-wrap">
              {/* Prev button */}
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 cursor-pointer flex items-center justify-center rounded-md text-sm border transition-colors ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                    : "bg-white text-gray-700 hover:bg-gray-200 hover:text-black border-gray-300"
                }`}
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Page buttons */}
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;

                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 &&
                    pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`px-3 py-1 rounded-md text-sm border transition-colors cursor-pointer ${
                        currentPage === pageNumber
                          ? "bg-gray-800 text-white font-semibold border-gray-800"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200 hover:text-black hover:border-gray-400"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  (pageNumber === currentPage - 2 && pageNumber > 1) ||
                  (pageNumber === currentPage + 2 && pageNumber < totalPages)
                ) {
                  return (
                    <span
                      key={pageNumber}
                      className="px-3 py-1 text-gray-400 text-sm"
                    >
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center justify-center rounded-md text-sm border transition-colors cursor-pointer ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                    : "bg-white text-gray-700 hover:bg-gray-200 hover:text-black border-gray-300"
                }`}
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
