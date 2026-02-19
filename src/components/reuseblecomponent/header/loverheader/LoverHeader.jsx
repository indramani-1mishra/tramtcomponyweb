import React, { useState } from "react";
import logo from "../../../../assets/images/logo.png";
import { navdata } from "../../../helpercode/loverHeaderDropDownData";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

export default function LoverHeader() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <>
      {/* Google Font - Lato (matches tramt.in exactly) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="sticky top-0 z-50 bg-white border-b border-orange-500 shadow-sm"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-around"
          style={{ minHeight: "80px" }}
        >

          {/* ── Logo ── */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Tramt Advertising Partner"
              loading="lazy"
              className="h-[70px] w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden lg:flex items-center gap-[4px] md:gap-[3px]">
            {navdata.map((item, index) => (
              <li
                key={item.mainheading}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {item.mainheading.toLowerCase() === "enquiry now" ? (
                  /* ── Enquiry Now Button ── */
                  <button
                    onClick={item.onClick}
                    className="cursor-pointer whitespace-nowrap rounded-[4px] px-5 py-[10px] text-[14px] font-bold uppercase tracking-wide text-white transition-all duration-200"
                    style={{ backgroundColor: "#e8540a", letterSpacing: "0.5px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c94508")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e8540a")}
                  >
                    {item.mainheading}
                  </button>
                ) : (
                  <>
                    {/* ── Nav Link ── */}
                    <Link
                      to={item.url}
                      className="flex items-center gap-[1px] rounded-[4px] px-4 py-[10px] text-[14px] font-semibold transition-all duration-200 whitespace-nowrap capitalize"
                     style={
  item.isHome
    ? {
        backgroundColor: "#e8540a",
        color: "#fff",
      }
    : activeIndex === index
    ? {
        backgroundColor: "#e8540a",
        color: "#fff",
      }
    : {
        backgroundColor: "transparent",
        color: "#333",
      }
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

                    {/* ── Dropdown ── */}
                    {activeIndex === index && item.subdata && (
                      <ul
                        className="absolute top-full left-0 mt-0 bg-white shadow-xl rounded-b-[4px] min-w-[230px] z-50 py-2"
                        style={{ border: "1px solid #e5e5e5",  }}
                      >
                        {item.subdata.map((sub) => (
                          <li key={sub.subheading}>
                            <Link
                              to={sub.url}
                              className="block px-5 py-[10px] text-[14px] font-semibold transition-colors duration-150 whitespace-nowrap capitalize"
                              style={{ color: "#333" }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#e8540a";
                                e.currentTarget.style.backgroundColor = "#fff8f5";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#333";
                                e.currentTarget.style.backgroundColor = "transparent";
                              }}
                            >
                              {sub.subheading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded text-gray-700 hover:text-orange-500 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <RiCloseLine className="text-[28px]" />
            ) : (
              <RiMenuLine className="text-[26px]" />
            )}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <ul className="flex flex-col px-4 py-2">
              {navdata.map((item, index) => (
                <li
                  key={item.mainheading}
                  className="border-b border-gray-100 last:border-0"
                >
                  {item.mainheading.toLowerCase() === "enquiry now" ? (
                    <button
                      onClick={() => {
                        item.onClick?.();
                        setMobileOpen(false);
                      }}
                      className="w-full text-left text-white   font-bold text-[13px] px-4 py-2 rounded my-2 uppercase tracking-wide transition-colors"
                      style={{ backgroundColor: "#e8540a" }}
                    >
                      {item.mainheading}
                    </button>
                  ) : (
                    <>
                      <div
                        className="flex items-center justify-between py-3 cursor-pointer"
                        onClick={() =>
                          item.subdata
                            ? setMobileDropdown(
                                mobileDropdown === index ? null : index
                              )
                            : setMobileOpen(false)
                        }
                      >
                        <Link
                          to={item.url}
                          className="font-semibold text-[14px] capitalize"
                          style={
                            item.isActive
                              ? { color: "#e8540a" }
                              : { color: "#333" }
                          }
                          onClick={() => !item.subdata && setMobileOpen(false)}
                        >
                          {item.mainheading}
                        </Link>
                        {item.subdata && (
                          <MdOutlineArrowDropDown
                            className={`text-[22px] text-gray-500 transition-transform duration-200 ${
                              mobileDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>

                      {/* Mobile Dropdown */}
                      {mobileDropdown === index && item.subdata && (
                        <ul className="pl-3 pb-2">
                          {item.subdata.map((sub) => (
                            <li key={sub.subheading}>
                              <Link
                                to={sub.url}
                                className="block py-2 text-[13px]  font-semibold text-gray-600 border-l-2 border-orange-200 pl-3 hover:border-orange-500 transition-colors capitalize"
                                style={{ color: "#555" }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.color = "#e8540a")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.color = "#555")
                                }
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.subheading}
                              </Link>
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
    </>
  );
}