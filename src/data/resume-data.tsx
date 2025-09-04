import {
  GitHubIcon,
  LinkedInIcon,
  HuggingFaceIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Devasheesh Mishra",
  initials: "DM",
  location: "San Francisco, USA",
  locationLink: "https://www.google.com/maps/place/San+Francisco",
  personalWebsiteUrl: "https://devasheeshmishra.com",
  about:
    "Founder and CEO of Recallr AI, building long term memory layer for conversational AI agents.",
  summary: (
    <>
      Founder and CEO of Recallr AI, building long-term memory for
      conversational AI agents. Was selected for Y Combinator&apos;s first ever
      AI Startup School among 2,000 top CS students globally.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/72092910?v=4",
  contact: {
    email: "devasheeshmishra4@gmail.com",
    tel: "+16287264020",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/devasheeshG",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/devasheesh-mishra/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/0xdevasheesh",
        icon: XIcon,
      },
      {
        name: "HuggingFace",
        url: "https://huggingface.co/devasheeshG",
        icon: HuggingFaceIcon,
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/919319772072",
        icon: WhatsAppIcon,
      },
    ],
  },
  education: [
    // {
    //   school: "University of California, Berkeley",
    //   degree: "Entrepreneurship and Technology (Scholarship Recipient)",
    //   start: "2025",
    //   end: "2026",
    // },
    {
      school: "SRM Institute of Science and Technology",
      degree:
        "Bachelor of Technology in Computer Science, Specialization in AI and ML; CGPA: 8.2",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Recallr AI Inc.",
      link: "https://recallrai.com",
      location: "On-site",
      badges: ["AI", "Memory Systems", "Y Combinator"],
      title: "Founder and CEO",
      logoUrl: "https://avatars.githubusercontent.com/u/193800346?v=4",
      start: "2025",
      end: null,
      description: (
        <>
          Building Long term memory for conversational AI agents, enabling them
          to remember and recall information across sessions.
          <ul className="list-inside list-disc">
            <li>
              Got selected for an interview at Y Combinator for the Summer 2025
              batch
            </li>
            <li>Currently raising a pre-seed round of funding</li>
          </ul>
        </>
      ),
    },
    {
      company: "Stapes AI",
      link: "https://stapes.ai",
      location: "On-site",
      badges: ["AI", "IoT", "Home Automation", "Startup"],
      title: "Founder and CEO",
      logoUrl: "https://avatars.githubusercontent.com/u/99021598?v=4",
      start: "2024",
      end: "2025",
      description: (
        <>
          Founded an AI Home Automation company, successfully shipping v1.0 of
          the product in a month and acquired 50+ beta testers.
          <ul className="list-inside list-disc">
            <li>
              Developed high-end home automation solution with Smart TV, Fire
              Stick, and switch board integrations
            </li>
            <li>
              Selected for buildspace&apos;s Nights & Weekends S5 program,
              backed by Y Combinator and a16z
            </li>
            <li>Now whitelabeling the home automation tech to other players</li>
          </ul>
        </>
      ),
    },
    {
      company: "Proeffico Solutions Pvt. Ltd.",
      link: "https://proeffico.com",
      location: "On-site",
      badges: ["AI/ML", "Computer Vision", "Databases"],
      title: "AI/ML Engineer Intern",
      logoUrl:
        "https://proeffico.com/wp-content/uploads/2023/09/Copy-of-proeffico-logo-1.png",
      start: "2024",
      end: "2024",
      description: (
        <>
          Developed AI solutions for enterprise clients and internal tools.
          <ul className="list-inside list-disc">
            <li>
              Developed &ldquo;RDBMS Chat&rdquo;, enabling non-technical staff
              to query databases using natural language
            </li>
            <li>Provided IT infrastructure support for servers and VMs</li>
          </ul>
        </>
      ),
    },
    {
      company: "Buildspace",
      link: "https://buildspace.so",
      location: "Remote",
      badges: ["Startup Accelerator", "Product Development"],
      title: "Builder, Nights & Weekends S5",
      logoUrl: "https://avatars.githubusercontent.com/u/65048157?v=4",
      start: "2024",
      end: "2024",
      description: (
        <>
          Selected for an exclusive startup program backed by Y Combinator and
          a16z.
          <ul className="list-inside list-disc">
            <li>
              Accelerated development of Stapes AI through community feedback
              and mentorship
            </li>
            <li>
              Applied skills in Python, Flutter, and embedded systems (ESP IDF)
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "GeeksForGeeks",
      link: "https://geeksforgeeks.org",
      location: "On-site",
      badges: ["Education", "ML Workshops"],
      title: "Technical Lead",
      logoUrl: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
      start: "2024",
      end: "2025",
      description: (
        <>
          Leading technical education and community building initiatives.
          <ul className="list-inside list-disc">
            <li>Conducted comprehensive ML workshops for 80+ students</li>
            <li>
              Organized 10+ GeeksforGeeks workshops, enhancing coding
              proficiency for 200+ students
            </li>
            <li>Led a team of 8 technical staff managing project timelines</li>
          </ul>
        </>
      ),
    },
    {
      company: "GeeksForGeeks",
      link: "https://geeksforgeeks.org",
      location: "On-site",
      badges: ["Hackathons", "Community Building"],
      title: "Core Technical Team Member",
      logoUrl: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
      start: "2022",
      end: "2024",
      description: (
        <>
          Core member organizing technical events and hackathons.
          <ul className="list-inside list-disc">
            <li>Organized Phoenix Hackathon where I achieved 1st place</li>
            <li>
              Led Hack-Innovate, attracting 300+ participants with 50+ solutions
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "Transformers",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "Azure",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "LLMs",
    "Fine-tuning",
    "ESP32/Arduino",
    "Raspberry Pi",
    "Kafka",
    "Prometheus",
    "Grafana",
  ],
  projects: [
    {
      title: "Automatic Speech Recognition System",
      techStack: [
        "PyTorch",
        "Transformers",
        "FastAPI",
        "WebSockets",
        "Whisper",
      ],
      description:
        "Fine-tuned 2x Whisper models (750M & 1.1B parameters) for Hindi using 10,000 hours of audio. Achieved RTF of 0.3 and reduced inference latency to 200-300ms.",
      link: {
        label: "github.com/stapesai/ASR",
        href: "https://github.com/stapesai/ASR",
      },
    },
    {
      title: "You Education - AI Powered Learning Platform",
      techStack: ["NextJS", "Azure OpenAI", "Vector Databases", "MongoDB"],
      description:
        "AI-powered educational platform with interactive mind maps, intelligent content generation, and context-aware video recommendations using Azure OpenAI Vision.",
      link: {
        label: "github.com/devasheeshG/you-education",
        href: "https://github.com/devasheeshG/you-education",
      },
    },
  ],
  achievements: [
    {
      title: "Y Combinator's AI Startup School",
      description:
        "Selected among 2,000 top CS students globally to attend YC's first-ever AI Startup School in San Francisco.",
      year: "2024",
      link: "https://www.ycombinator.com/events/ai-startup-school",
    },
    {
      title: "Google InnoSprint Hackathon",
      description: "1st runner up",
      year: "2023",
      link: "https://www.linkedin.com/posts/devasheesh-mishra_hackathon-innosprint-innovation-activity-7162092090531721216-6BG5",
    },
    {
      title: "Phoenix Hackathon",
      description: "Secured 1st position",
      year: "2022",
      link: "https://www.linkedin.com/posts/devasheesh-mishra_srmist-srmuniversity-hackathon-activity-7162482926939492352-rLm4",
    },
    {
      title: "Code-A-Thon",
      description: "1st runner up",
      year: "2022",
      link: "https://www.linkedin.com/posts/devasheesh-mishra_hackathonrunnerup-innovativeexcellence-srmist-activity-7162845340889440256-HPDg",
    },
    {
      title: "Live-Project Competition",
      description: "2nd runner up",
      year: "2023",
      link: "https://www.linkedin.com/posts/devasheesh-mishra_hackathonachievement-innovativeexcellence-activity-7163207701899010048-XfRD",
    },
    {
      title: "SIH",
      description: "1st runner up at college level",
      year: "2023",
      link: "",
    },
  ],
  certifications: [
    {
      title: "Data Mining",
      issuer: "IIT, Kharagpur",
      link: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs19/Course/NPTEL25CS19S33410015201270688.pdf",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      link: "https://www.coursera.org/account/accomplishments/verify/99QU336GC55A",
    },
    {
      title: "PyTorch for Deep Learning Bootcamp",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-27f41189-16ca-4c1e-8ff4-628c9400c607/",
    },
  ],
  extracurricular: [
    {
      position: "Course Instructor",
      organization: "GeeksForGeeks",
      period: "September 2024 - Present",
    },
    {
      position: "Assistant Course Assistant",
      organization: "GeeksForGeeks",
      period: "July 2024 - September 2024",
    },
  ],
};
