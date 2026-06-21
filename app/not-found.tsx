import Link from "next/link";

// Global 404 (rendered when no locale layout applies, so it provides its own document).
export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          background: "#faf7f2",
          color: "#211a15",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>404</h1>
        <p style={{ color: "#6b5d52" }}>This page could not be found.</p>
        <Link href="/en" style={{ color: "#c2410c", fontWeight: 600 }}>
          Go home
        </Link>
      </body>
    </html>
  );
}
