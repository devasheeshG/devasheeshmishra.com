import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type SkillSection = {
    category: string;
    skills: readonly string[];
};

type Skills = readonly SkillSection[];

interface SkillsListProps {
    skills: Skills;
    className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
    return (
        <div className={cn("space-y-3", className)}>
            {skills.map(({ category, skills: categorySkills }) => (
                <div
                    className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:items-start"
                    key={category}
                >
                    <h3 className="text-sm font-semibold text-muted-foreground">
                        {category}
                    </h3>
                    <ul className="flex list-none flex-wrap gap-1 p-0">
                        {categorySkills.map((skill) => (
                            <li key={skill}>
                                <Badge
                                    className="print:text-[10px]"
                                    aria-label={`Skill: ${skill}`}
                                >
                                    {skill}
                                </Badge>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

interface SkillsProps {
    skills: Skills;
    className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
    return (
        <Section className={className}>
            <h2 className="text-xl font-bold" id="skills-section">
                Skills
            </h2>
            <SkillsList skills={skills} />
        </Section>
    );
}
