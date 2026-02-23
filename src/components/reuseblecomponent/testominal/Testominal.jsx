import React, { useState } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    rating: 4.5,
    review:
      '"PRX India helped us with our political campaign\'s public image management. Their media coverage and crisis communication support was truly exceptional. Highly recommended!"',
    name: 'Ashok Tiwari',
    location: 'Noida, Uttar Pradesh',
  },
  {
    id: 2,
    rating: 4.5,
    review:
      '"We approached PRX India for our startup PR launch and they delivered beyond expectations. From launch announcement to national media coverage, everything was handled professionally."',
    name: 'Mr. Aryan',
    location: 'Noida, Uttar Pradesh',
  },
  {
    id: 3,
    rating: 5,
    review:
      '"PRX India\'s award nomination and recognition PR service helped us win a prestigious industry award. Their strategic nomination positioning and documentation support was outstanding!"',
    name: 'Priya Sharma',
    location: 'Delhi, India',
  },
  {
    id: 4,
    rating: 4.5,
    review:
      '"Our product launch event was a huge success thanks to PRX India\'s event PR and media coverage team. Pre-event buzz creation and on-ground media management was top-notch."',
    name: 'Rahul Gupta',
    location: 'Lucknow, Uttar Pradesh',
  },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: '#FFD700', fontSize: '20px' }}>
          {rating >= star ? (
            <FaStar />
          ) : rating >= star - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )} 
        </span>
      ))}
    </div>
  );
}

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 2; // Show 2 at a time on desktop

  const prev = () =>
    setStartIndex((prev) => (prev - visible + testimonials.length) % testimonials.length);
  const next = () =>
    setStartIndex((prev) => (prev + visible) % testimonials.length);

  // Get current 2 testimonials
  const currentSlides = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <section
      className="w-full py-14 px-4 bg-white border-b border-gray-200"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {/* ── Title ── */}
      <h2
        className="text-center font-bold mb-12"
        style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: '#1a1a1a' }}
      >
        Testimonials
      </h2>

      {/* ── Slider Wrapper ── */}
      <div className="relative max-w-[1200px] mx-auto px-8">

        {/* Prev Arrow */}
        <button
          onClick={prev}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Previous"
        >
          <MdOutlineArrowBackIos className="text-[22px]" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {currentSlides.map((item, i) => (
            <div key={`${item.id}-${i}`} className="flex flex-col gap-4">
              {/* Stars */}
              <Stars rating={item.rating} />

              {/* Review Text */}
              <p
                className="text-gray-600 leading-relaxed italic"
                style={{ fontSize: 'clamp(13px, 1.2vw, 15px)' }}
              >
                {item.review}
              </p>

              {/* Name & Location */}
              <div>
                <p
                  className="font-bold text-gray-900"
                  style={{ fontSize: 'clamp(13px, 1.1vw, 15px)' }}
                >
                  {item.name}
                </p>
                <p className="text-gray-500 text-[13px]">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Next"
        >
          <MdOutlineArrowForwardIos className="text-[22px]" />
        </button>
      </div>
    </section>
  );
}