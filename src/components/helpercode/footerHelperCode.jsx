import {  FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

import { BsTwitter, BsFillThreadsFill } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoYoutube }  from "react-icons/io";

export const aboutLinks = [
  { label: 'About', url: '/about' },
  { label: 'Testinomial', url: '/' },
  { label: 'Terms of Services', url: '/terms' },
  { label: 'Blog', url: '/blog' },
];

export const serviceLinks = [
     {label: "Event PR & Media Coverage",         url: "/EventPRMediaCoverage" },
      {label: "Award Nomination & Recognition PR", url: "/AwardNominationRecognitionPR" },
      { label: "Political & Public Image PR",       url: "/PoliticalPublicImagePR" },
      { label: "Integrated PR & Digital Visibility Package", url: "/IntegratedPRDigitalVisibilityPackage" },
      { label: "CEO & Founder Profiling",                    url: "/CEOFounderProfiling" },
    
];

export const importantLinks = [
   
         { label: "Media Relations Management",           url: "/mediarelation" },
          { label: "Press Release Writing & Distribution", url: "/pressreleasepage" },
          { label: "Digital PR Campaigns",                 url: "/digitalPR" },
          { label: "Brand Reputation Management",          url: "/brandreputaion" },
          { label: "Corporate Communications",             url: "/CorporateCommunications" },
];

 export const socialIcons = [
    { icon: <FaFacebook />,       link: "https://www.facebook.com/share/1QzMP1nYZu/",  key: "fb", bg: "#1877f2" },
  
 
  { icon: <FaInstagram />,       link: "https://www.instagram.com/prxindiagroup/", key: "ig", bg: "#e1306c" },
  
  { icon: <IoLogoYoutube />,     link: "https://www.youtube.com/@prxindia",   key: "yt", bg: "#ff0000" },
];
