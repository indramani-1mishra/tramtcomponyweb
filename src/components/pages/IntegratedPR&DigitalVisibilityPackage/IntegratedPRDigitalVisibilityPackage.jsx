import React from 'react'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'
import first from '../../../assets/pageImages/IntegratedPRDigitalVisibilityPackage.png'

const integratedPRContent = [
  {
    type: "para",
    text: "At PRx India, our Integrated PR & Digital Visibility Package is a comprehensive solution designed to build, manage, and amplify your brand's presence across media and digital platforms. This all-in-one package combines traditional PR strength with modern digital strategies to deliver measurable brand authority and long-term visibility."
  },
  {
    type: "para",
    text: "We don't just create coverage — we create consistent, multi-platform brand impact."
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
        title: "Strategic PR Planning",
        desc: "End-to-end PR roadmap aligned with your business goals and growth stage."
      },
      {
        icon: "🔹",
        title: "Press Release Writing & National Distribution",
        desc: "Professional announcements published across leading digital and national news platforms."
      },
      {
        icon: "🔹",
        title: "Media Relations & Interview Placements",
        desc: "Securing interviews, feature stories, and expert commentary opportunities."
      },
      {
        icon: "🔹",
        title: "Digital PR & SEO Optimization",
        desc: "Keyword-driven content to enhance Google search visibility and online reputation."
      },
      {
        icon: "🔹",
        title: "Online Reputation Management (ORM)",
        desc: "Monitoring, protecting, and strengthening your brand image across digital channels."
      },
      {
        icon: "🔹",
        title: "Influencer & Media Outreach",
        desc: "Strategic collaborations to expand reach and audience engagement."
      },
      {
        icon: "🔹",
        title: "Social Amplification Support",
        desc: "Boosting PR coverage across social platforms for higher engagement."
      },
      {
        icon: "🔹",
        title: "Performance Reporting & Analytics",
        desc: "Transparent reporting with live links, reach insights, and visibility metrics."
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
      "Startups & High-Growth Brands",
      "Corporate Enterprises",
      "CEOs & Founders",
      "Political & Public Figures",
      "Businesses Seeking Long-Term Brand Authority"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – One Strategy. Complete Visibility. Maximum Impact."
  }
]

export default function IntegratedPRDigitalVisibilityPackage() {
  return (
    <div>
      <ShowdataReuseble
        heading="Integrated PR & Digital Visibility Package"
        image={first}
        imageAlt="Integrated PR & Digital Visibility Package"
        content={integratedPRContent}
      />
    </div>
  )
}