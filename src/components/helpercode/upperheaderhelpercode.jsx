import { FaRupeeSign, FaHandsHelping, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsTwitter, BsFillThreadsFill } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoYoutube }  from "react-icons/io";

export const contactData = [
  {
    icon: <FaRupeeSign className="text-white text-[11px] flex-shrink-0" />,
    label: "Call For Sales :",
    link: "tel:+919211986515",
    display: "+91-9211986515",
  },
  {
    icon: <FaHandsHelping className="text-white text-[12px] flex-shrink-0" />,
    label: "For Support :",
    link: "tel:+919211986515",
    display: "+91-9211986515",
  },
  {
    icon: <MdMail className="text-white text-[13px] flex-shrink-0" />,
    label: "Mail :",
    link: "mailto:Info@prxindia.com",
    display: "Info@prxindia.com",
  },
];
 
 export const socialIcons = [
  { icon: <FaFacebook />,       link: "https://www.facebook.com/share/1QzMP1nYZu/",  key: "fb", bg: "#1877f2" },
  
 
  { icon: <FaInstagram />,       link: "https://www.instagram.com/prxindiagroup/", key: "ig", bg: "#e1306c" },
  
  { icon: <IoLogoYoutube />,     link: "https://www.youtube.com/@prxindia",   key: "yt", bg: "#ff0000" },
];