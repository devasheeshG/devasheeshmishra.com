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
    about: "Founder and CEO of Recallr AI, building long term memory layer for conversational AI agents.",
    summary: (
        <>
            Founder and CEO of Recallr AI, building long-term memory for
            conversational AI agents. Was selected for Y Combinator&apos;s first
            ever AI Startup School among 2,000 top CS students globally.
        </>
    ),
    avatarUrl: "https://avatars.githubusercontent.com/u/72092910?v=4",
    contact: {
        email: "devasheesh@recallrai.com",
        tel: "+14152120310",
        tel2: "+919319772072",
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
        {
            school: "SRM Institute of Science and Technology",
            degree: "Bachelor of Technology in Computer Science, Specialization in AI and ML; CGPA: 8.5",
            start: "2022",
            end: "2026",
        },
    ],
    work: [
        {
            company: "Recallr AI Inc.",
            link: "https://recallrai.com",
            location: "San Francisco, USA",
            badges: ["AI", "Memory Systems", "Y Combinator"],
            title: "Founder and CEO",
            logoUrl: "/recallrai-logo.png",
            start: "2025",
            end: null,
            description: (
                <>
                    Building Long term memory for conversational AI agents,
                    enabling them to remember and recall information across
                    sessions.
                    <ul className="list-inside list-disc">
                        <li>
                            Got selected for an interview at Y Combinator for
                            the Summer 2025 batch
                        </li>
                        <li>Currently raising a pre-seed round of funding</li>
                    </ul>
                </>
            ),
        },
        {
            company: "Founders, Inc.",
            link: "https://f.inc/canopy",
            location: "San Francisco, California, United States",
            badges: ["Startup Program", "San Francisco"],
            title: "Canopy 2026",
            logoUrl: "/founders-inc-logo.jpg",
            start: "2026",
            end: "2026",
            description: (
                <>
                    Selected for Canopy 2026, a 5-week intensive builder program
                    at Founders, Inc.&apos;s San Francisco campus.
                    <ul className="list-inside list-disc">
                        <li>One of 100 teams selected globally</li>
                        <li>
                            Built alongside founders across software, hardware,
                            and media verticals
                        </li>
                    </ul>
                </>
            ),
        },
        {
            company: "MIRA",
            link: "https://www.trymira.com",
            location: "San Francisco, California, United States",
            badges: [],
            title: "AI/ML Engineer",
            logoUrl: "/mira-logo.png",
            start: "Sep 2025",
            end: "Nov 2025",
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Real-Time Streaming Speech-to-Text Pipeline: Designed
                        and implemented a low-latency, WebSocket-based streaming
                        transcription system using Soniox STT models
                        (stt-rt-preview-v2), with real-time speaker diarization,
                        silence detection, and multilingual translation. Built
                        a comprehensive benchmarking framework to evaluate ASR
                        performance across Soniox, Deepgram, Google, and
                        AssemblyAI using metrics such as word error rate,
                        latency, and speaker attribution accuracy. Used
                        empirical results to guide model selection and system
                        design decisions.
                    </li>
                    <li>
                        Voice Fingerprinting and Speaker Verification:
                        Engineered an end-to-end voice biometric pipeline
                        covering user enrollment, audio signal serialization,
                        PostgreSQL storage, and real-time speaker identification.
                        Used SpeechBrain&apos;s ECAPA-TDNN model trained on
                        VoxCeleb to generate and compare speaker embeddings.
                        Deployed the system as a standalone FastAPI microservice
                        on AWS ECS, with parallel cosine-similarity verification
                        across diarized speaker segments, enabling identification
                        of the user&apos;s voice against ambient speakers with
                        under 200 ms inference latency.
                    </li>
                    <li>
                        Long-Term Memory Extraction from Personal Data: Built an
                        LLM-powered memory extraction pipeline using Gemini 2.0
                        Flash to process a user&apos;s Gmail corpus and identify
                        persistent signals such as personality traits, areas of
                        expertise, preferences, and behavioral patterns.
                        Structured the extracted information into long-term user
                        knowledge representations, enabling AI agents to
                        maintain contextual memory beyond individual
                        conversations.
                    </li>
                </ul>
            ),
        },
        {
            company: "Stapes AI",
            link: "https://github.com/stapesai",
            location: "Delhi, India",
            badges: ["AI", "IoT", "Home Automation", "Startup"],
            title: "Founder and CEO",
            logoUrl: "https://avatars.githubusercontent.com/u/99021598?v=4",
            start: "2024",
            end: "2025",
            description: (
                <>
                    Founded an AI Home Automation company, successfully shipping
                    v1.0 of the product in a month and acquired 50+ beta
                    testers.
                    <ul className="list-inside list-disc">
                        <li>
                            Developed a high-end home automation solution with
                            integrations for Smart TVs, Fire Sticks, and switch
                            boards, enabling control via voice and mobile app.
                            Planned to develop a circular custom device like
                            alexa echo show with a 7-inch display for a
                            complete home automation experience.
                        </li>
                        <li>
                            Selected for buildspace&apos;s Nights & Weekends S5
                            program, a startup accelerator backed by Y
                            Combinator and a16z.
                        </li>
                        <li>
                            Now whitelabeling the home automation tech to other
                            players. Planning to restart the company with more
                            focus on AI after aquisition.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            company: "Proeffico Solutions Private Ltd.",
            link: "https://proeffico.com",
            location: "Noida, India",
            badges: ["AI/ML", "Computer Vision", "Databases"],
            title: "AI/ML Engineer Intern",
            logoUrl:
                "https://proeffico.com/wp-content/uploads/2023/09/Copy-of-proeffico-logo-1.png",
            start: "2024",
            end: "2024",
            description: (
                <>
                    Developed AI solutions for enterprise clients and internal
                    tools.
                    <ul className="list-inside list-disc">
                        <li>
                            Developed &ldquo;RDBMS Chat&rdquo;, an internal AI
                            tool enabling non-technical staff to query complex
                            databases using natural language, enhancing data
                            accessibility and decision-making processes.
                        </li>
                        <li>
                            Provided IT infrastructure support for servers and
                            VMs, ensuring operational stability for various
                            backend systems.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            company: "Buildspace",
            link: "https://buildspace.so",
            location: "San Francisco, USA",
            badges: ["Startup Accelerator", "Product Development"],
            title: "Builder, Nights & Weekends S5",
            logoUrl: "https://avatars.githubusercontent.com/u/65048157?v=4",
            start: "2024",
            end: "2024",
            description: (
                <>
                    Selected for an exclusive startup program backed by Y
                    Combinator and a16z, focused on rapid product development
                    of Stapes AI.
                    <ul className="list-inside list-disc">
                        <li>
                            Accelerated development of Stapes AI through
                            community feedback, mentorship, and rapid
                            prototyping.
                        </li>
                        <li>
                            Applied skills in Python, Flutter, and embedded
                            systems (ESP IDF) to develop and refine product
                            offerings.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            company: "GeeksForGeeks",
            link: "https://geeksforgeeks.org",
            location: "New Delhi, India",
            badges: ["Education", "ML Workshops"],
            title: "Technical Lead",
            logoUrl: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
            start: "2024",
            end: "2025",
            description: (
                <>
                    Leading technical education and community building
                    initiatives.
                    <ul className="list-inside list-disc">
                        <li>
                            Conducted comprehensive machine learning workshops
                            for 80+ students, teaching essential ML and DL
                            principles and applications, which enhanced
                            participants&apos; practical skills.
                        </li>
                        <li>
                            Organized and led 10+ GeeksforGeeks (GFG) workshops
                            across SRM, facilitating doubt clearance sessions
                            that enhanced coding proficiency for over 200
                            students.
                        </li>
                        <li>
                            Led a team of 8 technical staff and manage project
                            timelines for various initiatives, applying
                            experience in troubleshooting and server management.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            company: "GeeksForGeeks",
            link: "https://geeksforgeeks.org",
            location: "New Delhi, India",
            badges: ["Hackathons", "Community Building"],
            title: "Core Technical Team Member",
            logoUrl: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
            start: "2022",
            end: "2024",
            description: (
                <>
                    Core member organizing technical events and hackathons.
                    <ul className="list-inside list-disc">
                        <li>
                            Contributed as a Core Member of GFG, organizing the
                            Phoenix Hackathon, where I achieved 1st place.
                        </li>
                        <li>
                            Organized and led Hack-Innovate, a two-day hackathon
                            during the tech fest, attracting over 300
                            participants and showcasing 50+ innovative
                            solutions.
                        </li>
                    </ul>
                </>
            ),
        },
    ],
    skills: [
        "Python",
        "C/C++",
        "JS/TS",
        "PyTorch",
        "Transformers",
        "Pydantic",
        "FastAPI",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Azure",
        "Docker",
        "Kubernetes",
        "Portainer",
        "Traefik",
        "Harbor",
        "Terraform",
        "GitLab CI",
        "GitHub Actions",
        "PostgreSQL",
        "MongoDB",
        "Milvus",
        "Minio",
        "Redis",
        "Neo4j",
        "Kafka",
        "Rabbit MQ",
        "Pytest",
        "Selenium",
        "Prometheus",
        "Grafana",
        "Loki",
        "Promtail",
        "Alert Manager",
        "ESP IDF",
        "PlatformIO",
        "ESP32/Arduino",
        "ESP32-CAM",
        "NodeMCU",
        "Raspberry Pi",
        "LLMs",
        "Fine-tuning",
    ],
    projects: [
        /*
        {
            title: "Universal TV Remote for Mac",
            techStack: [
                "Swift",
                "SwiftUI",
                "Bonjour",
                "SSDP",
                "WebSockets",
            ],
            description:
                "A native macOS menu-bar remote for every smart TV on your network — Fire TV, Android TV, Samsung, LG, and Roku — auto-discovered, no configuration, no cloud. Built with Swift/SwiftUI as a lightweight ~1 MB binary. Supports full remote control, keyboard text input, app shortcuts, and one-time pairing with persistent tokens.",
            link: {
                label: "github.com/devasheeshG/universal-tv-remote-macos",
                href: "https://github.com/devasheeshG/universal-tv-remote-macos",
            },
        },
        {
            title: "yc-api",
            techStack: [
                "Python",
                "Playwright",
                "OpenAI",
                "GitHub Pages",
            ],
            description:
                "A free, open JSON API over the entire Y Combinator Startup Directory — with transcribed application and demo day videos. Built for founders, indie hackers, and researchers to query YC startup data — filtering by batch, industry, hiring status, and more — without writing scrapers from scratch.",
            link: {
                label: "github.com/devasheeshG/yc-api",
                href: "https://github.com/devasheeshG/yc-api",
            },
        },
        */
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
                "Fine-tuned 2x Whisper models (750M & 1.1B parameters) for Hindi using 10,000 hours of audio from the Gram Vani Dataset. Achieved Real-Time Factor (RTF) of 0.3 and reduced inference latency to 200-300ms for 30s audio chunks. Implemented data cleaning, Voice Activity Detection (VAD), and increased decoding heads for improved performance. Developed low-latency server using FastAPI and WebSockets, incorporating speculative decoding and Medusa technique.",
            link: {
                label: "github.com/stapesai/ASR",
                href: "https://github.com/stapesai/ASR",
            },
        },
        {
            title: "You Education - AI Powered Learning Platform",
            techStack: [
                "NextJS",
                "Azure OpenAI",
                "Vector Databases",
                "MongoDB",
            ],
            description:
                "Engineered backend infrastructure for an AI-powered educational platform that transforms traditional learning through interactive mind maps and intelligent content generation. Implemented AI syllabus extraction using Azure OpenAI Vision to automatically parse educational curricula into structured hierarchical data. Designed and built a context-aware video recommendation system that intelligently curates relevant YouTube educational content. Created a robust notes generation system that produces comprehensive study materials using advanced language models.",
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
            year: "2025",
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
            period: "September 2024 - April 2026",
        },
        {
            position: "Assistant Course Instructor",
            organization: "GeeksForGeeks",
            period: "July 2024 - September 2024",
        },
    ],
};
