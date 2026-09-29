import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import {
    ContributionCalendar,
    type ContributionDay,
} from "./ContributionCalendar";

const activityStartDate = "2023-09-01";

async function getContributions(
    username: string,
    year?: number
): Promise<ContributionDay[]> {
    const url = new URL(
        `https://github.com/users/${encodeURIComponent(username)}/contributions`
    );
    if (year) url.searchParams.set("to", `${year}-12-31`);

    const response = await fetch(url, {
        headers: { Accept: "text/html" },
        next: { revalidate: 21_600 },
        signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok)
        throw new Error("GitHub contribution calendar unavailable");

    const html = await response.text();
    const counts = new Map<string, number>();

    for (const match of html.matchAll(
        /<tool-tip\b[^>]*\bfor="(contribution-day-component-[^"]+)"[^>]*>([^<]*)<\/tool-tip>/g
    )) {
        const number = match[2].match(/^([\d,]+) contributions? on/);
        counts.set(
            match[1],
            number ? Number(number[1].replaceAll(",", "")) : 0
        );
    }

    const days: ContributionDay[] = [];

    for (const match of html.matchAll(
        /<td\b[^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"[^>]*>/g
    )) {
        const cell = match[0];
        const level = cell.match(/\bdata-level="([0-4])"/);
        const id = cell.match(/\bid="([^"]+)"/);
        if (!level || !id || !counts.has(id[1])) continue;

        days.push({
            date: match[1],
            level: Number(level[1]),
            count: counts.get(id[1]) ?? 0,
        });
    }

    if (days.length < 300)
        throw new Error("GitHub contribution calendar incomplete");

    return days;
}

export async function GitHubActivity() {
    const profileUrl = RESUME_DATA.contact.social.find(
        (social) => social.name === "GitHub"
    )?.url;
    if (!profileUrl) return null;

    const username = new URL(profileUrl).pathname.split("/").filter(Boolean)[0];
    let days: ContributionDay[] | null = null;

    try {
        const today = new Date();
        today.setUTCHours(0, 0, 0, 0);
        const firstYear = Number(activityStartDate.slice(0, 4));
        const historicalYears = Array.from(
            { length: today.getUTCFullYear() - firstYear },
            (_, index) => firstYear + index
        );
        const calendars = await Promise.all([
            ...historicalYears.map((year) => getContributions(username, year)),
            getContributions(username),
        ]);
        const byDate = new Map(calendars.flat().map((day) => [day.date, day]));
        const endDate = today.toISOString().slice(0, 10);
        const activityDays = [...byDate.values()]
            .filter(
                (day) => day.date >= activityStartDate && day.date <= endDate
            )
            .sort((a, b) => a.date.localeCompare(b.date));
        const expectedDays =
            Math.round(
                (today.getTime() -
                    new Date(`${activityStartDate}T00:00:00Z`).getTime()) /
                    86_400_000
            ) + 1;
        if (activityDays.length !== expectedDays)
            throw new Error("GitHub contribution history incomplete");
        days = activityDays;
    } catch {
        // Keep the profile link visible if GitHub cannot be reached.
    }

    return (
        <Section className="print:hidden">
            <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl font-bold" id="github-activity">
                    GitHub Activity
                </h2>
                <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                    View profile
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
            </div>
            {days ? (
                <ContributionCalendar days={days} />
            ) : (
                <p className="text-sm text-muted-foreground">
                    Activity is temporarily unavailable.
                </p>
            )}
        </Section>
    );
}
