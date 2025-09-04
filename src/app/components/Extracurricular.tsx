import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type ExtracurricularActivity = (typeof RESUME_DATA)["extracurricular"][number];

interface ExtracurricularItemProps {
  activity: ExtracurricularActivity;
}

/**
 * Individual extracurricular activity card component
 */
function ExtracurricularItem({ activity }: ExtracurricularItemProps) {
  const { position, organization, period } = activity;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none print:text-sm">
            {position}
          </h3>
          <div className="text-sm tabular-nums text-gray-500">{period}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-foreground/80 print:text-[10px]">
          {organization}
        </div>
      </CardContent>
    </Card>
  );
}

interface ExtracurricularProps {
  extracurricular: (typeof RESUME_DATA)["extracurricular"];
}

/**
 * Main extracurricular section component
 */
export function Extracurricular({ extracurricular }: ExtracurricularProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="extracurricular">
        Extracurricular
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="extracurricular"
      >
        {extracurricular.map((item) => (
          <article key={`${item.position}-${item.organization}`} role="article">
            <ExtracurricularItem activity={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
