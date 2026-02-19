import {  FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

import { BsTwitter, BsFillThreadsFill } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoYoutube }  from "react-icons/io";

export const aboutLinks = [
  { label: 'About', url: '/about' },
  { label: 'Testinomial', url: '/testimonial' },
  { label: 'Terms of Services', url: '/terms' },
  { label: 'Blog', url: '/blog' },
];

export const serviceLinks = [
  { label: 'Performance Marketing', url: '/services/performance-marketing' },
  { label: 'Dedicated Marketing', url: '/services/dedicated-marketing' },
  { label: 'Social Media Management', url: '/services/social-media' },
  { label: 'PR Agency', url: '/services/pr-agency' },
];

export const importantLinks = [
  { label: 'Downloads', url: '/downloads' },
  { label: 'Pay Online', url: '/pay-online' },
  { label: 'Terms & Conditions', url: '/terms' },
  { label: 'Privacy Policy', url: '/privacy-policy' },
  { label: 'Cancellation & Refund Policy', url: '/refund-policy' },
];

 export const socialIcons = [
   { icon: <FaFacebook />,       link: "https://www.facebook.com/people/TRAMT-Technology-Private-Limited/61557681006004/?mibextid=LQQJ4d",  key: "fb", bg: "#1877f2" },
    { icon: <BsTwitter />,         link: "https://x.com/Tramttech",   key: "tw", bg: "#1da1f2" },
    { icon: <IoLogoLinkedin />,    link: "https://www.linkedin.com/company/tramt-technology-private-limited/",  key: "li", bg: "#0077b5" },
    { icon: <FaInstagram />,       link: "https://www.instagram.com/tramttech", key: "ig", bg: "#e1306c" },
    { icon: <BsFillThreadsFill />, link: "https://www.threads.com/@tramttech",   key: "th", bg: "#1877f2" },
    { icon: <FaGoogle />,          link: "https://www.google.com/search?sca_esv=7b63aca86818e80d&rlz=1C1CHBD_en-GBIN1070IN1076&sxsrf=ADLYWIL8Zt06I8ggCgITkE6CYSforYloQA:1729845392500&kgmid=/g/11vzcdllrd&q=Tramt+Technology+Pvt+Ltd&shndl=30&shem=uaasic&source=sh/x/loc/uni/m1/1&kgs=eccdfd4a375dc72e",    key: "go", bg: "#ea4335" },
    { icon: <IoLogoYoutube />,     link: "https://www.youtube.com/@TRAMTTechnology",   key: "yt", bg: "#ff0000" },
];
