import { useState, useEffect } from "react";

const YOUR_PHONE_NUMBER = "9211986515"; 
const WHATSAPP_MESSAGE = "Hello I am come from PRX India I want to inquiry";

export default function ContactButtons() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  // Page load hone ke baad buttons show karo (slight delay)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setHiding(true);
    setTimeout(() => setVisible(false), 400);
  };

  const waLink = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(60px); }
        }
        .contact-wrapper {
          animation: ${hiding ? "slideDown" : "slideUp"} 0.4s ease forwards;
        }
        .contact-circle-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 6px 22px rgba(0,0,0,0.3);
        }
        .contact-circle-btn:active {
          transform: scale(0.95);
        }
        .close-x:hover {
          transform: scale(1.2) rotate(90deg);
        }
      `}</style>

      <div
        className="contact-wrapper"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 9999,
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="close-x"
          style={{
            position: "absolute",
            top: "-14px",
            right: "-8px",
            width: "26px",
            height: "26px",
            background: "#ff3b30",
            border: "2px solid white",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            transition: "transform 0.2s",
            zIndex: 10,
            padding: 0,
          }}
          title="Close"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>

        {/* WhatsApp Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "flex-end" }}>
          <span style={{
            background: "#fff",
            color: "#333",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            whiteSpace: "nowrap",
          }}>
            WhatsApp Now
          </span>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="contact-circle-btn"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
              textDecoration: "none",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
              <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.03 7.8L.5 31.5l8-2c2.22 1.17 4.76 1.83 7.5 1.83 8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28.33c-2.57 0-4.97-.69-7.03-1.9l-.5-.3-5.2 1.36 1.39-5.07-.33-.52A12.78 12.78 0 013.17 16C3.17 9.36 8.86 3.67 16 3.67c7.14 0 12.83 5.69 12.83 12.83 0 7.14-5.69 12.83-12.83 12.83zm7.02-9.61c-.38-.19-2.27-1.12-2.62-1.25-.35-.13-.6-.19-.85.19-.25.38-.97 1.25-1.19 1.5-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.05-1.88a11.46 11.46 0 01-2.11-2.63c-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.05-1.16-2.8-.3-.72-.61-.62-.85-.63h-.72c-.25 0-.66.09-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.65 4.05 6.43 5.68.9.39 1.6.62 2.15.79.9.29 1.73.25 2.38.15.73-.11 2.27-.93 2.59-1.83.32-.9.32-1.67.22-1.83-.09-.16-.35-.25-.72-.44z"/>
            </svg>
          </a>
        </div>

        {/* Call Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "flex-end" }}>
          <span style={{
            background: "#fff",
            color: "#333",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            whiteSpace: "nowrap",
          }}>
            Call Now
          </span>
          <a
            href={`tel:+${YOUR_PHONE_NUMBER}`}
            className="contact-circle-btn"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: "#007aff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
              textDecoration: "none",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </a>
        </div>

      </div>
    </>
  );
}