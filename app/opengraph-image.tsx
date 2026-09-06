import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#161310",
          color: "#F3EEE6",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#D97757",
          }}
        >
          UNIQ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 920,
            }}
          >
            {site.tagline}
          </div>
          <div style={{ fontSize: 28, color: "#C9C0B3", maxWidth: 760 }}>
            {site.support}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
