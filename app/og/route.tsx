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
          background: "linear-gradient(135deg, #075985 0%, #0369a1 55%, #0e7490 100%)",
          color: "#eff6ff",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, textTransform: "uppercase", opacity: 0.9 }}>
          Cancún · Mérida · Península de Yucatán
        </div>
        <div style={{ fontSize: 74, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 24, opacity: 0.92 }}>
          Mantenimiento industrial · Limpieza de ductos y ventilación (HVAC)
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
