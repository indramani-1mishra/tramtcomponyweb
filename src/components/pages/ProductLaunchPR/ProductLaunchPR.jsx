import React from 'react'
import first from '../../../assets/pageImages/ProductLaunchPR.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const productLaunchContent = [
  {
    type: "para",
    text: "At PRx India, our Product Launch PR service is designed to create maximum buzz, media attention, and market impact for your new product or service. We ensure your launch reaches the right audience, gains strong media visibility, and builds instant credibility."
  },
  {
    type: "para",
    text: "We don't just announce your product — we launch it into headlines."
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
        title: "Pre-Launch Strategy & Positioning",
        desc: "Crafting a powerful launch narrative that highlights your product's uniqueness and market value."
      },
      {
        icon: "🔹",
        title: "Press Release Creation & Distribution",
        desc: "Professional, media-ready press releases distributed across relevant national and digital platforms."
      },
      {
        icon: "🔹",
        title: "Media & Influencer Outreach",
        desc: "Connecting your launch with journalists, bloggers, and influencers for wider exposure."
      },
      {
        icon: "🔹",
        title: "Exclusive Feature Placements",
        desc: "Securing in-depth product stories, reviews, and editorial coverage."
      },
      {
        icon: "🔹",
        title: "Launch Event PR Support",
        desc: "Managing media presence during product unveiling events."
      },
      {
        icon: "🔹",
        title: "SEO & Digital Amplification",
        desc: "Optimizing coverage to strengthen search engine visibility and online authority."
      },
      {
        icon: "🔹",
        title: "Post-Launch Media Push",
        desc: "Sustained PR campaigns to maintain momentum after the initial launch."
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
      "Startup Product Launches",
      "Tech & App Launches",
      "D2C & E-commerce Brands",
      "FMCG & Lifestyle Products",
      "Corporate Service Launches"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Turning Your Product Launch into a Market-Wide Conversation."
  }
]

export default function ProductLaunchPR() {
  return (
    <div>
      <ShowdataReuseble
        heading="Product Launch PR"
        image={first}
        imageAlt="Product Launch PR"
        content={productLaunchContent}
      />
    </div>
  )
}