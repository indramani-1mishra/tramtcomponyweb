import React from 'react'
import first from '../../../assets/pageImages/InfluencerMediaOutreach.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const influencerOutreachContent = [
  {
    type: "para",
    text: "At PRx India, our Influencer & Media Outreach service connects your brand with the right voices and media platforms to maximize visibility and credibility. We strategically build relationships with journalists, bloggers, influencers, and digital creators to ensure your message reaches the right audience."
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
        title: "Targeted Influencer Identification",
        desc: "Researching and shortlisting influencers aligned with your industry, audience, and campaign goals."
      },
      {
        icon: "🔹",
        title: "Media & Journalist Outreach",
        desc: "Direct coordination with editors, reporters, and media houses for story placements."
      },
      {
        icon: "🔹",
        title: "Campaign Strategy & Planning",
        desc: "Designing structured outreach campaigns for product launches, events, or brand awareness."
      },
      {
        icon: "🔹",
        title: "Influencer Collaborations",
        desc: "Managing partnerships, sponsored content, reviews, and brand mentions."
      },
      {
        icon: "🔹",
        title: "Press & Blogger Engagement",
        desc: "Securing blog features, expert quotes, and editorial mentions."
      },
      {
        icon: "🔹",
        title: "Performance Tracking & Reporting",
        desc: "Monitoring campaign reach, engagement, impressions, and media coverage."
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
      "Product & Service Launches",
      "Startups & Growing Brands",
      "Corporate Campaigns",
      "Event Promotions",
      "Personal Branding Initiatives"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Connecting Your Brand with Influential Voices and Powerful Media Networks."
  }
]

export default function InfluencerMediaOutreach() {
  return (
    <div>
      <ShowdataReuseble
        heading="Influencer & Media Outreach"
        image={first}
        imageAlt="Influencer & Media Outreach"
        content={influencerOutreachContent}
      />
    </div>
  )
}