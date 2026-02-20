import React from 'react'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'
import first from '../../../assets/pageImages/DigitalPRCampaigns.png'

const digitalPRContent = [
  {
    type: "para",
    text: "At PRx India, our Digital PR Campaigns are designed to amplify your brand visibility across online media platforms, digital news portals, blogs, and social channels. We combine strategic storytelling with targeted media outreach to build strong digital presence and authority for your brand."
  },
  {
    type: "heading",
    text: "What We Deliver"
  },
  {
    type: "services",
    items: [
      {
        icon: "🔹",
        title: "Strategic Campaign Planning",
        desc: "Customized PR strategies aligned with your business goals, industry, and target audience."
      },
      {
        icon: "🔹",
        title: "Online Media Coverage",
        desc: "Placements across leading digital news platforms, niche blogs, and high-traffic websites."
      },
      {
        icon: "🔹",
        title: "SEO-Driven PR Content",
        desc: "Keyword-optimized content that improves search visibility and strengthens your online reputation."
      },
      {
        icon: "🔹",
        title: "Influencer & Blogger Outreach",
        desc: "Collaboration with digital creators and industry influencers for wider brand exposure."
      },
      {
        icon: "🔹",
        title: "Brand Mentions & Authority Building",
        desc: "Creating high-quality backlinks and credible brand mentions to boost online trust."
      },
      {
        icon: "🔹",
        title: "Social Amplification",
        desc: "Promoting PR coverage through social media to maximize reach and engagement."
      },
      {
        icon: "🔹",
        title: "Campaign Reporting & Analytics",
        desc: "Performance tracking with coverage reports, impressions, and engagement insights."
      }
    ]
  },
  {
    type: "heading",
    text: "Perfect For"
  },
  {
    type: "checklist",
    items: [
      "Startup Growth & Brand Awareness",
      "Product & Service Launch Campaigns",
      "Personal Branding",
      "Funding Announcements",
      "Market Expansion"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Driving Digital Visibility that Converts into Brand Authority."
  }
]

export default function DigitalPRCampaigns() {
  return (
    <div>
      <ShowdataReuseble
        heading="Digital PR Campaigns"
        image={first}
        imageAlt="Digital PR Campaigns"
        content={digitalPRContent}
      />
    </div>
  )
}