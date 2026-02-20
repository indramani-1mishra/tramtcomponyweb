import React from 'react'
import first from '../../../assets/pageImages/1st.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const pressReleaseContent = [
  {
    type: "para",
    text: "At PRx India, we craft powerful, newsworthy press releases that capture attention and deliver real media impact. Our goal is not just to publish content, but to position your brand in front of the right audience through credible media platforms."
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
        title: "Professional Press Release Writing",
        desc: "Well-structured, engaging, and SEO-optimized press releases tailored to your industry, announcement, or campaign."
      },
      {
        icon: "🔹",
        title: "Strategic Story Angle Development",
        desc: "We shape your news into a compelling story that attracts journalists and editors."
      },
      {
        icon: "🔹",
        title: "Media-Ready Formatting",
        desc: "Proper headline structure, quotes, data points, and brand positioning to meet media standards."
      },
      {
        icon: "🔹",
        title: "Targeted Distribution Network",
        desc: "Distribution to relevant digital news portals, media platforms, and industry-specific publications across India."
      },
      {
        icon: "🔹",
        title: "National & Regional Coverage Options",
        desc: "Flexible distribution plans based on your target market and visibility goals."
      },
      {
        icon: "🔹",
        title: "Performance Tracking",
        desc: "Coverage links and reporting to measure reach and visibility impact."
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
      "Startup Launch Announcements",
      "Product & Service Launches",
      "Funding News",
      "Event Coverage",
      "Brand Milestones",
      "Corporate Updates"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Turning Your Announcements into Media Headlines."
  }
]

export default function PressReleaseWritingDistribution() {
  return (
    <div>
      <ShowdataReuseble
        heading="Press Release Writing & Distribution"
        image={first}
        imageAlt="Press Release Writing & Distribution"
        content={pressReleaseContent}
      />
    </div>
  )
}