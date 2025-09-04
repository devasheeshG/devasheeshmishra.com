import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Achievement = (typeof RESUME_DATA)["achievements"][number];

interface AchievementLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders achievement title with optional link
 */
function AchievementLink({ title, link }: AchievementLinkProps) {
  if (!link) {
    return <span className="font-semibold">{title}</span>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold hover:underline"
      aria-label={`${title} (opens in new tab)`}
    >
      {title}
    </a>
  );
}

interface AchievementItemProps {
  achievement: Achievement;
}

/**
 * Individual achievement card component
 */
function AchievementItem({ achievement }: AchievementItemProps) {
  const { title, description, year, link } = achievement;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center gap-x-1 leading-none print:text-sm">
            <AchievementLink title={title} link={link} />
          </h3>
          <div className="text-sm tabular-nums text-gray-500">{year}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {description}
        </div>
      </CardContent>
    </Card>
  );
}

interface AchievementsProps {
  achievements: (typeof RESUME_DATA)["achievements"];
}

/**
 * Main achievements section component
 */
export function Achievements({ achievements }: AchievementsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="achievements">
        Achievements
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="achievements"
      >
        {achievements.map((item) => (
          <article key={item.title} role="article">
            <AchievementItem achievement={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
