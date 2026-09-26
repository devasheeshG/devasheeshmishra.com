"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import * as React from "react";

const AUDIO_URL = "/assets/shabbir-piano-cover.mp3";

export function PianoPlayer() {
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.35;
        const desktopQuery = window.matchMedia("(min-width: 1024px)");

        const pauseWhenHidden = () => {
            if (document.hidden) {
                audio.pause();
            }
        };
        const pauseWhenLeaving = () => audio.pause();
        const pauseOnSmallScreen = () => {
            if (!desktopQuery.matches) audio.pause();
        };

        document.addEventListener("visibilitychange", pauseWhenHidden);
        window.addEventListener("pagehide", pauseWhenLeaving);
        desktopQuery.addEventListener("change", pauseOnSmallScreen);

        if (!document.hidden && desktopQuery.matches) {
            // Browsers may reject audible autoplay until the visitor presses Play.
            void audio.play().catch((error: DOMException) => {
                if (
                    error.name !== "NotAllowedError" &&
                    error.name !== "AbortError"
                )
                    setHasError(true);
            });
        }

        return () => {
            document.removeEventListener("visibilitychange", pauseWhenHidden);
            window.removeEventListener("pagehide", pauseWhenLeaving);
            desktopQuery.removeEventListener("change", pauseOnSmallScreen);
            audio.pause();
        };
    }, []);

    const togglePlayback = () => {
        const audio = audioRef.current;
        if (!audio || hasError) return;

        if (!audio.paused) {
            audio.pause();
            return;
        }

        void audio.play().catch((error: DOMException) => {
            if (error.name !== "NotAllowedError" && error.name !== "AbortError")
                setHasError(true);
        });
    };

    return (
        <div className="fixed bottom-6 left-6 z-40 hidden lg:block print:hidden">
            {/* biome-ignore lint/a11y/useMediaCaption: This piano recording has no spoken words, and the requested VTT file was removed. */}
            <audio
                ref={audioRef}
                src={AUDIO_URL}
                preload="none"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setHasError(true)}
            />

            <button
                type="button"
                aria-label={isPlaying ? "Pause piano" : "Play piano"}
                aria-pressed={isPlaying}
                title={isPlaying ? "Pause piano" : "Play piano"}
                disabled={hasError}
                onClick={togglePlayback}
                className="flex size-10 items-center justify-center text-foreground transition-opacity hover:opacity-70 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isPlaying ? (
                    <PauseIcon
                        className="size-4 fill-current"
                        aria-hidden="true"
                    />
                ) : (
                    <PlayIcon
                        className="ml-0.5 size-4 fill-current"
                        aria-hidden="true"
                    />
                )}
            </button>
        </div>
    );
}
