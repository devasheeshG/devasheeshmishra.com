import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type ResearchEntry = (typeof RESUME_DATA)["research"][number];

function ResearchTitle({ title, link }: Pick<ResearchEntry, "title" | "link">) {
    if (!link) {
        return <span>{title}</span>;
    }

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
        >
            {title}
        </a>
    );
}

function ResearchEntryCard({ entry }: { entry: ResearchEntry }) {
    return (
        <Card className="py-1 print:py-0">
            <CardHeader className="print:space-y-1">
                <div className="flex items-start justify-between gap-x-3">
                    <div className="space-y-1">
                        <h3 className="text-base font-semibold leading-tight print:text-sm">
                            <ResearchTitle
                                title={entry.title}
                                link={entry.link}
                            />
                        </h3>
                    </div>
                    <div className="shrink-0 space-y-1 text-right">
                        <div className="tabular-nums text-sm text-gray-500">
                            {entry.start} - {entry.end ?? "Present"}
                        </div>
                        <Badge
                            variant="secondary"
                            className="text-xs print:px-1 print:py-0.5 print:text-[8px]"
                        >
                            {entry.status}
                        </Badge>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="mt-2 text-pretty text-xs text-foreground/80 print:mt-1 print:text-[10px]">
                    {entry.description}
                </div>
            </CardContent>
        </Card>
    );
}

interface ResearchProps {
    research: (typeof RESUME_DATA)["research"];
}

export function Research({ research }: ResearchProps) {
    return (
        <Section>
            <h2 className="text-xl font-bold" id="research">
                Research
            </h2>
            <div
                className="space-y-4 print:space-y-0"
                role="feed"
                aria-labelledby="research"
            >
                {research.map((entry) => (
                    <article key={entry.title}>
                        <ResearchEntryCard entry={entry} />
                    </article>
                ))}
            </div>
        </Section>
    );
}
