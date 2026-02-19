import React from 'react';
import { Link } from 'react-router-dom';
import { MdMail, MdLocationOn, MdPhone } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { aboutLinks, importantLinks, serviceLinks, socialIcons } from '../../helpercode/footerHelperCode';


export default function Footer() {
  return (
    <footer style={{ fontFamily: "'Lato', sans-serif", backgroundColor: '#1a1a1a' }}>

      {/* ── Top CTA Section ── */}
      <div
        className="w-full text-center py-12 px-4"
        style={{ backgroundColor: '#222', borderBottom: '1px solid #333' }}
      >
        <h2
          className="text-white font-semibold mb-6"
          style={{ fontSize: 'clamp(20px, 3vw, 34px)' }}
        >
          Let's connect! Your success starts with a conversation.
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded transition-opacity duration-200 hover:opacity-85"
          style={{ backgroundColor: '#e8540a', fontSize: '15px' }}
        >
          <MdMail className="text-[18px]" />
          Contact Us
        </Link>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ── About Us ── */}
        <div>
          <h3
            className="text-white font-bold mb-5"
            style={{ fontSize: '16px' }}
          >
            About Us
          </h3>
          <ul className="flex flex-col gap-3">
            {aboutLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.url}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Services ── */}
        <div>
          <h3
            className="text-white font-bold mb-5"
            style={{ fontSize: '16px' }}
          >
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.url}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Important Links ── */}
        <div>
          <h3
            className="text-white font-bold mb-5"
            style={{ fontSize: '16px' }}
          >
            Important Links
          </h3>
          <ul className="flex flex-col gap-3">
            {importantLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.url}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact Us ── */}
        <div>
          <h3
            className="text-white font-bold mb-5"
            style={{ fontSize: '16px' }}
          >
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 text-gray-400 text-[14px]">
              <MdLocationOn className="text-[18px] flex-shrink-0 mt-[2px] text-gray-300" />
              <span>GF-006,A-1 sector 59 Noida,UP</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-[14px]">
              <MdPhone className="text-[16px] flex-shrink-0 text-gray-300" />
              <a href="tel:+918527949808" className="hover:text-white transition-colors">
                +91-8527949808
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-[14px]">
              <MdMail className="text-[16px] flex-shrink-0 text-gray-300" />
              <a href="mailto:support@tramt.in" className="hover:text-white transition-colors">
                support@tramt.in
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="mt-5">
            <p className="text-white font-bold mb-3 text-[14px]">Social Media</p>
            <div className="flex items-center gap-3">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-[18px]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div
        className="w-full text-center py-4 px-4"
        style={{ borderTop: '1px solid #333' }}
      >
        <p className="text-gray-500 text-[13px]">
          © 2026 Tramt Technology Pvt Ltd. All rights reserved.
        </p>
      </div>

    </footer>
  );
}