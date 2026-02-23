export function PageSpinner() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* Outer ring */}
      <div style={{ position: "relative", width: "64px", height: "64px" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "4px solid #e8f0fe",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "4px solid transparent",
            borderTopColor: "#1e4d8c",
            borderRightColor: "#f5a623",
            animation: "prx-spin 0.9s linear infinite",
          }}
        />
        {/* Inner dot */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#f5a623",
            animation: "prx-pulse 0.9s ease-in-out infinite",
          }}
        />
      </div>

      {/* Brand text */}
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#1e4d8c", fontWeight: 700, fontSize: "15px", margin: 0 }}>
          PRX India
        </p>
        <p style={{ color: "#888", fontSize: "12.5px", marginTop: "4px" }}>
          Loading, please wait…
        </p>
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes prx-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes prx-pulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.4; transform: translate(-50%, -50%) scale(0.6); }
        }
      `}</style>
    </div>
  )
}