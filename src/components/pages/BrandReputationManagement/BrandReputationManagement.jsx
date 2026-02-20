import React from 'react'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'
import first from '../../../assets/pageImages/1st.png'

const brandReputationContent = [
  {
    type: "para",
    text: "At PRx India, our Brand Reputation Management service is focused on building, protecting, and enhancing your brand's public image. In today's digital world, perception is everything — and we ensure your brand is seen as credible, trustworthy, and authoritative."
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
        title: "Online Reputation Monitoring",
        desc: "Continuous tracking of brand mentions across news platforms, websites, and social media."
      },
      {
        icon: "🔹",
        title: "Positive Media Coverage Strategy",
        desc: "Publishing strategic content to strengthen brand authority and credibility."
      },
      {
        icon: "🔹",
        title: "Negative Content Management",
        desc: "Smart response planning and content balancing to protect your brand image."
      },
      {
        icon: "🔹",
        title: "Search Engine Image Building",
        desc: "Improving how your brand appears on Google through optimized articles and media placements."
      },
      {
        icon: "🔹",
        title: "Crisis Communication Support",
        desc: "Quick, professional response strategy to manage public relations challenges."
      },
      {
        icon: "🔹",
        title: "Review & Public Sentiment Management",
        desc: "Guidance and strategy to improve customer perception and online reviews."
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
      "Growing Startups",
      "Corporate Brands",
      "Public Figures",
      "CEOs & Founders",
      "Businesses facing negative publicity"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Protecting Your Brand. Strengthening Your Reputation. Elevating Your Authority."
  }
]

export default function BrandReputationManagement() {
  return (
    <div>
      <ShowdataReuseble
        heading="Brand Reputation Management"
        image={first}
        imageAlt="Brand Reputation Management"
        content={brandReputationContent}
      />
    </div>
  )
}