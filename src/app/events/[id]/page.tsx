import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventImage } from "@/components/ui/EventImage";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { RelatedEventImage } from "@/components/ui/RelatedEventImage";

const IMAGE_URL = "/images/10613.png";

// Sample events data (in a real app, this would come from a database or API)
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
    fullDescription: `<p>The 8th Symposium Federation of Asian-Oceanian Neuroscience Societies (FAONS) & 4th Indonesia Conference of Neuroscience (ICN) was a landmark virtual event that brought together leading neuroscience researchers, clinicians, and students from across Asia-Oceania region.</p>

<p>This comprehensive symposium focused on implementing basic neuroscience to clinical neuroscience, featuring multiple specialized sessions:</p>
<ul>
  <li>Ageing Brain and Neurodegenerative Diseases</li>
  <li>Depression and Anxiety Disorders</li>
  <li>Schizophrenia and Psychotic Disorders</li>
  <li>Dementia and Cognitive Impairment</li>
  <li>Neuroplasticity and Brain Recovery</li>
  <li>Translational Neuroscience Approaches</li>
</ul>

<p>The event featured keynote presentations from renowned international speakers, panel discussions on emerging topics, and poster presentations by early-career researchers. The virtual format allowed for broader participation from across the region.</p>

<p>The symposium was organized by the Federation of Asian-Oceanian Neuroscience Societies in collaboration with the Indonesian Neuroscience Society, attracting over 800 participants from 15 countries in the Asia-Oceania region.</p>`,
    schedule: [
      { time: "08:00 - 09:00", activity: "Virtual Registration and Welcome" },
      { time: "09:00 - 09:30", activity: "Opening Ceremony" },
      {
        time: "09:30 - 10:30",
        activity: "Keynote: Implementing Basic Neuroscience to Clinical Practice",
      },
      { time: "10:30 - 11:00", activity: "Break" },
      {
        time: "11:00 - 12:30",
        activity: "Symposium: Ageing Brain and Neurodegeneration",
      },
      { time: "12:30 - 13:30", activity: "Lunch Break" },
      { time: "13:30 - 15:00", activity: "Parallel Sessions: Depression & Anxiety" },
      { time: "15:00 - 15:30", activity: "Break" },
      { time: "15:30 - 17:00", activity: "Panel: Future of Neuroscience in Asia-Oceania" },
      {
        time: "17:00 - 18:00",
        activity: "Closing Remarks and Virtual Networking",
      },
    ],
    speakers: [
      {
        name: "Prof. Irawan Satriotomo",
        affiliation: "University of Florida & INI",
        topic: "Translational Neuroscience",
      },
      {
        name: "Dr. Kenji Hashimoto",
        affiliation: "Chiba University, Japan",
        topic: "Depression and Neuroplasticity",
      },
      {
        name: "Prof. Susan Greenfield",
        affiliation: "University of Oxford",
        topic: "Ageing Brain and Dementia",
      },
      {
        name: "Dr. Ahmad Aulia Jusuf",
        affiliation: "University of Indonesia",
        topic: "Clinical Neuroscience Applications",
      },
    ],
    gallery: [
      "/images/faons-gallery1.jpg",
      "/images/faons-gallery2.jpg",
      "/images/faons-gallery3.jpg",
    ],
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
    fullDescription: `<p>This intensive 2-day workshop focused on developing an international-standard laboratory animal center, bringing together experts from leading institutions to share best practices and methodologies.</p>

<p>The workshop covered essential topics including:</p>
<ul>
  <li>International standards for laboratory animal facilities</li>
  <li>Animal welfare and ethical considerations</li>
  <li>Facility design and environmental controls</li>
  <li>Quality assurance and accreditation processes</li>
  <li>Staff training and competency development</li>
  <li>Regulatory compliance and documentation</li>
</ul>

<p>Expert facilitators from University of Florida, Dexa Medica, and IPB provided hands-on training and shared their extensive experience in establishing and managing world-class laboratory animal facilities.</p>

<p>The workshop was designed for researchers, facility managers, veterinarians, and administrators involved in laboratory animal research and facility management.</p>`,
    schedule: [
      { time: "Day 1 - 09:00", activity: "Registration and Welcome" },
      { time: "Day 1 - 09:30", activity: "International Standards Overview" },
      { time: "Day 1 - 11:00", activity: "Facility Design Principles" },
      { time: "Day 1 - 13:00", activity: "Lunch Break" },
      { time: "Day 1 - 14:00", activity: "Animal Welfare Guidelines" },
      { time: "Day 1 - 16:00", activity: "Site Visit to Animal Lab, Salemba" },
      { time: "Day 2 - 09:00", activity: "Quality Assurance Systems" },
      { time: "Day 2 - 11:00", activity: "Staff Training Programs" },
      { time: "Day 2 - 13:00", activity: "Lunch Break" },
      { time: "Day 2 - 14:00", activity: "Regulatory Compliance" },
      { time: "Day 2 - 16:00", activity: "Q&A and Closing" },
    ],
    speakers: [
      {
        name: "Prof. Irawan Satriotomo",
        affiliation: "University of Florida",
        topic: "International Laboratory Standards",
      },
      {
        name: "Dr. Veterinary Expert",
        affiliation: "Dexa Medica",
        topic: "Animal Welfare and Care",
      },
      {
        name: "Prof. Animal Science",
        affiliation: "IPB University",
        topic: "Facility Management",
      },
    ],
    gallery: [
      "/images/workshop-gallery1.jpg",
      "/images/workshop-gallery2.jpg",
      "/images/workshop-gallery3.jpg",
    ],
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
    fullDescription: `<p>This comprehensive workshop provided researchers and academics with essential strategies and practical tips for successfully publishing their research in reputable international journals.</p>

<p>Key topics covered in the workshop:</p>
<ul>
  <li>Understanding journal selection criteria and impact factors</li>
  <li>Manuscript structure and scientific writing best practices</li>
  <li>Peer review process and responding to reviewer comments</li>
  <li>Common pitfalls and how to avoid them</li>
  <li>Ethical considerations in scientific publishing</li>
  <li>Building a strong publication portfolio</li>
</ul>

<p>The workshop was facilitated by Dr. Irawan Satriotomo, M.D., Ph.D., who shared his extensive experience in international publishing and provided personalized guidance to participants.</p>

<p>Participants gained valuable insights into the publication process and practical tools to enhance their chances of successful publication in high-impact international journals.</p>`,
    schedule: [
      { time: "09:00 - 09:30", activity: "Registration and Welcome" },
      { time: "09:30 - 10:30", activity: "Journal Selection Strategies" },
      { time: "10:30 - 11:00", activity: "Coffee Break" },
      { time: "11:00 - 12:30", activity: "Scientific Writing Excellence" },
      { time: "12:30 - 13:30", activity: "Lunch Break" },
      { time: "13:30 - 15:00", activity: "Peer Review Process" },
      { time: "15:00 - 15:30", activity: "Coffee Break" },
      { time: "15:30 - 17:00", activity: "Q&A and Individual Consultations" },
    ],
    speakers: [
      {
        name: "Dr. Irawan Satriotomo",
        affiliation: "University of Florida & INI",
        topic: "International Publishing Strategies",
      },
    ],
    gallery: [
      "/images/publikasi-gallery1.jpg",
      "/images/publikasi-gallery2.jpg",
    ],
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
    fullDescription: `<p>Epilepsy 101 was a comprehensive educational seminar designed to provide healthcare professionals, students, and the general public with up-to-date knowledge about epilepsy diagnosis and management.</p>

<p>The seminar covered essential aspects of epilepsy care:</p>
<ul>
  <li>Modern understanding of epilepsy pathophysiology</li>
  <li>Diagnostic approaches and EEG interpretation</li>
  <li>Current treatment options and medication management</li>
  <li>Surgical interventions for refractory epilepsy</li>
  <li>Lifestyle modifications and patient counseling</li>
  <li>Psychosocial aspects of living with epilepsy</li>
</ul>

<p>The event featured expert speakers from neurology, neurosurgery, and related fields, providing a multidisciplinary perspective on epilepsy care.</p>

<p>This seminar was particularly valuable for medical students, residents, and practicing physicians seeking to enhance their understanding of epilepsy management.</p>`,
    schedule: [
      { time: "08:00 - 09:00", activity: "Registration" },
      { time: "09:00 - 09:30", activity: "Opening and Introduction" },
      { time: "09:30 - 10:30", activity: "Epilepsy Pathophysiology" },
      { time: "10:30 - 11:00", activity: "Coffee Break" },
      { time: "11:00 - 12:00", activity: "Diagnostic Approaches" },
      { time: "12:00 - 13:00", activity: "Lunch Break" },
      { time: "13:00 - 14:00", activity: "Treatment Strategies" },
      { time: "14:00 - 15:00", activity: "Surgical Options" },
      { time: "15:00 - 15:30", activity: "Coffee Break" },
      { time: "15:30 - 16:30", activity: "Patient Care and Counseling" },
      { time: "16:30 - 17:00", activity: "Q&A and Closing" },
    ],
    speakers: [
      {
        name: "Dr. Neurologist",
        affiliation: "RSCM Jakarta",
        topic: "Epilepsy Diagnosis",
      },
      {
        name: "Dr. Neurosurgeon",
        affiliation: "RS Fatmawati",
        topic: "Surgical Treatment",
      },
    ],
    gallery: [
      "/images/epilepsy-gallery1.jpg",
      "/images/epilepsy-gallery2.jpg",
    ],
  },
  {
    id: "workshop-neuroscience-2019",
    title: "Workshop Neuroscience: From Basic to Clinical",
    date: "2019-11-16",
    location: "Universitas YARSI, Cempaka Putih, Jakarta",
    description:
      "A comprehensive workshop bridging basic neuroscience research with clinical applications, featuring expert speakers and hands-on sessions.",
    imageUrl: "/images/workshop_neuroscience_2019.png",
    category: "past",
    fullDescription: `<p>This workshop provided a comprehensive overview of neuroscience, bridging the gap between basic research and clinical applications. Participants gained insights into cutting-edge neuroscience research and its practical implications in healthcare.</p>

<p>The workshop covered key areas including:</p>
<ul>
  <li>Fundamental principles of neuroscience</li>
  <li>Neuroanatomy and neurophysiology</li>
  <li>Neurodevelopment and neuroplasticity</li>
  <li>Neurodegenerative diseases</li>
  <li>Clinical neuroscience applications</li>
  <li>Research methodologies in neuroscience</li>
</ul>

<p>Expert speakers from leading institutions shared their research findings and clinical experiences, providing participants with a well-rounded understanding of the field.</p>

<p>The workshop was designed for medical students, researchers, clinicians, and anyone interested in understanding the complexities of the nervous system.</p>`,
    schedule: [
      { time: "08:30 - 09:00", activity: "Registration" },
      { time: "09:00 - 09:30", activity: "Opening Ceremony" },
      { time: "09:30 - 10:30", activity: "Basic Neuroscience Principles" },
      { time: "10:30 - 11:00", activity: "Coffee Break" },
      { time: "11:00 - 12:00", activity: "Neuroanatomy Overview" },
      { time: "12:00 - 13:00", activity: "Lunch Break" },
      { time: "13:00 - 14:00", activity: "Clinical Applications" },
      { time: "14:00 - 15:00", activity: "Research Methodologies" },
      { time: "15:00 - 15:30", activity: "Coffee Break" },
      { time: "15:30 - 16:30", activity: "Case Studies and Discussion" },
      { time: "16:30 - 17:00", activity: "Closing and Networking" },
    ],
    speakers: [
      {
        name: "Prof. Neuroscience Expert",
        affiliation: "University of Indonesia",
        topic: "Basic Neuroscience",
      },
      {
        name: "Dr. Clinical Neurologist",
        affiliation: "RSCM Jakarta",
        topic: "Clinical Applications",
      },
    ],
    gallery: [
      "/images/neuroscience-workshop-gallery1.jpg",
      "/images/neuroscience-workshop-gallery2.jpg",
    ],
  },
  {
    id: "seminar-stroke-2020",
    title: "Seminar Stroke: Prevention and Management",
    date: "2020-02-15",
    location: "Virtual Event (Online)",
    description:
      "An online seminar focusing on stroke prevention strategies and modern management approaches, adapted for the digital format during the pandemic.",
    imageUrl: "/images/seminar_stroke_2020.png",
    category: "past",
    fullDescription: `<p>This virtual seminar addressed the critical topic of stroke prevention and management, providing healthcare professionals and the public with essential knowledge about one of the leading causes of disability and death worldwide.</p>

<p>Key topics covered in the seminar:</p>
<ul>
  <li>Stroke epidemiology and risk factors</li>
  <li>Primary and secondary prevention strategies</li>
  <li>Acute stroke management and treatment protocols</li>
  <li>Rehabilitation and recovery approaches</li>
  <li>Community awareness and education</li>
  <li>Telemedicine applications in stroke care</li>
</ul>

<p>The seminar was conducted online to ensure safety during the COVID-19 pandemic, making it accessible to a wider audience while maintaining high-quality educational content.</p>

<p>Participants included healthcare professionals, medical students, and community members interested in stroke prevention and care.</p>`,
    schedule: [
      { time: "09:00 - 09:15", activity: "Virtual Check-in and Welcome" },
      { time: "09:15 - 10:00", activity: "Stroke Epidemiology" },
      { time: "10:00 - 10:15", activity: "Break" },
      { time: "10:15 - 11:00", activity: "Prevention Strategies" },
      { time: "11:00 - 11:15", activity: "Break" },
      { time: "11:15 - 12:00", activity: "Acute Management" },
      { time: "12:00 - 13:00", activity: "Lunch Break" },
      { time: "13:00 - 13:45", activity: "Rehabilitation Approaches" },
      { time: "13:45 - 14:00", activity: "Break" },
      { time: "14:00 - 14:45", activity: "Community Education" },
      { time: "14:45 - 15:30", activity: "Q&A and Closing" },
    ],
    speakers: [
      {
        name: "Dr. Stroke Specialist",
        affiliation: "RS Cipto Mangunkusumo",
        topic: "Stroke Management",
      },
      {
        name: "Prof. Rehabilitation Medicine",
        affiliation: "University of Indonesia",
        topic: "Stroke Rehabilitation",
      },
    ],
    gallery: [
      "/images/stroke-seminar-gallery1.jpg",
      "/images/stroke-seminar-gallery2.jpg",
    ],
  },
  {
    id: "brain-awareness-week-2024",
    title: "Brain Awareness Week 2024",
    date: "2024-03-10",
    location: "Multiple Locations, Indonesia",
    description:
      "A week-long celebration of the brain, featuring public lectures, workshops, and interactive exhibits designed to promote public awareness about brain research.",
    imageUrl: "/images/event2.jpg",
    category: "present",
    fullDescription: `<p>Brain Awareness Week (BAW) is a nationwide public engagement campaign that celebrates the progress and benefits of brain research. The 2024 edition in Indonesia features a diverse program of activities designed to engage people of all ages and backgrounds.</p>

<p>Key activities during the week include:</p>
<ul>
  <li>Public lectures on brain health and neuroscience research</li>
  <li>Interactive brain exhibits at science museums and public spaces</li>
  <li>School visits by neuroscientists to inspire the next generation</li>
  <li>Workshops on brain-healthy lifestyles and cognitive enhancement</li>
  <li>Art exhibitions exploring the intersection of neuroscience and creativity</li>
</ul>

<p>The event is coordinated by the Indonesian Neuroscience Society with support from universities, hospitals, and research institutions across the country. All activities are free and open to the public.</p>`,
    schedule: [
      {
        time: "March 10",
        activity: "Opening Ceremony and Public Lecture at National Museum",
      },
      { time: "March 11-12", activity: "School Visits Program in Jakarta" },
      {
        time: "March 13-14",
        activity: "Brain Health Workshops at Community Centers",
      },
      { time: "March 15", activity: "Neuroscience and Art Exhibition Opening" },
      {
        time: "March 16-17",
        activity: "Weekend Brain Fair at Central Park Mall",
      },
    ],
    speakers: [
      {
        name: "Prof. Budi Santoso",
        affiliation: "Universitas Gadjah Mada",
        topic: "Brain Health Across the Lifespan",
      },
      {
        name: "Dr. Lisa Chen",
        affiliation: "National University of Singapore",
        topic: "Learning and Memory",
      },
      {
        name: "Dr. Andi Wijaya",
        affiliation: "Indonesian Brain Foundation",
        topic: "Brain Injury Prevention",
      },
    ],
    gallery: ["/images/event2-gallery1.jpg", "/images/event2-gallery2.jpg"],
  },
  {
    id: "neuroscience-research-workshop",
    title: "Neuroscience Research Methods Workshop",
    date: "2024-05-20",
    location: "University of Indonesia, Jakarta",
    description:
      "An intensive workshop on advanced research methods in neuroscience, including hands-on training with cutting-edge equipment and techniques.",
    imageUrl: "/images/event3.jpg",
    category: "future",
    fullDescription: `<p>The Neuroscience Research Methods Workshop is an intensive three-day program designed for graduate students, postdoctoral researchers, and early-career scientists who want to expand their methodological toolkit in neuroscience research.</p>

<p>The workshop will cover:</p>
<ul>
  <li>Advanced neuroimaging techniques (fMRI, EEG, MEG)</li>
  <li>Cellular and molecular methods in neuroscience</li>
  <li>Computational approaches to neural data analysis</li>
  <li>Ethical considerations in neuroscience research</li>
  <li>Grant writing and research funding strategies</li>
</ul>

<p>Participants will have the opportunity to engage in hands-on sessions with state-of-the-art equipment and receive personalized feedback from experienced mentors. The workshop will also include networking events to foster collaboration among participants.</p>

<p>Registration is limited to 50 participants to ensure a high-quality learning experience. Early registration is recommended as previous workshops have reached capacity quickly.</p>`,
    schedule: [
      {
        time: "Day 1 - Morning",
        activity: "Introduction to Advanced Neuroimaging",
      },
      {
        time: "Day 1 - Afternoon",
        activity: "Hands-on fMRI Data Collection and Analysis",
      },
      { time: "Day 2 - Morning", activity: "Cellular and Molecular Methods" },
      {
        time: "Day 2 - Afternoon",
        activity: "Lab Practicum: Single-Cell Recording",
      },
      {
        time: "Day 3 - Morning",
        activity: "Computational Neuroscience Approaches",
      },
      {
        time: "Day 3 - Afternoon",
        activity: "Research Ethics and Grant Writing Workshop",
      },
    ],
    speakers: [
      {
        name: "Prof. David Lee",
        affiliation: "Stanford University",
        topic: "Neuroimaging Methods",
      },
      {
        name: "Dr. Siti Aminah",
        affiliation: "University of Indonesia",
        topic: "Cellular Neuroscience",
      },
      {
        name: "Dr. Michael Wong",
        affiliation: "MIT",
        topic: "Computational Neuroscience",
      },
    ],
    gallery: [],
    registration: {
      deadline: "2024-04-30",
      fee: "$250 (Students: $150)",
      link: "https://example.com/register",
      limitedSpots: 50,
    },
  },
  {
    id: "stroke-awareness-day",
    title: "National Stroke Awareness Day",
    date: "2023-10-29",
    location: "Bandung, Indonesia",
    description:
      "A public health event focused on stroke prevention, recognition, and treatment, featuring health screenings, educational sessions, and survivor testimonials.",
    imageUrl: "/images/event4.jpg",
    category: "past",
    fullDescription: `<p>National Stroke Awareness Day 2023 was a nationwide initiative to educate the public about stroke prevention, recognition, and the importance of timely treatment. The main event was held in Bandung, with satellite events in major cities across Indonesia.</p>

<p>The day featured:</p>
<ul>
  <li>Free stroke risk assessments and health screenings</li>
  <li>Educational sessions on recognizing stroke symptoms using the FAST method</li>
  <li>Survivor testimonials and recovery journeys</li>
  <li>Demonstrations of rehabilitation techniques</li>
  <li>Information booths from hospitals and stroke support organizations</li>
</ul>

<p>The event was organized by the Indonesian Stroke Society in collaboration with the Ministry of Health and reached over 10,000 people directly, with broader impact through media coverage and social media campaigns.</p>`,
    schedule: [
      {
        time: "08:00 - 10:00",
        activity: "Health Screenings and Risk Assessments",
      },
      { time: "10:00 - 11:30", activity: "Opening Ceremony and Expert Panel" },
      { time: "11:30 - 12:30", activity: "Stroke Survivor Stories" },
      { time: "12:30 - 13:30", activity: "Lunch Break" },
      {
        time: "13:30 - 15:00",
        activity: "Workshops: Recognizing Stroke Symptoms",
      },
      { time: "15:00 - 16:30", activity: "Rehabilitation Demonstrations" },
      { time: "16:30 - 17:00", activity: "Closing Ceremony" },
    ],
    speakers: [
      {
        name: "Dr. Bambang Sutrisno",
        affiliation: "Indonesian Stroke Society",
        topic: "Stroke Prevention",
      },
      {
        name: "Dr. Ratna Dewi",
        affiliation: "Hasan Sadikin Hospital",
        topic: "Acute Stroke Treatment",
      },
      {
        name: "Pak Joko",
        affiliation: "Stroke Survivor",
        topic: "My Recovery Journey",
      },
    ],
    gallery: [
      "/images/event4-gallery1.jpg",
      "/images/event4-gallery2.jpg",
      "/images/event4-gallery3.jpg",
      "/images/event4-gallery4.jpg",
    ],
  },
  {
    id: "neurodegenerative-diseases-conference",
    title: "Neurodegenerative Diseases Conference",
    date: "2024-07-15",
    location: "Bali International Convention Center",
    description:
      "A comprehensive conference on neurodegenerative diseases, bringing together clinicians, researchers, and industry representatives to discuss the latest treatments and research.",
    imageUrl: "/images/event5.jpg",
    category: "future",
    fullDescription: `<p>The Neurodegenerative Diseases Conference 2024 will be a premier scientific meeting focused on the latest advances in understanding, diagnosing, and treating conditions such as Alzheimer's disease, Parkinson's disease, ALS, and other neurodegenerative disorders.</p>

<p>The conference will feature:</p>
<ul>
  <li>Keynote lectures from world-renowned experts</li>
  <li>Symposia on emerging therapeutic approaches</li>
  <li>Oral and poster presentations of cutting-edge research</li>
  <li>Industry exhibitions showcasing the latest technologies and treatments</li>
  <li>Networking opportunities for researchers, clinicians, and industry representatives</li>
</ul>

<p>The beautiful setting of Bali provides an inspiring backdrop for this important scientific exchange. The conference is expected to attract over 800 delegates from around the world.</p>`,
    schedule: [
      {
        time: "Day 1",
        activity: "Alzheimer's Disease: Current Research and Treatment",
      },
      { time: "Day 2", activity: "Parkinson's Disease and Movement Disorders" },
      { time: "Day 3", activity: "ALS and Rare Neurodegenerative Conditions" },
      {
        time: "Day 4",
        activity: "Future Directions and Collaborative Research",
      },
    ],
    speakers: [
      {
        name: "Prof. Robert Chen",
        affiliation: "Johns Hopkins University",
        topic: "Alzheimer's Disease Biomarkers",
      },
      {
        name: "Dr. Elena Petrova",
        affiliation: "Oxford University",
        topic: "Gene Therapy for Neurodegenerative Diseases",
      },
      {
        name: "Prof. Takashi Yamada",
        affiliation: "Kyoto University",
        topic: "Stem Cell Approaches to Parkinson's Disease",
      },
      {
        name: "Dr. Anita Sharma",
        affiliation: "All India Institute of Medical Sciences",
        topic: "Neurodegenerative Diseases in Asia",
      },
    ],
    gallery: [],
    registration: {
      deadline: "2024-06-15",
      fee: "$500 (Early Bird: $400, Students: $250)",
      link: "https://example.com/register-neuro2024",
      limitedSpots: 800,
    },
  },
  {
    id: "brain-mapping-workshop",
    title: "Advanced Brain Mapping Techniques Workshop",
    date: "2024-02-28",
    location: "Yogyakarta, Indonesia",
    description:
      "A specialized workshop focusing on the latest brain mapping techniques, including fMRI, EEG, and other neuroimaging methods.",
    imageUrl: "/images/event6.jpg",
    category: "present",
    fullDescription: `<p>The Advanced Brain Mapping Techniques Workshop is a hands-on training program designed for researchers and clinicians who want to master cutting-edge neuroimaging and brain mapping methods.</p>

<p>This intensive workshop covers:</p>
<ul>
  <li>Functional MRI acquisition and analysis</li>
  <li>EEG recording and signal processing</li>
  <li>Multimodal imaging approaches</li>
  <li>Connectivity analysis and network neuroscience</li>
  <li>Applications in clinical and cognitive neuroscience</li>
</ul>

<p>Participants will work with real datasets and learn to use popular software packages for neuroimaging analysis. The workshop is led by experienced instructors from leading research institutions in Indonesia and international collaborators.</p>

<p>The workshop is currently in progress at Gadjah Mada University in Yogyakarta, with 40 participants from various institutions across Southeast Asia.</p>`,
    schedule: [
      {
        time: "Day 1",
        activity: "Introduction to Neuroimaging and Brain Mapping",
      },
      { time: "Day 2", activity: "fMRI Data Acquisition and Preprocessing" },
      { time: "Day 3", activity: "EEG Recording and Analysis" },
      { time: "Day 4", activity: "Multimodal Imaging and Integration" },
      { time: "Day 5", activity: "Advanced Analysis Methods and Applications" },
    ],
    speakers: [
      {
        name: "Dr. Wayan Putra",
        affiliation: "Gadjah Mada University",
        topic: "Neuroimaging in Indonesia",
      },
      {
        name: "Dr. Jennifer Smith",
        affiliation: "University College London",
        topic: "Advanced fMRI Methods",
      },
      {
        name: "Prof. Nguyen Van Minh",
        affiliation: "Vietnam National University",
        topic: "EEG Analysis",
      },
    ],
    gallery: ["/images/event6-gallery1.jpg", "/images/event6-gallery2.jpg"],
  },
  {
    id: "neuroscience-education-summit",
    title: "Neuroscience Education Summit",
    date: "2024-09-05",
    location: "Surabaya, Indonesia",
    description:
      "A summit dedicated to integrating neuroscience findings into educational practices, featuring presentations from neuroscientists and educators.",
    imageUrl: "/images/event7.jpg",
    category: "future",
    fullDescription: `<p>The Neuroscience Education Summit brings together neuroscientists, educators, policymakers, and educational technology developers to explore how insights from brain research can inform and improve educational practices.</p>

<p>Key themes of the summit include:</p>
<ul>
  <li>Brain development and its implications for learning at different ages</li>
  <li>Cognitive neuroscience of reading, mathematics, and language acquisition</li>
  <li>Neurodiversity and inclusive education approaches</li>
  <li>Technology-enhanced learning based on neuroscience principles</li>
  <li>Bridging the gap between neuroscience research and classroom practice</li>
</ul>

<p>The summit will feature keynote presentations, panel discussions, interactive workshops, and opportunities for educators to consult with neuroscience experts about specific learning challenges.</p>

<p>This event aims to foster collaboration between the scientific and educational communities to develop evidence-based approaches to teaching and learning.</p>`,
    schedule: [
      {
        time: "Day 1 - Morning",
        activity: "Opening and Keynote: Brain Development and Learning",
      },
      {
        time: "Day 1 - Afternoon",
        activity: "Parallel Sessions on Cognitive Domains",
      },
      {
        time: "Day 2 - Morning",
        activity: "Neurodiversity and Inclusive Education",
      },
      {
        time: "Day 2 - Afternoon",
        activity: "Technology and Brain-Based Learning",
      },
      { time: "Day 3", activity: "Workshops and Practical Applications" },
    ],
    speakers: [
      {
        name: "Prof. Susan Johnson",
        affiliation: "Harvard Graduate School of Education",
        topic: "Brain Development and Learning",
      },
      {
        name: "Dr. Budi Waluyo",
        affiliation: "University of Indonesia",
        topic: "Neuroscience of Reading",
      },
      {
        name: "Dr. Mei Lin Tan",
        affiliation: "National Institute of Education, Singapore",
        topic: "Mathematics and the Brain",
      },
      {
        name: "Prof. Agus Suwandi",
        affiliation: "Airlangga University",
        topic: "Neurodiversity in Indonesian Classrooms",
      },
    ],
    gallery: [],
    registration: {
      deadline: "2024-08-15",
      fee: "Rp 2,000,000 (Early Bird: Rp 1,500,000, Students: Rp 1,000,000)",
      link: "https://example.com/register-neuro-edu",
      limitedSpots: 300,
    },
  },
  {
    id: "brain-health-expo",
    title: "Brain Health Expo 2023",
    date: "2023-08-12",
    location: "Jakarta Exhibition Center",
    description:
      "An exhibition showcasing the latest products, services, and research related to brain health and cognitive enhancement.",
    imageUrl: "/images/event8.jpg",
    category: "past",
    fullDescription: `<p>The Brain Health Expo 2023 was Indonesia's largest exhibition dedicated to brain health, cognitive wellness, and neuroscience innovations. The event brought together healthcare providers, researchers, technology companies, and the general public.</p>

<p>The expo featured:</p>
<ul>
  <li>Exhibition booths showcasing the latest brain health products and services</li>
  <li>Free cognitive assessments and brain health screenings</li>
  <li>Demonstrations of neurofeedback and brain training technologies</li>
  <li>Seminars on topics such as nutrition for brain health, sleep optimization, and stress management</li>
  <li>Activities for children to learn about the brain in a fun, interactive way</li>
</ul>

<p>The event attracted over 5,000 visitors and featured more than 50 exhibitors from the healthcare, wellness, and technology sectors. The expo was organized by the Indonesian Brain Foundation in partnership with the Ministry of Health.</p>`,
    schedule: [
      { time: "Day 1", activity: "Exhibition Opening and Public Access" },
      {
        time: "Day 2",
        activity: "Professional Day: Healthcare Providers Focus",
      },
      { time: "Day 3", activity: "Family Day: Activities for All Ages" },
    ],
    speakers: [
      {
        name: "Dr. Hendro Susilo",
        affiliation: "Indonesian Brain Foundation",
        topic: "Brain Health Across the Lifespan",
      },
      {
        name: "Dr. Nadia Wong",
        affiliation: "Nutrition Science Institute",
        topic: "Diet and Cognitive Function",
      },
      {
        name: "Prof. James Peterson",
        affiliation: "Sleep Research Center",
        topic: "Sleep and Brain Health",
      },
    ],
    gallery: [
      "/images/event8-gallery1.jpg",
      "/images/event8-gallery2.jpg",
      "/images/event8-gallery3.jpg",
    ],
  },
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const event = events.find((event) => event.id === id);

  if (!event) {
    return {
      title: "Event Not Found | Neuroscience Indonesia",
      description: "The requested event could not be found.",
    };
  }

  return {
    title: `${event.title} | Neuroscience Indonesia`,
    description: event.description,
  };
}

type Params = Promise<{ id: string }>;

export default async function EventDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const event = events.find((event) => event.id === id);

  if (!event) {
    notFound();
  }

  // Format the date to be more readable
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Determine badge color based on category
  const getBadgeColor = () => {
    switch (event.category) {
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
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <EventImage
              src={IMAGE_URL}
              alt={event.title}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getBadgeColor()}`}
              >
                {event.category.charAt(0).toUpperCase() +
                  event.category.slice(1)}{" "}
                Event
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-white">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
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
                  {formattedDate}
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
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
                  {event.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div
          style={{
            background: "linear-gradient(135deg, #b0d0f0, #f3c8d5, #c7f0e5)",
          }}
          className=" py-5 px-4"
        >
          <div className="container mx-auto">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/events"
                className="hover:text-primary transition-colors"
              >
                Events
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{event.title}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border-[1px] border-gray-300 p-6 mb-8">
                <h2 className="text-2xl font-bold text-darkGray mb-4">
                  About This Event
                </h2>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                />
              </div>

              {/* Schedule */}
              {event.schedule && event.schedule.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-[1px] border-gray-300">
                  <h2 className="text-2xl font-bold text-darkGray mb-4">
                    Event Schedule
                  </h2>
                  <div className="space-y-4">
                    {event.schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="w-1/3 font-medium text-gray-900">
                          {item.time}
                        </div>
                        <div className="w-2/3 text-gray-700">
                          {item.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-[1px] border-gray-300">
                  <h2 className="text-2xl font-bold text-darkGray mb-4">
                    Featured Speakers
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-darkGray">
                            {speaker.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {speaker.affiliation}
                          </p>
                          <p className="text-sm text-primary mt-1">
                            {speaker.topic}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {event.gallery && event.gallery.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 border-[1px] border-gray-300">
                  <h2 className="text-2xl font-bold text-darkGray mb-4">
                    Event Gallery
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {event.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-video relative rounded-lg overflow-hidden"
                      >
                        <GalleryImage
                          src={IMAGE_URL}
                          alt={`${event.title} gallery image ${index + 1}`}
                          className="object-cover hover:scale-110 transition-transform duration-300 border-[1px] border-gray-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Event Details */}
              <div className="bg-white rounded-lg shadow-sm p-6 border-[1px] border-gray-300">
                <h3 className="text-xl font-bold text-darkGray mb-4">
                  Event Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
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
                    </div>
                    <div>
                      <h4 className="font-medium text-darkGray">Date</h4>
                      <p className="text-gray-600">{formattedDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
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
                    </div>
                    <div>
                      <h4 className="font-medium text-darkGray">Location</h4>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-darkGray">Category</h4>
                      <p className="text-gray-600">
                        {event.category.charAt(0).toUpperCase() +
                          event.category.slice(1)}{" "}
                        Event
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Info (for future events) */}
              {event.category === "future" && event.registration && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-darkGray mb-4">
                    Registration
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary"
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
                      </div>
                      <div>
                        <h4 className="font-medium text-darkGray">Deadline</h4>
                        <p className="text-gray-600">
                          {new Date(
                            event.registration.deadline
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-darkGray">
                          Registration Fee
                        </h4>
                        <p className="text-gray-600">
                          {event.registration.fee}
                        </p>
                      </div>
                    </div>

                    {event.registration.limitedSpots && (
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-darkGray">
                            Available Spots
                          </h4>
                          <p className="text-gray-600">
                            Limited to {event.registration.limitedSpots}{" "}
                            participants
                          </p>
                        </div>
                      </div>
                    )}

                    <a
                      href={event.registration.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors mt-6"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="bg-white rounded-lg shadow-sm p-6 border-[1px] border-gray-300">
                <h3 className="text-xl font-bold text-darkGray mb-4">
                  Share This Event
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      event.title
                    )}&url=${encodeURIComponent(
                      `https://neuroscience.id/events/${event.id}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors border-[1px] border-gray-300"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://neuroscience.id/events/${event.id}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors border-[1px] border-gray-300"
                    aria-label="Share on Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      `https://neuroscience.id/events/${event.id}`
                    )}&title=${encodeURIComponent(event.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors border-[1px] border-gray-300"
                    aria-label="Share on LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(
                      event.title
                    )}&body=${encodeURIComponent(
                      `Check out this event: https://neuroscience.id/events/${event.id}`
                    )}`}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors border-[1px] border-gray-300"
                    aria-label="Share via Email"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Related Events */}
              <div className="bg-white rounded-lg shadow-sm p-6 border-[1px] border-gray-300">
                <h3 className="text-xl font-bold text-darkGray mb-4">
                  Related Events
                </h3>
                <div className="space-y-4">
                  {events
                    .filter(
                      (e) => e.id !== event.id && e.category === event.category
                    )
                    .slice(0, 3)
                    .map((relatedEvent) => (
                      <Link
                        key={relatedEvent.id}
                        href={`/events/${relatedEvent.id}`}
                        className="flex items-start group border-[1px] border-gray-300 p-3 rounded-lg"
                      >
                        <div className="w-20 h-16 relative rounded overflow-hidden flex-shrink-0">
                          <RelatedEventImage
                            src={IMAGE_URL}
                            alt={relatedEvent.title}
                            className="object-cover group-hover:scale-110 transition-transform duration-300 border-[1px] border-gray-300"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-darkGray group-hover:text-primary transition-colors line-clamp-2">
                            {relatedEvent.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(relatedEvent.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </Link>
                    ))}

                  {events.filter(
                    (e) => e.id !== event.id && e.category === event.category
                  ).length === 0 && (
                    <p className="text-sm text-gray-500">
                      No related events found.
                    </p>
                  )}

                  <Link
                    href="/events"
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center mt-2"
                  >
                    View All Events
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
