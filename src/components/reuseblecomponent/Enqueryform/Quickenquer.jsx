import React, { useState } from "react";
import useSendenquery from "../../customhooks/useSendenquery";

const BLUE = "#1e4d8c";
const GOLD = "#f5a623";

export default function Quickenquer({ isopen, setIsopen }) {
  const [form, setForm] = useState({ fullname: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const sendenquery = useSendenquery(form, setLoading);

const handleSubmit = async (e) => {
  e.preventDefault();

  const success = await sendenquery();
  console.log(success);

  if (success) {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({ fullname: "", email: "", phone: "", message: "" });
      setIsopen(false);
    }, 2000);
  }
};
  const handleClose = () => setIsopen(false);

  if (!isopen) return null;

  return (
    <>
   
      <div
        className="fixed inset-0 z-[100]"
        style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)" }}
        onClick={handleClose}
      />

    
      <div
        className="fixed z-[101] top-1/2 left-1/2 w-full max-w-md rounded-xl shadow-2xl overflow-hidden"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ backgroundColor: BLUE }}
        >
          <div>
            <h2 className="text-white font-bold text-[18px] tracking-wide">Enquiry Now</h2>
            <p className="text-[12px] mt-[2px]" style={{ color: GOLD }}>
              We'll get back to you within 24 hours
            </p>
          </div>

          {/* ✅ Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:rotate-90"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontSize: "20px",
              lineHeight: 1,
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            ✕
          </button>
        </div>
 
        <div className="bg-white px-6 py-5">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-[48px] mb-3"></div>
              <p className="font-bold text-[16px]" style={{ color: BLUE }}>
                Enquiry Submitted!
              </p>
              <p className="text-gray-500 text-[13px] mt-1">We'll contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
               { label: "Full Name *", name: "fullname", type: "text", placeholder: "your name", required: true },
                { label: "Email *", name: "email", type: "email", placeholder: "email@example.com", required: true },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 9XXXXXXXXX", required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-[12px] font-semibold mb-1" style={{ color: BLUE }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full border rounded-lg px-4 py-[10px] text-[14px] outline-none transition-all"
                    style={{ borderColor: "#ddd" }}
                    onFocus={(e) => (e.target.style.borderColor = BLUE)}
                    onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                  />
                </div>
              ))}

              <div>
                <label className="block text-[12px] font-semibold mb-1" style={{ color: BLUE }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="your requirment ..."
                  className="w-full border rounded-lg px-4 py-[10px] text-[14px] outline-none transition-all resize-none"
                  style={{ borderColor: "#ddd" }}
                  onFocus={(e) => (e.target.style.borderColor = BLUE)}
                  onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                />
              </div>

              {/* Buttons Row */}
              <div className="flex gap-3">
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 rounded-lg font-semibold text-[14px] transition-all duration-200 border"
                  style={{ color: BLUE, borderColor: BLUE, backgroundColor: "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f4fb")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  Cancel
                </button>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 rounded-lg font-bold text-white text-[14px] uppercase tracking-wider transition-all duration-200"
                  style={{ backgroundColor: GOLD }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d48a0e")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}