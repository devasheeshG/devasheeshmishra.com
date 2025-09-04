import { CommandMenu } from "@/components/command-menu";
import { Suspense } from "react";
import { SectionErrorBoundary } from "@/components/section-error-boundary";
import { SectionSkeleton } from "@/components/section-skeleton";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Achievements } from "./components/Achievements";
import { Certifications } from "./components/Certifications";
import { Extracurricular } from "./components/Extracurricular";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    images: ["/opengraph-image"],
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  return [
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  const structuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
        id="main-content"
      >
        <div className="sr-only">
          <h1>{RESUME_DATA.name}&apos;s Resume</h1>
        </div>

        <section
          className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
          aria-label="Resume Content"
        >
          <SectionErrorBoundary sectionName="Header">
            <Suspense fallback={<SectionSkeleton lines={4} />}>
              <Header />
            </Suspense>
          </SectionErrorBoundary>

          <div className="space-y-8 print:space-y-4">
            <SectionErrorBoundary sectionName="Summary">
              <Suspense fallback={<SectionSkeleton lines={2} />}>
                <Summary summary={RESUME_DATA.summary} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Work Experience">
              <Suspense fallback={<SectionSkeleton lines={6} />}>
                <WorkExperience work={RESUME_DATA.work} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Education">
              <Suspense fallback={<SectionSkeleton lines={3} />}>
                <Education education={RESUME_DATA.education} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Skills">
              <Suspense fallback={<SectionSkeleton lines={2} />}>
                <Skills skills={RESUME_DATA.skills} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Projects">
              <Suspense fallback={<SectionSkeleton lines={5} />}>
                <Projects projects={RESUME_DATA.projects} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Certifications">
              <Suspense fallback={<SectionSkeleton lines={3} />}>
                <Certifications certifications={RESUME_DATA.certifications} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Achievements">
              <Suspense fallback={<SectionSkeleton lines={3} />}>
                <Achievements achievements={RESUME_DATA.achievements} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Extracurricular Activities">
              <Suspense fallback={<SectionSkeleton lines={3} />}>
                <Extracurricular
                  extracurricular={RESUME_DATA.extracurricular}
                />
              </Suspense>
            </SectionErrorBoundary>
          </div>
        </section>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu links={getCommandMenuLinks()} />
        </nav>
      </main>
    </>
  );
}
