import React, { useState, useEffect, useCallback } from 'react';
import first from '../../../assets/pageImages/Homepagebanner1.png';
import second from '../../../assets/pageImages/homepagebanner-2.png';
import three from '../../../assets/pageImages/homepagebanner-3.png';
import four from '../../../assets/pageImages/homepagebanner-4.png';

const slides = [first, second, three, four];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: '400px', background: '#000' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Slides ── */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
            style={{ minWidth: '100%' }}
          >
            <img
              src={img}
              alt={`slide-${i + 1}`}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'fill',   /* image stretch hogi width+height dono fill karne ke liye - no crop */
              }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* ── Prev Button ── */}
      <button
        onClick={prev}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          width: '40px',
          height: '40px',
          background: 'rgba(0,0,0,0.45)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          color: '#fff',
          backdropFilter: 'blur(4px)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* ── Next Button ── */}
      <button
        onClick={next}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          width: '40px',
          height: '40px',
          background: 'rgba(0,0,0,0.45)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          color: '#fff',
          backdropFilter: 'blur(4px)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── Dot Indicators ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '28px' : '10px',
              height: '10px',
              backgroundColor: i === current ? '#e8540a' : 'rgba(255,255,255,0.6)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* ── Progress Bar ── */}
      <div
        className="absolute bottom-0 left-0 h-0.5 z-10"
        style={{
          width: `${((current + 1) / slides.length) * 100}%`,
          background: '#e8540a',
          transition: 'width 0.7s ease-in-out',
        }}
      />
    </div>
  );
}