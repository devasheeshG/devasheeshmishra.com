import { headers } from "next/headers";
import { ImageResponse } from "next/og";
import { RESUME_DATA } from "../data/resume-data";

export const runtime = "edge";

export const alt = "Minimalist Resume";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    const requestHeaders = headers();
    const host = requestHeaders.get("host") ?? "devasheeshmishra.com";
    const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
    const avatarResponse = await fetch(
        new URL(RESUME_DATA.avatarUrl, `${protocol}://${host}`)
    );
    const avatarBytes = new Uint8Array(await avatarResponse.arrayBuffer());
    let avatarBinary = "";
    for (const byte of avatarBytes) {
        avatarBinary += String.fromCharCode(byte);
    }
    const avatarUrl = `data:${avatarResponse.headers.get("content-type") ?? "image/jpeg"};base64,${btoa(avatarBinary)}`;

    return new ImageResponse(
        <div
            style={{
                background: "white",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: '"Inter"',
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                {/* biome-ignore lint/performance/noImgElement: ImageResponse context requires img element */}
                <img
                    src={avatarUrl}
                    alt={RESUME_DATA.name}
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "10%",
                        marginBottom: "2rem",
                    }}
                />
                <div
                    style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: "1rem",
                    }}
                >
                    {RESUME_DATA.name}
                </div>
                <div
                    style={{
                        fontSize: "1.5rem",
                        color: "#666",
                        maxWidth: "600px",
                        lineHeight: "1.4",
                    }}
                >
                    {RESUME_DATA.about}
                </div>
                <div
                    style={{
                        display: "flex",
                        marginTop: "2rem",
                        gap: "1rem",
                    }}
                >
                    {RESUME_DATA.contact.email && (
                        <div style={{ fontSize: "1rem", color: "#666" }}>
                            {RESUME_DATA.personalWebsiteUrl}
                        </div>
                    )}
                </div>
            </div>
        </div>,
        {
            ...size,
        }
    );
}
