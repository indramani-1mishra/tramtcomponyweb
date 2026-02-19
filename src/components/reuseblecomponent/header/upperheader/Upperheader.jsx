import React from 'react'
import { FaRupeeSign, FaHandsHelping, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsTwitter, BsFillThreadsFill } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';

import indmart from "../../../../assets/images/indmart.png";
import jd from "../../../../assets/images/jd.png";

const contactData = [
  {
    icon: <FaRupeeSign className="text-white text-[11px] flex-shrink-0" />,
    label: "Call For Sales :",
    link: "tel:+918527949808",
    display: "+91-8527949808",
  },
  {
    icon: <FaHandsHelping className="text-white text-[12px] flex-shrink-0" />,
    label: "For Support :",
    link: "tel:+918527949808",
    display: "+91-8527949808",
  },
  {
    icon: <MdMail className="text-white text-[13px] flex-shrink-0" />,
    label: "Mail :",
    link: "mailto:support@tramt.in",
    display: "support@tramt.in",
  },
];

const socialIcons = [
  { icon: <FaFacebook />,       link: "https://www.facebook.com/people/TRAMT-Technology-Private-Limited/61557681006004/?mibextid=LQQJ4d",  key: "fb", bg: "#1877f2" },
  { icon: <BsTwitter />,         link: "https://x.com/Tramttech",   key: "tw", bg: "#1da1f2" },
  { icon: <IoLogoLinkedin />,    link: "https://www.linkedin.com/company/tramt-technology-private-limited/",  key: "li", bg: "#0077b5" },
  { icon: <FaInstagram />,       link: "https://www.instagram.com/tramttech", key: "ig", bg: "#e1306c" },
  { icon: <BsFillThreadsFill />, link: "https://www.threads.com/@tramttech",   key: "th", bg: "#1877f2" },
  { icon: <FaGoogle />,          link: "https://www.google.com/search?sca_esv=7b63aca86818e80d&rlz=1C1CHBD_en-GBIN1070IN1076&sxsrf=ADLYWIL8Zt06I8ggCgITkE6CYSforYloQA:1729845392500&kgmid=/g/11vzcdllrd&q=Tramt+Technology+Pvt+Ltd&shndl=30&shem=uaasic&source=sh/x/loc/uni/m1/1&kgs=eccdfd4a375dc72e",    key: "go", bg: "#ea4335" },
  { icon: <IoLogoYoutube />,     link: "https://www.youtube.com/@TRAMTTechnology",   key: "yt", bg: "#ff0000" },
];

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