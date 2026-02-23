import React, { useState } from "react";
import logo from "../../../../assets/images/logo.png";
import { navdata } from "../../../helpercode/loverHeaderDropDownData";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiMenuLine, RiCloseLine, RiArrowRightSLine } from "react-icons/ri";
import EnqueryForm from "../../Enqueryform/EnqueryForm";
import Quickenquer from "../../Enqueryform/Quickenquer";
import { Helmet } from "react-helmet-async";

const BLUE = "#1e4d8c";
const GOLD = "#f5a623";
const GOLD_LIGHT = "#fff8ec";

export default function LoverHeader() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null);
  const [isopen, setIsopen] = useState(false);

  const handleEnquiryToggle = () => setIsopen((prev) => !prev);

  return (
    <>
      {/* ── SEO: Global site-wide meta tags ── */}
      <Helmet>
        {/* Google Font — moved to Helmet so it's in <head> properly */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Site identity */}
        <meta name="author" content="PRX India" />
        <meta name="theme-color" content="#1e4d8c" />

        {/* Open Graph defaults (pages can override these) */}
        <meta property="og:site_name" content="PRX India" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://prxindia.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card defaults */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@prxindia" />
        <meta name="twitter:image" content="https://prxindia.com/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Schema.org — Organization + Website */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://prxindia.com/#organization",
                "name": "PRX India",
                "url": "https://prxindia.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://prxindia.com/logo.png",
                  "width": 220,
                  "height": 80
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9211986515",
                  "contactType": "Customer Support",
                  "email": "Info@prxindia.com",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://www.facebook.com/prxindia",
                  "https://www.instagram.com/prxindia",
                  "https://www.youtube.com/prxindia"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://prxindia.com/#website",
                "url": "https://prxindia.com",
                "name": "PRX India",
                "description": "India's leading Public Relations agency for brand building, media relations, and corporate communications.",
                "publisher": { "@id": "https://prxindia.com/#organization" },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://prxindia.com/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* ── NAV ── */}
      <div
        className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <div
          className="max-w-[1300px] mx-auto px-6 flex items-center justify-between"
          style={{ minHeight: "80px" }}
        >
          {/* ── Logo ── */}
          <Link to="/" className="flex md:w-40" aria-label="PRX India - Home">
            <img
              src={logo}
              alt="PRX India - PR That Builds Brands"
              loading="eager"
              fetchpriority="high"
              width={220}
              height={80}
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "220px",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav aria-label="Main Navigation">
            <ul className="hidden lg:flex items-center gap-[4px]">
              {navdata.map((item, index) => (
                <li
                  key={item.mainheading}
                  className="relative"
                  onMouseEnter={() => { setActiveIndex(index); setActiveSubIndex(null); }}
                  onMouseLeave={() => { setActiveIndex(null); setActiveSubIndex(null); }}
                >
                  {item.mainheading.toLowerCase() === "enquiry now" ? (
                    <button
                      onClick={handleEnquiryToggle}
                      aria-label="Open Enquiry Form"
                      className="cursor-pointer whitespace-nowrap rounded-[4px] px-5 py-[10px] text-[14px] font-bold uppercase tracking-wide text-white transition-all duration-200"
                      style={{ backgroundColor: GOLD, letterSpacing: "0.5px" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d48a0e")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                    >
                      {item.mainheading}
                    </button>
                  ) : (
                    <>
                      <Link
                        to={item.url}
                        aria-label={item.mainheading}
                        aria-haspopup={item.subdata ? "true" : undefined}
                        aria-expanded={activeIndex === index && item.subdata ? "true" : undefined}
                        className="flex items-center gap-[1px] rounded-[4px] px-4 py-[10px] text-[14px] capitalize font-semibold transition-all duration-200 whitespace-nowrap"
                        style={
                          item.isActive || activeIndex === index
                            ? { backgroundColor: BLUE, color: "#fff" }
                            : { color: "#333", backgroundColor: "transparent" }
                        }
                      >
                        {item.mainheading}
                        {item.subdata && (
                          <MdOutlineArrowDropDown
                            aria-hidden="true"
                            className="text-[20px] mt-[1px]"
                            style={
                              item.isActive || activeIndex === index
                                ? { color: "#fff" }
                                : { color: "#555" }
                            }
                          />
                        )}
                      </Link>

                      {activeIndex === index && item.subdata && (
                        <div
                          className="absolute top-full left-0 mt-0 z-50 flex"
                          style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))" }}
                          role="region"
                          aria-label={`${item.mainheading} submenu`}
                        >
                          <ul
                            className="bg-white rounded-b-[4px] min-w-[230px] py-2"
                            style={{ border: "1px solid #e5e5e5" }}
                            role="menu"
                          >
                            {item.subdata.map((sub, subIndex) => (
                              <li
                                key={sub.subheading}
                                className="relative"
                                onMouseEnter={() => setActiveSubIndex(subIndex)}
                                role="menuitem"
                              >
                                <Link
                                  to={sub.url}
                                  className="flex items-center justify-between px-5 py-[10px] text-[14px] font-normal transition-colors duration-150 whitespace-nowrap"
                                  style={
                                    activeSubIndex === subIndex && sub.subsubhedata
                                      ? { color: BLUE, backgroundColor: GOLD_LIGHT }
                                      : { color: "#333" }
                                  }
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = BLUE;
                                    e.currentTarget.style.backgroundColor = GOLD_LIGHT;
                                  }}
                                  onMouseLeave={(e) => {
                                    if (activeSubIndex !== subIndex) {
                                      e.currentTarget.style.color = "#333";
                                      e.currentTarget.style.backgroundColor = "transparent";
                                    }
                                  }}
                                >
                                  {sub.subheading}
                                  {sub.subsubhedata && (
                                    <RiArrowRightSLine aria-hidden="true" className="text-[16px] ml-2 opacity-60" />
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {activeSubIndex !== null && item.subdata[activeSubIndex]?.subsubhedata && (
                            <ul
                              className="bg-white py-2 min-w-[260px]"
                              style={{
                                border: "1px solid #e5e5e5",
                                borderTop: `3px solid ${GOLD}`,
                                borderLeft: "none",
                                borderRadius: "0 0 4px 0",
                              }}
                              role="menu"
                            >
                              {item.subdata[activeSubIndex].subsubhedata.map((deep) => (
                                <li key={deep.subheading} role="menuitem">
                                  <Link
                                    to={deep.url}
                                    className="block px-5 py-[9px] text-[13px] font-normal transition-colors duration-150 whitespace-nowrap"
                                    style={{ color: "#444" }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.color = BLUE;
                                      e.currentTarget.style.backgroundColor = GOLD_LIGHT;
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.color = "#444";
                                      e.currentTarget.style.backgroundColor = "transparent";
                                    }}
                                  >
                                    {deep.subheading}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded transition-colors"
            style={{ color: BLUE }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <RiCloseLine className="text-[28px]" /> : <RiMenuLine className="text-[26px]" />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <nav id="mobile-menu" aria-label="Mobile Navigation" className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <ul className="flex flex-col px-4 py-2">
              {navdata.map((item, index) => (
                <li key={item.mainheading} className="border-b border-gray-100 last:border-0">
                  {item.mainheading.toLowerCase() === "enquiry now" ? (
                    <button
                      onClick={() => { handleEnquiryToggle(); setMobileOpen(false); }}
                      aria-label="Open Enquiry Form"
                      className="w-full text-left text-white font-bold text-[13px] px-4 py-2 rounded my-2 uppercase tracking-wide"
                      style={{ backgroundColor: GOLD }}
                    >
                      {item.mainheading}
                    </button>
                  ) : (
                    <>
                      <div
                        className="flex items-center justify-between py-3 cursor-pointer"
                        onClick={() =>
                          item.subdata
                            ? setMobileDropdown(mobileDropdown === index ? null : index)
                            : setMobileOpen(false)
                        }
                      >
                        <Link
                          to={item.url}
                          className="font-semibold text-[14px]"
                          style={item.isActive ? { color: BLUE } : { color: "#333" }}
                          onClick={() => !item.subdata && setMobileOpen(false)}
                        >
                          {item.mainheading}
                        </Link>
                        {item.subdata && (
                          <MdOutlineArrowDropDown
                            aria-hidden="true"
                            className={`text-[22px] transition-transform duration-200 ${mobileDropdown === index ? "rotate-180" : ""}`}
                            style={{ color: BLUE }}
                          />
                        )}
                      </div>

                      {mobileDropdown === index && item.subdata && (
                        <ul className="pl-3 pb-2">
                          {item.subdata.map((sub, subIdx) => (
                            <li key={sub.subheading}>
                              <div
                                className="flex items-center justify-between py-2 cursor-pointer"
                                onClick={() =>
                                  sub.subsubhedata
                                    ? setMobileSubDropdown(
                                        mobileSubDropdown === `${index}-${subIdx}` ? null : `${index}-${subIdx}`
                                      )
                                    : setMobileOpen(false)
                                }
                              >
                                <Link
                                  to={sub.url}
                                  className="text-[13px] border-l-2 pl-3 transition-colors"
                                  style={{ color: "#555", borderColor: GOLD }}
                                  onMouseEnter={(e) => (e.currentTarget.style.color = BLUE)}
                                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                                  onClick={(e) => sub.subsubhedata && e.preventDefault()}
                                >
                                  {sub.subheading}
                                </Link>
                                {sub.subsubhedata && (
                                  <MdOutlineArrowDropDown
                                    aria-hidden="true"
                                    className={`text-[18px] transition-transform duration-200 mr-1 ${mobileSubDropdown === `${index}-${subIdx}` ? "rotate-180" : ""}`}
                                    style={{ color: BLUE }}
                                  />
                                )}
                              </div>

                              {mobileSubDropdown === `${index}-${subIdx}` && sub.subsubhedata && (
                                <ul className="pl-5 pb-1">
                                  {sub.subsubhedata.map((deep) => (
                                    <li key={deep.subheading}>
                                      <Link
                                        to={deep.url}
                                        className="block py-[7px] text-[12px] border-l-2 pl-3 transition-colors"
                                        style={{ color: "#666", borderColor: GOLD }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = BLUE)}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {deep.subheading}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {isopen && <Quickenquer isopen={isopen} setIsopen={setIsopen} />}
    </>
  );
}