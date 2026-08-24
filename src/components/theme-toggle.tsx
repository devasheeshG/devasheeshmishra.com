"use client";

import * as React from "react";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

export function ThemeToggle() {
    const [mounted, setMounted] = React.useState(false);
    const [isDark, setIsDark] = React.useState(false);
    const BTN_CLASSES =
        "inline-grid place-items-center h-10 w-10 rounded-full border bg-background leading-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] dark:drop-shadow-[0_6px_14px_rgba(255,255,255,0.35)]";

    React.useEffect(() => {
        setMounted(true);
        // Initialize from current document state set by theme-init script
        try {
            setIsDark(document.documentElement.classList.contains("dark"));
        } catch {
            // Ignore errors during SSR
        }
    }, []);

    const applyTheme = React.useCallback((dark: boolean) => {
        const root = document.documentElement;
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
        try {
            localStorage.setItem("theme", dark ? "dark" : "light");
            // Set a cookie for SSR to avoid initial flash; 1 year expiry, SameSite=Lax
            const expires = new Date(
                Date.now() + 365 * 24 * 60 * 60 * 1000
            ).toUTCString();
            const secure =
                typeof window !== "undefined" &&
                window.location.protocol === "https:"
                    ? "; Secure"
                    : "";
            // biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API support is not yet consistent across target browsers.
            document.cookie = `theme=${dark ? "dark" : "light"}; Expires=${expires}; Path=/; SameSite=Lax${secure}`;
        } catch {
            // Ignore cookie/localStorage errors
        }
        setIsDark(dark);
    }, []);

    // Avoid hydration mismatch (icon depends on theme)
    if (!mounted) {
        return (
            <div className="fixed top-4 right-4 z-50 print:hidden">
                {/* placeholder to avoid hydration mismatch; same box model as final button */}
                <span className={BTN_CLASSES} />
            </div>
        );
    }

    return (
        <div className="fixed top-4 right-4 z-50 print:hidden">
            {/* @ts-expect-error: Classic's type definitions are incompatible with TS 5 DOM typings, runtime usage is valid */}
            <Classic
                duration={750}
                toggled={isDark}
                onToggle={(toggled) => applyTheme(toggled)}
                aria-label="Toggle theme"
                title="Toggle theme"
                className={`${BTN_CLASSES} text-[22px]`}
            />
        </div>
    );
}
