import { ImageResponse } from "next/og";

export const alt = "Trisha Teh — Senior Web3 Engineer";
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
        <path d="M32 12 L51.05 23 L32 34 L12.95 23 Z" fill="#C084FC" />
        <path d="M12.95 23 L32 34 L32 56 L12.95 45 Z" fill="#6366F1" />
        <path d="M32 34 L51.05 23 L51.05 45 L32 56 Z" fill="#5EEAD4" />
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
        Senior Web3 Engineer · Former Medical Doctor
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
