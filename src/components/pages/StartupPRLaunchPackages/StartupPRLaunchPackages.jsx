import React from 'react'
import first from '../../../assets/pageImages/StartupPRLaunchPackages.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const startupPRContent = [
  {
    type: "para",
    text: "At PRx India, our Startup PR Launch Packages are specially designed to give emerging brands powerful market entry and strong media visibility from day one. We help startups build credibility, attract investors, and gain national recognition through strategic PR campaigns."
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
        title: "Startup Launch Announcement",
        desc: "Crafting impactful launch press releases to introduce your brand to the market."
      },
      {
        icon: "🔹",
        title: "National & Digital Media Coverage",
        desc: "Targeted placements across leading news portals, startup platforms, and industry publications."
      },
      {
        icon: "🔹",
        title: "Founder & Leadership Profiling",
        desc: "Positioning founders as industry leaders through interviews, features, and expert articles."
      },
      {
        icon: "🔹",
        title: "Funding & Milestone PR",
        desc: "Media coverage for funding rounds, partnerships, product launches, and growth achievements."
      },
      {
        icon: "🔹",
        title: "Influencer & Digital Amplification",
        desc: "Boosting reach through blogger outreach and digital PR channels."
      },
      {
        icon: "🔹",
        title: "Brand Authority Building",
        desc: "Creating a strong online presence through SEO-driven PR content."
      },
      {
        icon: "🔹",
        title: "Media Strategy Consultation",
        desc: "Guidance on long-term PR planning for sustainable brand growth."
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
      "Early-Stage Startups",
      "Funded Startups",
      "Tech & D2C Brands",
      "App & SaaS Launches",
      "Emerging Entrepreneurs"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Launching Startups into Headlines, Not Just Markets."
  }
]

export default function StartupPRLaunchPackages() {
  return (
    <div>
      <ShowdataReuseble
        heading="Startup PR Launch Packages"
        image={first}
        imageAlt="Startup PR Launch Packages"
        content={startupPRContent}
      />
    </div>
  )
}