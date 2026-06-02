"use client";

import { CommandIcon } from "lucide-react";
import * as React from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";

interface Props {
    links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
    const [open, setOpen] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);
    const RESUME_PRINT_URL = "/resume.pdf" as const;

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }

            // Intercept Ctrl/Cmd+P to open the hosted resume in a new tab
            if ((e.metaKey || e.ctrlKey) && (e.key === "p" || e.key === "P")) {
                e.preventDefault();
                try {
                    window.open(
                        RESUME_PRINT_URL,
                        "_blank",
                        "noopener,noreferrer"
                    );
                } catch {
                    // no-op
                }
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [RESUME_PRINT_URL]);

    // Determine if Mac after mounting
    const isMac = React.useMemo(() => {
        if (!isMounted) return false;
        return window.navigator.userAgent.indexOf("Mac") > -1;
    }, [isMounted]);

    return (
        <>
            <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-background p-1 text-center text-sm text-muted-foreground xl:block print:hidden">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs" suppressHydrationWarning={true}>
                        {isMounted ? (isMac ? "⌘" : "Ctrl") : "⌘"}
                    </span>
                    + J
                </kbd>{" "}
                to open the command menu
            </p>
            <Button
                onClick={() => setOpen((open) => !open)}
                variant="outline"
                size="icon"
                className="fixed bottom-4 right-4 flex rounded-full shadow-2xl xl:hidden print:hidden"
            >
                <CommandIcon className="my-6 size-6" />
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Actions">
                        <CommandItem
                            onSelect={() => {
                                setOpen(false);
                                // Open hosted resume in a new tab instead of printing locally
                                try {
                                    window.open(
                                        RESUME_PRINT_URL,
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                } catch {
                                    // no-op
                                }
                            }}
                        >
                            <span>Print</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandGroup heading="Links">
                        {links.map(({ url, title }) => (
                            <CommandItem
                                key={url}
                                onSelect={() => {
                                    setOpen(false);
                                    window.open(url, "_blank");
                                }}
                            >
                                <span>{title}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                </CommandList>
            </CommandDialog>
        </>
    );
};
