"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";

const AUDIO_URL = "/assets/shabbir-piano-cover.mp3";

export function PianoPlayer() {
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.35;

        const pauseWhenHidden = () => {
            if (document.hidden) {
                audio.pause();
            }
        };
        const pauseWhenLeaving = () => audio.pause();

        document.addEventListener("visibilitychange", pauseWhenHidden);
        window.addEventListener("pagehide", pauseWhenLeaving);

        return () => {
            document.removeEventListener("visibilitychange", pauseWhenHidden);
            window.removeEventListener("pagehide", pauseWhenLeaving);
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
        <>
            {/* biome-ignore lint/a11y/useMediaCaption: This piano recording has no spoken words, and the requested VTT file was removed. */}
            <audio
                ref={audioRef}
                src={AUDIO_URL}
                preload="none"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setHasError(true)}
            />

            <Button
                type="button"
                aria-label={isPlaying ? "Pause piano" : "Play piano"}
                aria-pressed={isPlaying}
                title={isPlaying ? "Pause piano" : "Play piano"}
                disabled={hasError}
                onClick={togglePlayback}
                variant="outline"
                size="icon"
                className="fixed bottom-4 left-4 z-40 rounded-full shadow-2xl print:hidden"
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
            </Button>
        </>
    );
}
