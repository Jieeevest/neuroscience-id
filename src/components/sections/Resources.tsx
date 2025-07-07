"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface VideoCardProps {
  title: string;
  videoId: string;
  delay: number;
  platform?: "youtube" | "facebook";
  index?: number;
}

const VideoCard = ({
  title,
  videoId,
  delay,
  platform = "youtube",
  index = 0,
}: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const videoUrl =
    platform === "facebook"
      ? `https://fb.watch/${videoId}/`
      : `https://www.youtube.com/watch?v=${videoId}`;

  // For Facebook videos, we'll use a fallback image as Facebook Graph API requires authentication
  const thumbnailUrl =
    platform === "facebook"
      ? `/images/facebook-video-placeholder.svg` // Fallback image for Facebook videos
      : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="overflow-hidden rounded-lg shadow-md"
    >
      <Link href={videoUrl} target="_blank" className="block">
        <div className="relative aspect-video">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className={`object-cover transition-transform duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              priority={index === 0}
              onError={(e) => {
                // Fallback to a generic video thumbnail if the YouTube thumbnail fails to load
                const target = e.target as HTMLImageElement;
                target.src = "/images/video-placeholder.svg";
              }}
            />
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
        <div className="p-4 bg-white">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <span
                className={`inline-flex items-center justify-center w-5 h-5 rounded-full mr-2 ${
                  platform === "facebook" ? "bg-[#1877f2]" : "bg-[#ff0000]"
                }`}
              >
                {platform === "facebook" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3 h-3"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3 h-3"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
              </span>
              <span className="text-xs text-gray-500">
                {platform === "facebook" ? "Facebook" : "YouTube"}
              </span>
            </div>
          </div>
          <h3 className="text-lg font-medium text-darkGray line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  type: "research" | "ebook";
  delay: number;
}

const ResourceCard = ({
  title,
  description,
  link,
  type,
  delay,
}: ResourceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white p-6 rounded-lg shadow-md transition-all"
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(59, 130, 246, 0.2)",
          }}
          animate={isInView ? { scale: [0.8, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <motion.span
            className="text-primary text-xl"
            animate={isHovered ? { rotate: [0, 10, 0] } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {type === "research" ? "📄" : "📚"}
          </motion.span>
        </motion.div>
        <div>
          <h3 className="text-lg font-bold text-darkGray mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href={link}
              target="_blank"
              className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
            >
              {type === "research" ? "View on ResearchGate" : "Download E-Book"}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
                animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "loop",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Resources = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState<
    "all" | "youtube" | "facebook"
  >("all");
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 8; // Number of videos to display per page

  const videos = [
    {
      title: "Simposium Epilepsy 101: Diagnosis dan Tata Laksana Epilepsi",
      videoId: "ft5bd96wom",
      platform: "facebook" as const,
    },
    {
      title:
        "Irawan Satriotomo: Memahami ABK dari Sudut Pandang Neuroscience - Kelas Diskusi #Akademiability",
      videoId: "-rO5j4vUtIU",
      platform: "youtube" as const,
    },
    {
      title:
        "Guest Lecture: Neurotransmitter and Cell Signalling - Prof. dr. Irawan Satriotomo, Ph.D., BCMAS",
      videoId: "VYSbJ8cmRqg",
      platform: "youtube" as const,
    },
    {
      title:
        "BREED #90 Brain Rules | Imam Dermawan, Irawan Satriotomo & Lita Edia",
      videoId: "FWosnf0sBes",
      platform: "youtube" as const,
    },
    {
      title:
        "Guest Lecture: Animal Model in Neurodegenerative Disease - Prof. dr. Irawan Satriotomo, Ph.D., BCMAS",
      videoId: "Q0HGoonyfF8",
      platform: "youtube" as const,
    },
    {
      title:
        'Kuliah Umum Visiting Profesor: "Neuroscience - From Bench to Bedside"',
      videoId: "kJB_9Jcl2BM",
      platform: "youtube" as const,
    },
    {
      title:
        "KULIAH TAMU PSIKOLOGI 1 | Cognitive Neuroscience The Biology of Mind Irawan Satriotomo",
      videoId: "WYShKJHokI4",
      platform: "youtube" as const,
    },
    {
      title: "PERKEMBANGAN OTAK & GANGGUAN PERILAKU - Tinjauan dari NEUROLOGIS",
      videoId: "xgb0JKtPxe8",
      platform: "youtube" as const,
    },
    {
      title:
        'Kuliah Tamu Biopsikologi seri 2 "NeuroBehavior And Behavioral Problems" Part 2',
      videoId: "etGgzz1GD6A",
      platform: "youtube" as const,
    },
    {
      title: 'Kuliah Tamu Biopsikologi seri 3 "Brain Health and Wellbeing"',
      videoId: "EnVuD-nltds",
      platform: "youtube" as const,
    },
    {
      title:
        "Kuliah Online I-4 - 69 Tahun Merdeka: Quo Vadis Riset & Pendidikan Indonesia",
      videoId: "BqdRdhS-dBo",
      platform: "youtube" as const,
    },
    {
      title:
        "4 Talks: Mengenal Lebih Dekat Buku 25 Kisah Ilmuwan Indonesia yang Mendunia",
      videoId: "AaH3-3KLBVM",
      platform: "youtube" as const,
    },
    {
      title:
        "SEMINAR PENINGKATAN CAPAIAN DAN LUARAN PENELITIAN DAN PENGABDIAN MASYRAKAT",
      videoId: "A0K5uIki0BQ",
      platform: "youtube" as const,
    },
    {
      title:
        "Seminar Nasional Metode IAHF: Tinjauan Medis, Etis, Sosiologis, Politis, Bioetik Islam dan Hukum",
      videoId: "qoxltM1gMeE",
      platform: "youtube" as const,
    },
    {
      title: "Pembicara Kuliah Online I-4",
      videoId: "jZMZ5XXnApU",
      platform: "youtube" as const,
    },
    {
      title: 'Virtual Guest Lecture "NEUROPLASTICIY"',
      videoId: "Wn9FAhS_0qU",
      platform: "youtube" as const,
    },
  ];

  // Filter videos based on search term and platform filter
  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPlatform =
      platformFilter === "all" || video.platform === platformFilter;
    return matchesSearch && matchesPlatform;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, platformFilter]);

  // const resources = [
  //   {
  //     title: "Neural Stem Cell Therapy for Stroke",
  //     description:
  //       "Research paper on the potential of neural stem cell therapy for stroke recovery, published in collaboration with University of Wisconsin.",
  //     link: "https://www.researchgate.net/",
  //     type: "research" as const,
  //   },
  //   {
  //     title: "Neuroscience Fundamentals",
  //     description:
  //       "Comprehensive e-book covering the basics of neuroscience, perfect for students and early-career researchers.",
  //     link: "#",
  //     type: "ebook" as const,
  //   },
  //   {
  //     title: "Epilepsy in Southeast Asian Populations",
  //     description:
  //       "Research study examining the prevalence and characteristics of epilepsy in Southeast Asian populations.",
  //     link: "https://www.researchgate.net/",
  //     type: "research" as const,
  //   },
  //   {
  //     title: "Brain Injury Rehabilitation Guide",
  //     description:
  //       "Practical e-book for healthcare professionals working with brain injury patients in resource-limited settings.",
  //     link: "#",
  //     type: "ebook" as const,
  //   },
  // ];
  const resources = [
    {
      title:
        "Folic Acid Treatment for Patients with Vascular Cognitive Impairment: A Systematic Review and Meta-Analysis",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Adenosine 2A receptor inhibition protects phrenic motor neurons from cell death induced by protein synthesis inhibition",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Adenosine 2A Receptor Inhibition Promotes Neuroprotection Following Toxic Insult to Phrenic Motor Neurons",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Long‐term Delivery of “Low Dose” Repetitive Intermittent Hypoxia is Not Associated with Detectable Pathology",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Enucleation Induces Parvalbumin and Glial Fibrillary Acidic Protein, but Not Calbindin D28k Protein Expression in Superior Colliculus of Wistar Rats",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "EC NEUROLOGY Case Report Persistent Trigeminal Artery Associated with Double Aneurysm",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title: "Persistent Trigeminal Artery Associated with Double Aneurysm",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Compensatory plasticity in diaphragm and intercostal muscle utilization in a rat model of ALS",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Mechanisms of Enhanced Phrenic Long-Term Facilitation in SOD1(G93A) Rats",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title: "Phrenic Motor Neuron Survival Caudal to C2 Hemisection",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Thrice weekly intermittent hypoxia increases expression of key proteins necessary for phrenic long-term facilitation: a possible mechanism of respiratory metaplasticity?",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Repetitive acute intermittent hypoxia increases growth/neurotrophic factor expression in non-respiratory motor neurons",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Optimization of a Clinically Relevant Model of White Matter Stroke in Mice: Histological and Functional Evidences",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Considerations for the Optimization of Induced White Matter Injury Preclinical Models",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Acute intermittent hypoxia induced phrenic long-term facilitation despite increased SOD1 expression in a rat model of ALS",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Treatment of stroke related refractory brain edema using mixed vasopressin antagonism: A case report and review of the literature",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title: "Role of Vasopressin and Its Antagonism in Stroke Related Edema",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Neither Serotonin nor Adenosine-dependent Mechanisms Preserve Ventilatory Capacity in ALS rats",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title: "Ventilatory control in ALS",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Intermittent Hypoxia and Stem Cell Implants Preserve Breathing Capacity in a Rodent Model Of ALS.",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Repetitive acute intermittent hypoxia increases expression of proteins associated with plasticity in the phrenic motor nucleus",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Cervical Spinal Erythropoietin Induces Phrenic Motor Facilitation via Extracellular Signal-Regulated Protein Kinase and Akt Signaling",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Spinal VEGF induced phrenic motor facilitation is unaffected by pretreatment with repetitive acute intermittent hypoxia",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Repetitive Intermittent Hypoxia Induces Respiratory and Somatic Motor Recovery after Chronic Cervical Spinal Injury",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Spinal Vascular Endothelial Growth Factor Induces Phrenic Motor Facilitation via Extracellular Signal-Regulated Kinase and Akt Signaling",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Spinal Plasticity following Intermittent Hypoxia: Implications for Spinal Injury",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Repetitive Acute Intermittent Hypoxia Increases BDNF and TrkB Expression in Respiratory Motor Neurons: Dose Effects",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
    {
      title:
        "Enhanced Phrenic Long-Term Facilitation (pLTF) Following Repetitive Acute Intermittent Hypoxia",
      description: "",
      link: "https://www.researchgate.net/profile/Irawan-Satriotomo",
      type: "research" as const,
    },
  ];
  return (
    <section
      id="publications"
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
            Videos & E-Library
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our educational videos and research publications to learn
            more about our work in neuroscience.
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
                Featured Videos
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
                  placeholder="Search videos..."
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
                {
                  videos.filter((video) => {
                    const matchesSearch = video.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                    const matchesPlatform =
                      platformFilter === "all" ||
                      video.platform === platformFilter;
                    return matchesSearch && matchesPlatform;
                  }).length
                }{" "}
                videos
              </span>
              <button
                onClick={() => setPlatformFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  platformFilter === "all"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Videos
              </button>
              <button
                onClick={() => setPlatformFilter("youtube")}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors flex items-center ${
                  platformFilter === "youtube"
                    ? "bg-[#ff0000] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 mr-1"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </button>
              <button
                onClick={() => setPlatformFilter("facebook")}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors flex items-center ${
                  platformFilter === "facebook"
                    ? "bg-[#1877f2] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 mr-1"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
            {currentVideos.map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                videoId={video.videoId}
                platform={video.platform}
                delay={0.1 * index}
                index={index}
              />
            ))}
            {filteredVideos.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">
                  {searchTerm && platformFilter !== "all"
                    ? `No ${platformFilter} videos found matching "${searchTerm}". Try a different search or filter.`
                    : searchTerm
                    ? `No videos found matching "${searchTerm}". Try a different search term.`
                    : `No ${platformFilter} videos available.`}
                </p>
              </div>
            )}
          </div>

          {/* Pagination controls */}
          {filteredVideos.length > 0 && (
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

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.youtube.com/@irawansatriotomo"
                target="_blank"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                View more videos by Prof. Irawan Satriotomo
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
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
            Research & E-Books
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                type={resource.type}
                delay={0.1 * index}
              />
            ))}
          </div>
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.researchgate.net/"
                target="_blank"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                View all publications on ResearchGate
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
