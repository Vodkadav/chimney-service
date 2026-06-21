import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #9a3412 0%, #c2410c 55%, #0f766e 100%)",
          color: "#fff7ed",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, textTransform: "uppercase", opacity: 0.9 }}>
          Cancún · Riviera Maya
        </div>
        <div style={{ fontSize: 74, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 24, opacity: 0.92 }}>
          Hotel Chimney, Fireplace &amp; Ventilation Care
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
