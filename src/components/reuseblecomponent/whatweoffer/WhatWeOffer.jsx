import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const offers = [
  {
    id: 1,
    title: 'Performance Marketing',
    points: [
      'Custom-built, responsive websites tailored to your brand.',
      'E-commerce solutions for seamless online shopping experiences.',
      'Website maintenance and support for ongoing optimization.',
      'Integration of user-friendly Content Management Systems (CMS).',
      'Cost: Started From 50000+gst',
    ],
  },
  {
    id: 2,
    title: 'Dedicated Marketing',
    points: [
      'Custom-built, responsive websites tailored to your brand.',
      'E-commerce solutions for seamless online shopping experiences.',
      'Website maintenance and support for ongoing optimization.',
      'Integration of user-friendly Content Management Systems (CMS).',
      'Cost: Started From 50000+gst',
    ],
  },
  {
    id: 3,
    title: 'Social Media Management',
    points: [
      'Custom-built, responsive websites tailored to your brand.',
      'E-commerce solutions for seamless online shopping experiences.',
      'Website maintenance and support for ongoing optimization.',
      'Integration of user-friendly Content Management Systems (CMS).',
      'Cost: Started From 50000+gst',
    ],
  },
  {
    id: 4,
    title: 'PR Agency',
    points: [
      'Custom-built, responsive websites tailored to your brand.',
      'E-commerce solutions for seamless online shopping experiences.',
      'Website maintenance and support for ongoing optimization.',
      'Integration of user-friendly Content Management Systems (CMS).',
      'Cost: Started From 40000+gst',
    ],
  },
];

export default function WhatWeOffer() {
  const [activeId, setActiveId] = useState(null); // Dedicated Marketing active by default

  return (
    <section
      className="w-full py-12 px-4 bg-white"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {/* ── Section Title ── */}
      <h2
        className="text-center font-bold mb-10"
        style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: '#1a1a1a' }}
      >
        What We Offer
      </h2>

      {/* ── Cards Grid ── */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {offers.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="rounded-sm cursor-pointer transition-all duration-300 flex flex-col py-8 px-6"
              style={{
                backgroundColor: isActive ? '#e8540a' : '#1e1e1e',
              }}
              onMouseEnter={()=>setActiveId(item.id)}
              onmouseleave={()=>setActiveId(null)}
              
            >
              {/* Card Title */}
              <h3
                className="text-white text-center font-semibold mb-4 pb-3"
                style={{
                  fontSize: 'clamp(15px, 1.4vw, 18px)',
                  borderBottom: `2px solid ${isActive ? 'rgba(255,255,255,0.6)' : '#555'}`,
                }}
              >
                {item.title}
              </h3>

              {/* Points */}
              <ul className="flex flex-col gap-3 mt-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheck
                      className="flex-shrink-0 mt-[3px]"
                      style={{
                        color: isActive ? '#fff' : '#e8540a',
                        fontSize: '13px',
                      }}
                    />
                    <span
                      className="text-white leading-snug"
                      style={{ fontSize: 'clamp(12px, 1.1vw, 14px)' }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}