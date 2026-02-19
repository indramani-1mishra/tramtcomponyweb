import React from 'react';

import first from '../../../assets/clientimage/1st.png';
import img2 from '../../../assets/clientimage/2.png';
import img3 from '../../../assets/clientimage/3.png';
import img4 from '../../../assets/clientimage/4.png';
import img5 from '../../../assets/clientimage/5.png';
import img6 from '../../../assets/clientimage/6.png';
import img7 from '../../../assets/clientimage/7.png';
import img8 from '../../../assets/clientimage/8.png';
import img9 from '../../../assets/clientimage/9.png';
import img10 from '../../../assets/clientimage/10.png';
import img11 from '../../../assets/clientimage/11.png';
import img12 from '../../../assets/clientimage/12.png';
import img13 from '../../../assets/clientimage/13.png';
import img14 from '../../../assets/clientimage/14.png';
import img15 from '../../../assets/clientimage/15.png';
import img16 from '../../../assets/clientimage/16.png';
import img17 from '../../../assets/clientimage/17.png';
import img18 from '../../../assets/clientimage/18.png';
import img19 from '../../../assets/clientimage/19.png';
import img20 from '../../../assets/clientimage/20.png';
import img21 from '../../../assets/clientimage/21.png';
import img22 from '../../../assets/clientimage/22.png';
import img23 from '../../../assets/clientimage/23.png';
import img24 from '../../../assets/clientimage/24.png';
import img25 from '../../../assets/clientimage/25.png';
import img26 from '../../../assets/clientimage/26.png';
import img27 from '../../../assets/clientimage/27.png';
import img28 from '../../../assets/clientimage/28.png';
import img29 from '../../../assets/clientimage/29.png';
import img30 from '../../../assets/clientimage/30.png';
import { useNavigate } from 'react-router-dom';

const clients = [
  first, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
];

// Duplicate for seamless infinite loop
const doubled = [...clients, ...clients];

export default function OurClient() {
    const Navigate =useNavigate();
  return (
    <>
      {/* Keyframe animation injected once */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        className="w-full py-14 bg-white overflow-hidden"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {/* ── Title ── */}
        <h2
          className="text-center font-bold mb-4"
          style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: '#1a1a1a' }}
        >
          Our Clients
        </h2>

        {/* ── Subtitle ── */}
        <p
          className="text-center text-gray-600 mb-10 px-4"
          style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}
        >
          We have 150+ clients and we have done 200+ projects successfully
        </p>

        {/* ── Marquee Wrapper ── */}
        <div className="overflow-hidden w-full md:w-[1100px] md:m-auto ">
          <div className="marquee-track">
            {doubled.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0 mx-3 border border-gray-100 rounded bg-white hover:shadow-md transition-shadow duration-200"
                style={{ width: '130px', height: '90px' }}
              >
                <img
                  src={img}
                  alt={`client-${(i % clients.length) + 1}`}
                  className="w-full h-full object-contain p-2 cursor-pointer"
                  loading="lazy"
                onClick={()=>Navigate('/our_client')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── View More Button ── */}
        <div className="flex justify-center mt-10">
          <button
          onClick={()=>Navigate('/our_client')}
            className="px-8 py-3 font-semibold text-white transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: '#1a1a1a',
              fontSize: '14px',
              letterSpacing: '0.5px',
              cursor:"pointer"
            }}
           
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
}