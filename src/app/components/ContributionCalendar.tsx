"use client";

import { type PointerEvent, useState } from "react";
import { createPortal } from "react-dom";

export type ContributionDay = {
    date: string;
    level: number;
    count: number;
};

type HoveredDay = Pick<ContributionDay, "date" | "count"> & {
    x: number;
    y: number;
    above: boolean;
};

const colors = [
    "bg-[#ebedf0] dark:bg-[#151b23]",
    "bg-[#9be9a8] dark:bg-[#0e4429]",
    "bg-[#40c463] dark:bg-[#006d32]",
    "bg-[#30a14e] dark:bg-[#26a641]",
    "bg-[#216e39] dark:bg-[#39d353]",
] as const;

const monthFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: "UTC",
});
const dayFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});

function utcDate(date: string) {
    return new Date(`${date}T00:00:00Z`);
}

function weekColumns(days: ContributionDay[]) {
    const firstWeekday = utcDate(days[0].date).getUTCDay();
    const numberOfWeeks = Math.ceil((days.length + firstWeekday) / 7);

    return Array.from({ length: numberOfWeeks }, (_, weekIndex) =>
        Array.from(
            { length: 7 },
            (_, dayIndex) =>
                days[weekIndex * 7 + dayIndex - firstWeekday] ?? null
        )
    );
}

export function ContributionCalendar({ days }: { days: ContributionDay[] }) {
    const [hoveredDay, setHoveredDay] = useState<HoveredDay | null>(null);
    const weeks = weekColumns(days);
    const firstDate = utcDate(days[0].date);
    const lastDate = utcDate(days[days.length - 1].date);
    const monthCount =
        (lastDate.getUTCFullYear() - firstDate.getUTCFullYear()) * 12 +
        lastDate.getUTCMonth() -
        firstDate.getUTCMonth() +
        1;
    const months = Array.from({ length: monthCount }, (_, index) => {
        const date = new Date(
            Date.UTC(
                firstDate.getUTCFullYear(),
                firstDate.getUTCMonth() + index
            )
        );
        return `${monthFormatter.format(date)} (${String(date.getUTCFullYear()).slice(2)})`;
    });
    const total = days.reduce((sum, day) => sum + day.count, 0);
    const chartWidth = weeks.length * 9 + (weeks.length - 1) * 3;

    function showDay(event: PointerEvent<HTMLDivElement>) {
        const cell = (event.target as Element).closest<HTMLElement>(
            "[data-contribution-date]"
        );
        if (!cell) {
            setHoveredDay(null);
            return;
        }

        const date = cell.dataset.contributionDate;
        if (!date || hoveredDay?.date === date) return;

        const bounds = cell.getBoundingClientRect();
        setHoveredDay({
            date,
            count: Number(cell.dataset.contributionCount),
            x: Math.min(
                Math.max(bounds.left + bounds.width / 2, 100),
                window.innerWidth - 100
            ),
            y: bounds.top >= 72 ? bounds.top - 8 : bounds.bottom + 8,
            above: bounds.top >= 72,
        });
    }

    return (
        <div className="rounded-lg border border-border/70 bg-card p-3 sm:p-4">
            <div className="mb-3 flex justify-end text-xs">
                <span className="text-muted-foreground">
                    {total.toLocaleString("en-US")} contributions
                </span>
            </div>
            <div className="flex items-start gap-2">
                <div
                    className="mt-[20px] grid shrink-0 grid-rows-7 gap-[2px] text-[9px] leading-[9px] text-muted-foreground"
                    aria-hidden="true"
                >
                    <span />
                    <span>Mon</span>
                    <span />
                    <span>Wed</span>
                    <span />
                    <span>Fri</span>
                </div>
                <section
                    className="min-w-0 overflow-x-auto pb-2"
                    dir="rtl"
                    aria-label={`${total.toLocaleString("en-US")} GitHub contributions from ${days[0].date} through ${days[days.length - 1].date}; scroll left for older activity`}
                    onScroll={() => setHoveredDay(null)}
                    style={{
                        scrollbarColor:
                            "hsl(var(--muted-foreground) / 0.35) transparent",
                        scrollbarWidth: "thin",
                    }}
                >
                    <div
                        className="w-max"
                        dir="ltr"
                        aria-hidden="true"
                        style={{ width: chartWidth }}
                    >
                        <div
                            className="grid h-5 text-[10px] leading-4 text-muted-foreground"
                            style={{
                                gridTemplateColumns: `repeat(${months.length}, minmax(0, 1fr))`,
                            }}
                        >
                            {months.map((month) => (
                                <span key={month} className="whitespace-nowrap">
                                    {month}
                                </span>
                            ))}
                        </div>
                        <div
                            className="flex gap-[3px]"
                            onPointerOver={showDay}
                            onPointerMove={showDay}
                            onPointerDown={showDay}
                            onPointerLeave={() => setHoveredDay(null)}
                        >
                            {weeks.map((week, weekIndex) => (
                                <div
                                    key={week.find(Boolean)?.date ?? weekIndex}
                                    className="grid w-[9px] shrink-0 grid-rows-7 gap-[2px]"
                                >
                                    {week.map((day, dayIndex) => (
                                        <span
                                            key={
                                                day?.date ??
                                                `${weekIndex}-${dayIndex}`
                                            }
                                            className={`size-[9px] rounded-[2px] ${day ? `${colors[day.level]} relative transition-transform duration-150 hover:z-10 hover:scale-125 hover:ring-1 hover:ring-foreground/70 motion-reduce:transition-none` : "bg-transparent"}`}
                                            data-contribution-date={day?.date}
                                            data-contribution-count={day?.count}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-4 flex justify-end text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span>Less</span>
                    {colors.map((color) => (
                        <span
                            key={color}
                            className={`size-[9px] rounded-[2px] ${color}`}
                        />
                    ))}
                    <span>More</span>
                </div>
            </div>

            {hoveredDay &&
                createPortal(
                    <div
                        role="tooltip"
                        className="pointer-events-none fixed z-50 animate-[activity-tooltip-enter_140ms_ease-out] rounded-md border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-xl motion-reduce:animate-none print:hidden"
                        style={{
                            left: hoveredDay.x,
                            top: hoveredDay.y,
                            transform: hoveredDay.above
                                ? "translate(-50%, -100%)"
                                : "translate(-50%, 0)",
                        }}
                    >
                        <div className="font-semibold">
                            {hoveredDay.count.toLocaleString("en-US")}{" "}
                            {hoveredDay.count === 1
                                ? "contribution"
                                : "contributions"}
                        </div>
                        <div className="mt-0.5 text-muted-foreground">
                            {dayFormatter.format(utcDate(hoveredDay.date))}
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
}
