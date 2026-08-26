import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type InterestItem = (typeof RESUME_DATA)["interest"][number];

interface InterestProps {
    interest: (typeof RESUME_DATA)["interest"];
}

function InterestCard({ item }: { item: InterestItem }) {
    return (
        <Card className="py-1 print:py-0">
            <CardHeader className="print:space-y-1">
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none print:text-sm">
                        {item.title}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                        {item.period}
                    </div>
                </div>
                <div className="font-mono text-sm text-foreground/80 print:text-[10px]">
                    {item.organization}
                </div>
                <div className="text-xs font-medium text-gray-600 print:text-[10px]">
                    {item.location}
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-sm text-foreground/80 print:text-[10px]">
                    {item.description}
                </div>
            </CardContent>
        </Card>
    );
}

export function Interest({ interest }: InterestProps) {
    return (
        <Section>
            <h2 className="text-xl font-bold" id="interest">
                Interest
            </h2>
            <div
                className="space-y-4 print:space-y-0"
                role="feed"
                aria-labelledby="interest"
            >
                {interest.map((item) => (
                    <article key={item.title + item.organization}>
                        <InterestCard item={item} />
                    </article>
                ))}
            </div>
        </Section>
    );
}
