import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161310",
          color: "#F3EEE6",
          fontSize: 20,
          letterSpacing: -0.5,
        }}
      >
        U
      </div>
    ),
    { ...size },
  );
}
