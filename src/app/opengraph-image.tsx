import { ImageResponse } from "next/og";

export const alt = "Trisha Teh — Senior Web3 Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
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
          <path d="M32 12 L51.05 23 L32 34 L12.95 23 Z" fill="#9945FF" />
          <path d="M12.95 23 L32 34 L32 56 L12.95 45 Z" fill="#5497D5" />
          <path d="M32 34 L51.05 23 L51.05 45 L32 56 Z" fill="#14F195" />
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
          Senior Web3 Engineer · ex-Medical Doctor
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#5497D5",
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
            background: "linear-gradient(90deg,#9945FF,#5497D5,#14F195)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
