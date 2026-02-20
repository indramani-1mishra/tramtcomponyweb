import React, { useState } from "react";
import logo from "../../../../assets/images/logo.png";
import { navdata } from "../../../helpercode/loverHeaderDropDownData";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiMenuLine, RiCloseLine, RiArrowRightSLine } from "react-icons/ri";
import EnqueryForm from "../../Enqueryform/EnqueryForm";
import Quickenquer from "../../Enqueryform/Quickenquer";

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

  // ✅ Ek clean handler — yahi use hoga har jagah
  const handleEnquiryToggle = () => setIsopen((prev) => !prev);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <div
          className="max-w-[1300px] mx-auto px-6 flex items-center justify-between"
          style={{ minHeight: "80px" }}
        >
          {/* ── Logo ── */}
          <Link to="/" className="flex md:w-40">
            <img
              src={logo}
              alt="PrxIndia"
              loading="lazy"
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "220px",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden lg:flex items-center gap-[4px]">
            {navdata.map((item, index) => (
              <li
                key={item.mainheading}
                className="relative"
                onMouseEnter={() => { setActiveIndex(index); setActiveSubIndex(null); }}
                onMouseLeave={() => { setActiveIndex(null); setActiveSubIndex(null); }}
              >
                {item.mainheading.toLowerCase() === "enquiry now" ? (
                  // ✅ onClick pe sirf handleEnquiryToggle — koi argument nahi
                  <button
                    onClick={handleEnquiryToggle}
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
                      >
                        <ul
                          className="bg-white rounded-b-[4px] min-w-[230px] py-2"
                          style={{ border: "1px solid #e5e5e5" }}
                        >
                          {item.subdata.map((sub, subIndex) => (
                            <li
                              key={sub.subheading}
                              className="relative"
                              onMouseEnter={() => setActiveSubIndex(subIndex)}
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
                                  <RiArrowRightSLine className="text-[16px] ml-2 opacity-60" />
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
                          >
                            {item.subdata[activeSubIndex].subsubhedata.map((deep) => (
                              <li key={deep.subheading}>
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

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded transition-colors"
            style={{ color: BLUE }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <RiCloseLine className="text-[28px]" /> : <RiMenuLine className="text-[26px]" />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <ul className="flex flex-col px-4 py-2">
              {navdata.map((item, index) => (
                <li key={item.mainheading} className="border-b border-gray-100 last:border-0">
                  {item.mainheading.toLowerCase() === "enquiry now" ? (
                    // ✅ Mobile mein bhi same handler
                    <button
                      onClick={() => { handleEnquiryToggle(); setMobileOpen(false); }}
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
          </div>
        )}
      </div>

     
      {isopen && <Quickenquer isopen={isopen} setIsopen={setIsopen} />}
    </>
  );
}
