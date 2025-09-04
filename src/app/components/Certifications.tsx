import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Certification = (typeof RESUME_DATA)["certifications"][number];

interface CertificationLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders certification title with optional link
 */
function CertificationLink({ title, link }: CertificationLinkProps) {
  if (!link) {
    return <span className="font-semibold">{title}</span>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold hover:underline"
      aria-label={`${title} certificate (opens in new tab)`}
    >
      {title}
    </a>
  );
}

interface CertificationItemProps {
  certification: Certification;
}

/**
 * Individual certification card component
 */
function CertificationItem({ certification }: CertificationItemProps) {
  const { title, issuer, link } = certification;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <h3 className="text-base font-semibold leading-none print:text-sm">
          <CertificationLink title={title} link={link} />
        </h3>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-foreground/80 print:text-[10px]">
          {issuer}
        </div>
      </CardContent>
    </Card>
  );
}

interface CertificationsProps {
  certifications: (typeof RESUME_DATA)["certifications"];
}

/**
 * Main certifications section component
 */
export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="certifications">
        Certifications
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="certifications"
      >
        {certifications.map((item) => (
          <article key={item.title} role="article">
            <CertificationItem certification={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
