import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: 'Political & Public Image PR',
    url:"/PoliticalPublicImagePR",
    points: [
      ' Image Positioning Strategy.',
      'Media Coverage & Press Management.',
      'Speech & Public Statement Drafting.',
      'Reputation Monitoring & Protection.',
      'Crisis Communication Support',
      'Campaign Visibility Enhancement',
      'Social & Digital Image Management',
    ],
  },
  {
    id: 2,
    title: 'Award Nomination & Recognition PR',
    url:"/AwardNominationRecognitionPR",
    points: [
      'Award Research & Shortlisting',
      ' Strategic Nomination Positioning',
      'Professional Nomination Drafting.',
      'Supporting Documentation Preparation.',
      'Jury Communication & Submission Management',
      
    ],
  },
  {
    id: 3,
    title: 'Event PR & Media Coverage',
    url:"/EventPRMediaCoverage",
    points: [
      'Pre-Event Buzz Creation',
      ' Media Invitations & Coordination',
      'On-Ground Media Management',
      'IPost-Event Press Release Distribution',
      ' Photo & Video Media Distribution',
      ' Digital Amplification'
    ],
  },
  {
    id: 4,
    title: 'Startup PR Launch Packages',
    url:"/StartupPRLaunchPackages",
    points: [
      'Startup Launch Announcement',
      'National & Digital Media Coverage',
      'Founder & Leadership Profiling',
      ' Funding & Milestone PR',
      'Influencer & Digital Amplification',
    ],
  },
]

export default function WhatWeOffer() {
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();
   const onclickhandler = (item)=>{
    setActiveId(item.id);
    navigate(item.url);
    
   }
  return (
    <section
      className="w-full py-12 px-4 bg-white"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {/* ── Section Title ── */}
      <h2
        className="text-center font-bold mb-10"
        style={{
          fontSize: 'clamp(24px, 3vw, 36px)',
          color: '#1a1a1a',
        }}
      >
        What We Offer
      </h2>

      {/* ── Cards Grid ── */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {offers.map((item) => {
          const isActive = activeId === item.id

          return (
            <div
              key={item.id}
              
              onClick={() => onclickhandler(item)}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
              className="rounded-sm cursor-pointer transition-all duration-300 flex flex-col py-8 px-6"
              style={{
                backgroundColor: isActive ? '#1e4d8c' : '#1e1e1e',
              }}
            >
              {/* Card Title */}
              <h3
                className="text-white text-center font-semibold mb-4 pb-3"
                style={{
                  fontSize: 'clamp(15px, 1.4vw, 18px)',
                  borderBottom: `2px solid ${
                    isActive ? 'rgba(255,255,255,0.6)' : '#555'
                  }`,
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
                        color: isActive ? '#fff' : '#1e4d8c',
                        fontSize: '13px',
                      }}
                    />
                    <span
                      className="text-white leading-snug"
                      style={{
                        fontSize: 'clamp(12px, 1.1vw, 14px)',
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}