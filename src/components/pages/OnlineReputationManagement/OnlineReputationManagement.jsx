import React from 'react'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'
import first from '../../../assets/pageImages/OnlineReputationManagement.png'

const ormContent = [
  {
    type: "para",
    text: "At PRx India, our Online Reputation Management (ORM) service is designed to monitor, protect, and enhance your brand's digital presence. In today's competitive landscape, your online image directly impacts customer trust, investor confidence, and business growth — and we ensure it always works in your favor."
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
        title: "Online Brand Monitoring",
        desc: "Continuous tracking of brand mentions across Google, news portals, blogs, social media, and review platforms."
      },
      {
        icon: "🔹",
        title: "Negative Content Suppression",
        desc: "Strategic content publishing and SEO techniques to push down harmful or misleading information."
      },
      {
        icon: "🔹",
        title: "Review Management & Response Strategy",
        desc: "Professional handling of customer reviews with timely, reputation-focused responses."
      },
      {
        icon: "🔹",
        title: "SEO-Based Image Building",
        desc: "Publishing positive, keyword-optimized content to improve your Google search presence."
      },
      {
        icon: "🔹",
        title: "Public Sentiment Analysis",
        desc: "Monitoring audience perception and identifying potential reputation risks early."
      },
      {
        icon: "🔹",
        title: "Crisis Reputation Recovery",
        desc: "Rapid action plans to stabilize and rebuild brand credibility during online backlash."
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
      "Startups & Growing Businesses",
      "Corporate Brands",
      "Public Figures & Influencers",
      "CEOs & Founders",
      "Businesses facing negative reviews or media coverage"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Protecting Your Digital Image. Strengthening Your Online Authority."
  }
]

export default function OnlineReputationManagement() {
  return (
    <div>
      <ShowdataReuseble
        heading="Online Reputation Management (ORM)"
        image={first}
        imageAlt="Online Reputation Management"
        content={ormContent}
      />
    </div>
  )
}