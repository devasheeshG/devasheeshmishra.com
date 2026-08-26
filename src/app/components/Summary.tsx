import type { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
    about: typeof RESUME_DATA.about;
    className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ about, className }: AboutProps) {
    return (
        <Section className={className}>
            <h2 className="text-xl font-bold" id="summary-section">
                Summary
            </h2>
            <div className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]">
                {about}
            </div>
        </Section>
    );
}
