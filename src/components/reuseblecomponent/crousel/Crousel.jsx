import React, { useState, useEffect } from 'react';
import socialmedia from '../../../assets/images/socialmedia.png';
import performence from '../../../assets/images/performence.png';
import pragency from '../../../assets/images/pragency.png';

const slides = [socialmedia, performence, pragency];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ── Slides ── */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i + 1}`}
            className="w-full flex-shrink-0 object-cover"
            style={{ minWidth: '100%' }}
          />
        ))}
      </div>

      {/* ── Dot Indicators ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '24px' : '10px',
              height: '10px',
              backgroundColor: i === current ? '#e8540a' : '#ccc',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}