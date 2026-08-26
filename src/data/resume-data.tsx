import {
    GitHubIcon,
    HuggingFaceIcon,
    LinkedInIcon,
    WhatsAppIcon,
    XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
    name: "Devasheesh Mishra",
    initials: "DM",
    location: "San Francisco, USA",
    locationLink: "https://www.google.com/maps/place/San+Francisco",
    personalWebsiteUrl: "https://devasheeshmishra.com",
    about: "Founder and CTO of Recallr AI and AI/ML engineer specializing in conversational memory, retrieval systems, speech AI, and production LLM infrastructure; previously founded an acquired AI home-automation startup. Authoring three studies on scalable long-term memory, retrieval-free parametric memory, and hallucination dynamics in small language models. Selected for Founders, Inc.'s Canopy 2026 and Y Combinator's AI Startup School 2025.",
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
            location: "San Francisco, USA — On-site",
            badges: ["AI", "Enterprise Memory", "Private Capital"],
            title: "Founder and CTO",
            logoUrl: "/recallrai-logo.png",
            start: "January 2025",
            end: null,
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Built Recallr, a persistent, queryable long-term memory
                        layer for conversational AI systems that retains facts,
                        preferences, relationships, and decisions across
                        multiple conversations while preserving the source of
                        each memory. Architected its ingestion pipeline,
                        evolving knowledge graph, semantic retrieval, temporal
                        reasoning, knowledge-update handling, and configurable
                        merge and conflict-resolution rules.
                    </li>
                    <li>
                        Evaluated Recallr on the{" "}
                        <a
                            href="https://github.com/recallrai/benchmarks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            LongMemEval benchmark
                        </a>
                        , achieving 97.5% overall accuracy, including 97.0%
                        temporal-reasoning accuracy and 97.4% knowledge-update
                        accuracy. Delivered P95 latency of 408 ms for
                        Low-Latency recall, 1.575 seconds for Balanced recall,
                        and 8.619 seconds for Agentic recall.
                    </li>
                    <li>
                        Evolved Recallr into the intelligence and memory layer
                        for private capital, transforming fragmented deal memos,
                        data rooms, diligence, meeting transcripts, partner
                        notes, filings, returns, and investment-committee
                        history into a continuously updated, queryable decision
                        graph that preserves how a firm&apos;s investment
                        judgment evolves over time.
                    </li>
                </ul>
            ),
        },
        {
            company: "Founders, Inc.",
            link: "https://f.inc/canopy",
            location: "San Francisco, California, United States — On-site",
            badges: ["Startup Program", "San Francisco"],
            title: "Canopy 2026",
            logoUrl: "/founders-inc-logo.jpg",
            start: "March 2026",
            end: "May 2026",
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Selected as one of 100 teams globally for Canopy 2026, a
                        five-week on-site builder residency at Founders,
                        Inc.&apos;s San Francisco campus.
                    </li>
                    <li>
                        Built and commercialized Recallr&apos;s memory layer for
                        conversational AI systems during the program, acquiring
                        multiple clients and generating approximately $15,000 in
                        revenue.
                    </li>
                </ul>
            ),
        },
        {
            company: "MIRA",
            link: "https://www.trymira.com",
            location: "San Francisco, California, United States — Remote",
            badges: [],
            title: "AI/ML Engineer",
            logoUrl: "/mira-logo.png",
            start: "September 2025",
            end: "November 2025",
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Real-Time Streaming Speech-to-Text Pipeline: Designed
                        and implemented a low-latency, WebSocket-based streaming
                        transcription system using Soniox STT models
                        (stt-rt-preview-v2), with real-time speaker diarization,
                        silence detection, and multilingual translation. Built a
                        comprehensive benchmarking framework to evaluate ASR
                        performance across Soniox, Deepgram, Google, and
                        AssemblyAI using word error rate, latency, and
                        speaker-attribution accuracy, then used the results to
                        guide model selection and system design.
                    </li>
                    <li>
                        Voice Fingerprinting and Speaker Verification:
                        Engineered an end-to-end voice-biometric pipeline
                        covering user enrollment, audio serialization,
                        PostgreSQL storage, and real-time speaker
                        identification. Used SpeechBrain&apos;s ECAPA-TDNN model
                        trained on VoxCeleb to generate and compare speaker
                        embeddings. Deployed the system as a standalone FastAPI
                        microservice on AWS ECS, with parallel cosine-similarity
                        verification across diarized speaker segments,
                        identifying the enrolled user among ambient speakers
                        with under 200 ms inference latency.
                    </li>
                    <li>
                        Long-Term Memory Extraction from Personal Data: Built an
                        LLM-powered memory-extraction pipeline using Gemini 2.0
                        Flash to process a user&apos;s Gmail corpus and identify
                        durable signals such as personality traits, expertise,
                        preferences, and behavioral patterns. Structured the
                        extracted information into long-term user knowledge
                        representations, enabling AI agents to maintain context
                        across conversations.
                    </li>
                </ul>
            ),
        },
        {
            company: "Stapes AI",
            link: "https://github.com/stapesai",
            location: "Delhi, India — On-site",
            badges: ["AI", "IoT", "Home Automation", "Startup"],
            title: "Founder and CEO",
            logoUrl: "https://avatars.githubusercontent.com/u/99021598?v=4",
            start: "May 2024",
            end: "January 2025",
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Founded an AI home-automation company, shipped v1.0
                        within one month, onboarded 50+ beta testers, and led
                        the company through acquisition.
                    </li>
                    <li>
                        Developed a home-automation platform integrating smart
                        TVs, Fire TV devices, and switchboards, with control
                        through voice and mobile apps; designed custom PCBs and
                        ESP32 firmware for the device stack.
                    </li>
                    <li>
                        Admitted to Buildspace&apos;s Nights & Weekends S5
                        program, backed by Y Combinator and a16z; subsequently
                        white-labeled the home-automation technology for other
                        operators.
                    </li>
                </ul>
            ),
        },
        {
            company: "Proeffico Solutions Private Ltd.",
            link: "https://proeffico.com",
            location: "Noida, India — On-site",
            badges: ["AI/ML", "Computer Vision", "Databases"],
            title: "AI/ML Engineer Intern",
            logoUrl:
                "https://proeffico.com/wp-content/uploads/2023/09/Copy-of-proeffico-logo-1.png",
            start: "August 2024",
            end: "September 2024",
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Engineered and deployed a real-time
                        shoplifting-detection system across retail locations,
                        validating it with live on-site video feeds for a global
                        client.
                    </li>
                    <li>
                        Developed RDBMS Chat, an internal conversational AI tool
                        that enabled non-technical staff to query complex
                        relational databases in natural language, improving
                        access to operational data and insights.
                    </li>
                    <li>
                        Supported internal servers and virtual machines, helping
                        maintain operational stability for backend systems
                        across multiple projects.
                    </li>
                </ul>
            ),
        },
        {
            company: "Buildspace",
            link: "https://buildspace.so",
            location: "San Francisco, USA — Remote",
            badges: ["Startup Program", "Product Development"],
            title: "Builder, Nights & Weekends S5",
            logoUrl: "https://avatars.githubusercontent.com/u/65048157?v=4",
            start: "June 2024",
            end: "August 2024",
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Joined a startup program backed by Y Combinator and
                        a16z, focused on rapid product development for Stapes
                        AI.
                    </li>
                    <li>
                        Accelerated Stapes AI through community feedback,
                        mentorship, rapid prototyping, and successive product
                        iterations.
                    </li>
                    <li>
                        Applied Python, Flutter, and embedded-systems
                        development with ESP-IDF to refine the product&apos;s
                        software and hardware stack.
                    </li>
                </ul>
            ),
        },
        {
            company: "GeeksforGeeks",
            link: "https://geeksforgeeks.org",
            location: "New Delhi, India — On-site",
            badges: ["Education", "ML Workshops"],
            title: "Technical Lead",
            logoUrl: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
            start: "April 2024",
            end: "February 2026",
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Conducted hands-on machine-learning and deep-learning
                        workshops for 80+ students, teaching core principles and
                        practical applications.
                    </li>
                    <li>
                        Organized and led 10+ GeeksforGeeks workshops across
                        SRM, including coding-support sessions that reached more
                        than 200 students.
                    </li>
                    <li>
                        Managed eight technical contributors and project
                        timelines while supporting troubleshooting and server
                        operations for chapter initiatives.
                    </li>
                </ul>
            ),
        },
        {
            company: "GeeksforGeeks",
            link: "https://geeksforgeeks.org",
            location: "New Delhi, India — On-site",
            badges: ["Hackathons", "Community Building"],
            title: "Core Technical Team Member",
            logoUrl: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
            start: "October 2022",
            end: "April 2024",
            description: (
                <ul className="list-inside list-disc">
                    <li>
                        Contributed as a core member while organizing the
                        Phoenix Hackathon, where I also won first place.
                    </li>
                    <li>
                        Organized Hack-Innovate, a two-day hackathon that
                        attracted 300+ participants and showcased more than 50
                        project submissions.
                    </li>
                </ul>
            ),
        },
    ],
    research: [
        {
            title: "A Name Is Not a Memory: Relational Binding in Continual Parametric Memory for Conversational Agents",
            link: null,
            status: "In Progress",
            start: "Aug 2026",
            end: null,
            description: (
                <ul className="list-inside list-disc space-y-1">
                    <li>
                        <strong>Goal:</strong> Develop{" "}
                        <strong>retrieval-free</strong> long-term memory for
                        conversational agents by encoding user-specific
                        knowledge in persistent LoRA adapters on a frozen
                        language model; evaluate how parametric memory compares
                        with retrieval-based systems such as Recallr AI on
                        retention, identity binding, continual updates, and
                        cross-user interference; and explore a scalable
                        multi-LoRA architecture inspired by Mixture-of-Experts
                        routing.
                    </li>
                </ul>
            ),
        },
        {
            title: "Hallucination Dynamics in Small Language Models: A Large-Scale Empirical Study",
            link: null,
            status: "In Progress",
            start: "Jan 2026",
            end: null,
            description: (
                <ul className="list-inside list-disc space-y-1">
                    <li>
                        <strong>Goal:</strong> Determine how sampling
                        temperature affects hallucination behavior in small
                        language models across model scales, quantization
                        levels, and factual domains.
                    </li>
                    <li>
                        <strong>Approach:</strong> Collected over 10 million
                        data samples from SLMs including
                        Qwen2.5-0.5B/1.5B/3B/7B, Qwen3-1.7B/4B/8B,
                        Llama-3.2-1B/3B, Gemma-3-4B, and Mistral-7B. Tested T ∈
                        [0,1] at ΔT=0.1 on{" "}
                        <a
                            href="https://arxiv.org/abs/2305.11747"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            HaluEval-QA
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://huggingface.co/datasets/pminervini/true-false"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            True/False
                        </a>{" "}
                        across politics, geography, history, science, health,
                        cities, companies, facts, and other domains.
                    </li>
                    <li>
                        <strong>Result:</strong> Identified a non-monotonic
                        scale-temperature relationship: sub-1.5B SLMs often
                        collapsed into one-class prediction priors at low
                        temperature, so added sampling entropy could reduce
                        hallucination error by weakening systematic bias; near
                        the 1.5B competence boundary, higher temperature instead
                        amplified factual instability, especially under 4-bit
                        quantization, while many 3B–8B models remained
                        comparatively stable. Effects varied by topic and were
                        concentrated on marginal knowledge, showing that
                        hallucination risk depends on the interaction of scale,
                        calibration, quantization, and domain rather than
                        temperature alone.
                    </li>
                </ul>
            ),
        },
        {
            title: "Recallr AI: Scalable Architecture for Dynamic Long-Term Memory in Conversational AI Agents",
            link: "https://github.com/recallrai/white-paper",
            status: "In Progress",
            start: "Apr 2025",
            end: null,
            description: (
                <ul className="list-inside list-disc space-y-1">
                    <li>
                        <strong>Goal:</strong> Build scalable long-term memory
                        for conversational AI that preserves evolving user state
                        across sessions without adding latency to real-time
                        responses.
                    </li>
                    <li>
                        <strong>Approach:</strong> Built a versioned knowledge
                        graph through decoupled asynchronous curation and
                        synchronous retrieval. Its decision logic classifies new
                        evidence as redundant, novel, additive, temporally
                        superseding, expired, or directly conflicting; dual
                        timestamps separate event time from discussion time,
                        immutable version chains preserve state evolution, and a
                        Git-inspired human-in-the-loop protocol resolves
                        contradictions. Auto-Recall routes queries across
                        Low-Latency, Balanced, and Agentic retrieval with
                        adaptive graph traversal.
                    </li>
                    <li>
                        <strong>Result:</strong> Benchmarked Recallr on the{" "}
                        <a
                            href="https://arxiv.org/abs/2410.10813"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            LongMemEval
                        </a>{" "}
                        Oracle tier. Agentic Recall achieved 98.9% accuracy—32.7
                        percentage points above the nearest competitor—with 100%
                        on knowledge updates, 99.2% on temporal reasoning, and
                        98.5% on multi-session questions; Low-Latency Recall
                        retained 92.6% accuracy at 396 ms P95, approximately
                        4.5× faster at P95 than the fastest competing system.
                    </li>
                </ul>
            ),
        },
    ],
    skills: [
        {
            category: "Programming",
            skills: ["Python", "C/C++", "JavaScript/TypeScript"],
        },
        {
            category: "AI/ML",
            skills: [
                "PyTorch",
                "Transformers",
                "LLMs",
                "Fine-tuning",
                "LiteLLM",
                "Pandas",
                "NumPy",
                "Matplotlib",
            ],
        },
        {
            category: "Backend & Data",
            skills: [
                "FastAPI",
                "Pydantic",
                "REST APIs",
                "WebSockets",
                "Gunicorn",
                "Uvicorn",
                "Alembic",
                "PostgreSQL",
                "MongoDB",
                "Milvus",
                "MinIO",
                "Redis",
                "Neo4j",
            ],
        },
        {
            category: "Cloud & Infrastructure",
            skills: [
                "AWS (ECS, ECR, EFS)",
                "Docker",
                "Docker Compose",
                "Kubernetes (K3s)",
                "Linux",
                "Portainer",
                "Traefik",
                "Harbor",
                "Terraform",
            ],
        },
        {
            category: "Messaging",
            skills: ["Kafka", "RabbitMQ"],
        },
        {
            category: "Testing",
            skills: ["Pytest (unit and integration testing)", "Selenium"],
        },
        {
            category: "Version Control",
            skills: ["Git", "GitHub"],
        },
        {
            category: "CI/CD & Observability",
            skills: [
                "GitLab CI",
                "GitHub Actions",
                "Prometheus",
                "Grafana",
                "Loki",
                "Promtail",
                "Alertmanager",
                "Elastic Stack (Elasticsearch, Kibana, Filebeat)",
            ],
        },
        {
            category: "Embedded Systems",
            skills: [
                "ESP-IDF",
                "PlatformIO",
                "Arduino",
                "ESP32/ESP8266",
                "ESP32-CAM",
                "NodeMCU",
                "Raspberry Pi",
            ],
        },
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
                "Chosen as one of 2,000 CS students worldwide to attend YC's first AI Startup School in San Francisco.",
            year: "2025",
            link: "https://www.ycombinator.com/events/ai-startup-school",
        },
        {
            title: "Google InnoSprint Hackathon",
            description: "First runner-up",
            year: "2023",
            link: "https://www.linkedin.com/posts/devasheesh-mishra_hackathon-innosprint-innovation-activity-7162092090531721216-6BG5",
        },
        {
            title: "Phoenix Hackathon",
            description: "Won first place",
            year: "2022",
            link: "https://www.linkedin.com/posts/devasheesh-mishra_srmist-srmuniversity-hackathon-activity-7162482926939492352-rLm4",
        },
        {
            title: "Code-A-Thon",
            description: "First runner-up",
            year: "2022",
            link: "https://www.linkedin.com/posts/devasheesh-mishra_hackathonrunnerup-innovativeexcellence-srmist-activity-7162845340889440256-HPDg",
        },
        {
            title: "Live-Project Competition",
            description: "Second runner-up",
            year: "2023",
            link: "https://www.linkedin.com/posts/devasheesh-mishra_hackathonachievement-innovativeexcellence-srmist-activity-7163207701899010048-XfRD",
        },
        {
            title: "Smart India Hackathon",
            description: "First runner-up at the college level",
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
            organization: "GeeksforGeeks",
            period: "September 2024 - April 2026",
        },
        {
            position: "Assistant Course Instructor",
            organization: "GeeksforGeeks",
            period: "July 2024 - September 2024",
        },
    ],
    interest: [
        {
            title: "Homelab Overlord",
            organization: "Skynet Lite · Self-employed",
            period: "September 2020 - Present · 6 yrs",
            location: "Skynet Command Center · On-site",
            description: (
                <>
                    <p>
                        Masterminding a personal cloud and compute cluster from
                        the ground up, because sleep is overrated and vendor
                        lock-in is scary. My mission: learn enterprise
                        technology without the enterprise budget or the
                        change-control meetings.
                    </p>
                    <p className="mt-2">
                        <strong>Key Operations & Technologies:</strong>
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Virtualization Command Center:</strong>{" "}
                            Running Proxmox VE as the bare-metal hypervisor,
                            juggling VMs like a digital circus performer.
                        </li>
                        <li>
                            <strong>Storage Fortress (Mostly):</strong>{" "}
                            Wrangling terabytes of vital data (Linux ISOs,
                            project backups, and a few memes) using Unraid
                            hosted within a dedicated VM.
                        </li>
                        <li>
                            <strong>K3s Kubernetes Cluster:</strong>{" "}
                            Orchestrating containerized applications across a
                            hybrid cluster with:
                            <ul className="ml-4 list-inside list-[circle]">
                                <li>
                                    A Raspberry Pi master node (doing its best).
                                </li>
                                <li>
                                    Two CPU-based worker nodes (VMs) for general
                                    workloads.
                                </li>
                                <li>
                                    Two GPU-accelerated worker nodes (VMs)
                                    powering ML experiments and hosting personal
                                    projects.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Gateway Guardian:</strong> Employing Traefik
                            as the reverse proxy, handling ingress routing and
                            SSL certificates so services are securely exposed.
                        </li>
                        <li>
                            <strong>Digital Life Support Systems:</strong>{" "}
                            Achieving digital sovereignty by self-hosting
                            critical infrastructure, including Bitwarden for
                            password management and Nextcloud as a private
                            cloud.
                        </li>
                    </ul>
                    <p className="mt-2">
                        Constantly tinkering, troubleshooting (often
                        self-inflicted issues), automating, and scaling this
                        mini-ecosystem. My power bill may weep, but my hands-on
                        skills in virtualization, container orchestration,
                        networking, and system administration are leveling up.
                    </p>
                </>
            ),
        },
    ],
};
