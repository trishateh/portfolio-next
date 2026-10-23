import { ImageResponse } from "next/og";

export const alt = "Trisha Teh — Senior Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#060609",
        position: "relative",
      }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g" gradientUnits="userSpaceOnUse" x1="6" y1="14" x2="40" y2="48">
            <stop offset="0" stopColor="#C084FC" />
            <stop offset="0.55" stopColor="#6366F1" />
            <stop offset="1" stopColor="#5EEAD4" />
          </linearGradient>
        </defs>
        <rect x="6" y="14" width="16" height="16" rx="3" fill="url(#g)" />
        <rect x="24" y="14" width="16" height="16" rx="3" fill="url(#g)" />
        <rect x="42" y="14" width="16" height="16" rx="3" fill="url(#g)" />
        <rect x="24" y="32" width="16" height="16" rx="3" fill="url(#g)" />
      </svg>
      <div
        style={{
          fontSize: 88,
          fontWeight: 700,
          color: "#ffffff",
          marginTop: 40,
        }}
      >
        Trisha Teh
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#94a3b8",
          marginTop: 12,
        }}
      >
        Senior Full-Stack Engineer · Former Medical Doctor
      </div>
      <div
        style={{
          fontSize: 24,
          color: "#6366F1",
          marginTop: 28,
        }}
      >
        github.com/trishateh
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 60,
          width: 480,
          height: 1,
          background: "linear-gradient(90deg,#C084FC,#6366F1,#5EEAD4)",
        }}
      />
    </div>,
    { ...size },
  );
}
