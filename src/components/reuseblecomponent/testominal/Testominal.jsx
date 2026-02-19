import React, { useState } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    rating: 4.5,
    review:
      '"Tramt Technology\'s digital marketing team helped us achieve outstanding results, driving increased website traffic and lead generation. Thank you for your expertise."',
    name: 'Ashok Tiwari',
    location: 'Noida, Uttar Pradesh',
  },
  {
    id: 2,
    rating: 4.5,
    review:
      '"We\'re thrilled with the quality of work delivered by Tramt Technology\'s design and development team. Our website looks fantastic and functions flawlessly."',
    name: 'Mr. Aryan',
    location: 'Noida, Uttar Pradesh',
  },
  {
    id: 3,
    rating: 5,
    review:
      '"Exceptional service! The team at Tramt Technology understood our vision perfectly and delivered beyond our expectations. Highly recommended for any digital marketing needs."',
    name: 'Priya Sharma',
    location: 'Delhi, India',
  },
  {
    id: 4,
    rating: 4.5,
    review:
      '"Tramt\'s PR agency services transformed our brand image completely. Their strategic communication approach helped us reach a wider audience and build lasting credibility."',
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