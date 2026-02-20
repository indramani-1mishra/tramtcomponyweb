import React from 'react'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'
import first from '../../../assets/pageImages/NationalMediaCoverage.png'

const nationalMediaContent = [
  {
    type: "para",
    text: "At PRx India, our National Media Coverage Campaign is designed to give your brand powerful visibility across leading news platforms and high-authority media outlets across India. We help businesses gain nationwide recognition, credibility, and industry positioning through strategic media placements."
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
        title: "Nationwide Media Distribution",
        desc: "Press releases and brand stories distributed across top-tier national news portals and publications."
      },
      {
        icon: "🔹",
        title: "Strategic Story Positioning",
        desc: "Crafting impactful narratives that attract editors, journalists, and national audiences."
      },
      {
        icon: "🔹",
        title: "Multi-Platform Digital Coverage",
        desc: "Visibility across business, startup, lifestyle, technology, and industry-specific platforms."
      },
      {
        icon: "🔹",
        title: "Founder & Brand Features",
        desc: "In-depth profiles and feature stories to build authority at a national level."
      },
      {
        icon: "🔹",
        title: "SEO-Optimized Media Presence",
        desc: "Keyword-focused coverage to strengthen Google visibility and search reputation."
      },
      {
        icon: "🔹",
        title: "Coverage Reporting & Performance Insights",
        desc: "Detailed reports with live links and reach insights for transparency and measurable impact."
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
      "Startups Seeking National Recognition",
      "Established Brands Expanding Market Reach",
      "CEOs & Founders Building Authority",
      "Product Launches & Major Announcements",
      "Political & Public Image Campaigns"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Taking Your Brand from Local Presence to National Headlines."
  }
]

export default function NationalMediaCoverageCampaign() {
  return (
    <div>
      <ShowdataReuseble
        heading="National Media Coverage Campaign"
        image={first}
        imageAlt="National Media Coverage Campaign"
        content={nationalMediaContent}
      />
    </div>
  )
}