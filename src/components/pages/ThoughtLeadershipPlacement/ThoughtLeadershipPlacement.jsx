import React from 'react'
import first from '../../../assets/pageImages/ThoughtLeadershipPlacement.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const thoughtLeadershipContent = [
  {
    type: "para",
    text: "At PRx India, our Thought Leadership Placement service is designed to position you and your brand as a trusted authority in your industry. We strategically place your insights, expertise, and opinions on high-credibility media platforms to build influence, trust, and long-term brand value."
  },
  {
    type: "para",
    text: "We don't just publish content — we create authority."
  },
  {
    type: "heading",
    text: "What We Offer"
  },
  {
    type: "services",
    items: [
      {
        icon: "🔹",
        title: "Expert Article Placements",
        desc: "Publishing opinion pieces and industry insights on reputed digital news and business platforms."
      },
      {
        icon: "🔹",
        title: "Guest Columns & Editorial Features",
        desc: "Securing contributor opportunities in leading publications."
      },
      {
        icon: "🔹",
        title: "Industry Commentary & Quotes",
        desc: "Positioning you as a go-to expert for media commentary and trend analysis."
      },
      {
        icon: "🔹",
        title: "Research & Insight-Based Content",
        desc: "Creating data-backed articles that showcase your knowledge and expertise."
      },
      {
        icon: "🔹",
        title: "LinkedIn & Professional Authority Building",
        desc: "Aligning PR placements with your personal and corporate branding strategy."
      },
      {
        icon: "🔹",
        title: "Long-Term Authority Strategy",
        desc: "Developing consistent visibility to establish lasting industry influence."
      }
    ]
  },
  {
    type: "heading",
    text: "Ideal For"
  },
  {
    type: "checklist",
    items: [
      "CEOs & Founders",
      "Industry Experts & Consultants",
      "Corporate Leaders",
      "Startup Entrepreneurs",
      "Subject-Matter Specialists"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Building Industry Leaders, Not Just Brand Names."
  }
]

export default function ThoughtLeadershipPlacement() {
  return (
    <div>
      <ShowdataReuseble
        heading="Thought Leadership Placement"
        image={first}
        imageAlt="Thought Leadership Placement"
        content={thoughtLeadershipContent}
      />
    </div>
  )
}