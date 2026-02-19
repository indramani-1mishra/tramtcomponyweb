import React from 'react'
import { Link } from 'react-router-dom';
import indmart from "../../../../assets/images/indmart.png";
import jd from "../../../../assets/images/jd.png";
import { contactData, socialIcons } from '../../../helpercode/upperheaderhelpercode';
import {FaRupeeSign} from "react-icons/fa";
export default function Upperheader() {
  return (
    <div className="bg-[#1a1a1a] w-full overflow-hidden">
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-y-1 px-3 py-[5px] min-h-[36px]">

        {/* ── Contact Items ── */}
        {contactData.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-1 px-2 sm:px-3 border-r border-[#3a3a3a] text-[11px] sm:text-[12px] whitespace-nowrap"
          >
            {item.icon}
            <span className="text-[#aaa] font-normal hidden sm:inline">
              {item.label}
            </span>
            <a
              href={item.link}
              className="text-white font-medium hover:text-green-400 transition-colors duration-200 no-underline"
            >
              {item.display}
            </a>
          </div>
        ))}

        {/* ── Action Buttons ── */}
        <div className="flex items-center gap-1 px-2 sm:px-3 border-r border-[#3a3a3a] whitespace-nowrap">
          <button className="flex items-center gap-1 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-[11px] font-semibold px-2 sm:px-3 py-[3px] rounded transition-colors duration-200 cursor-pointer">
            <FaRupeeSign className="text-[10px]" />
            Pay Online
          </button>
          <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-[11px] font-semibold px-2 sm:px-3 py-[3px] rounded transition-colors duration-200 cursor-pointer">
            Downloads
          </button>
        </div>

        {/* ── Social Icons ── */}
        <div className="flex items-center pl-2 gap-2">
          {socialIcons.map((s) => (
            <Link
              key={s.key}
              to={s.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: s.bg }}
              className="flex items-center justify-center w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] text-white text-[11px] sm:text-[12px] rounded transition-all duration-200 hover:scale-110 hover:brightness-110"
            >
              {s.icon}
            </Link>
          ))}
        </div>

        {/* ── Extra Logos (JD, Indmart) ── */}
        <div className="flex items-center gap-1 pl-2">
          <Link to="https://www.justdial.com/Noida/Tramt-Technology-Private-Limited-Noida-Sector-59/011PXX11-XX11-240401120217-L1G6_BZDET?via=scode"><img src={jd} alt="JD" className="h-4 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity" /></Link>
          <Link to="https://www.indiamart.com/tramt-technology-private-limited/" ><img src={indmart} alt="Indmart" className="h-4 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity" /></Link>
        </div>

      </div>
    </div>
  );
}