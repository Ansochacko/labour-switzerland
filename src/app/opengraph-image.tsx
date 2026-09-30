import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Labour Switzerland — Swiss Residence Permits, Wages & Tax Rights";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBFBF9",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          border: "16px solid #1E3838",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "6px",
              backgroundColor: "#1C1E21",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "28px",
                backgroundColor: "#FBFBF9",
                position: "absolute",
              }}
            />
            <div
              style={{
                width: "28px",
                height: "8px",
                backgroundColor: "#FBFBF9",
                position: "absolute",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1C1E21",
                letterSpacing: "0.08em",
              }}
            >
              LABOUR SWITZERLAND
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#757E88",
                letterSpacing: "0.04em",
              }}
            >
              INDEPENDENT INFORMATION GUIDE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#EDEDF1",
              padding: "6px 14px",
              borderRadius: "4px",
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "#1F513F",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1F513F",
                letterSpacing: "0.04em",
              }}
            >
              INDEPENDENT RESIDENCE &amp; WORK GUIDE · 2025
            </span>
          </div>
          <span
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#1E3838",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Understand your permit, pay, and rights in Switzerland.
          </span>
          <span
            style={{
              fontSize: "22px",
              color: "#4B5158",
              lineHeight: 1.4,
            }}
          >
            Plain-English guidance on B, L, G, and C permits, withholding tax (Quellensteuer), and Swiss wage standards.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "2px solid #E5E5DF",
          }}
        >
          <span style={{ fontSize: "16px", color: "#757E88", fontWeight: 500 }}>
            Primary Sources: SEM · SECO · FSO/BFS · ESTV
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#1E3838",
              letterSpacing: "0.04em",
            }}
          >
            labourswitzerland.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
