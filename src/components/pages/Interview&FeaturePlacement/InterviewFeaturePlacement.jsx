import React from 'react'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'
import first from '../../../assets/pageImages/1st.png'

const interviewFeatureContent = [
  {
    type: "para",
    text: "At PRx India, our Interview & Feature Placement service is designed to secure powerful media opportunities that elevate your visibility, credibility, and industry authority. We strategically place your story in front of the right audience through trusted interviews and high-impact editorial features."
  },
  {
    type: "para",
    text: "We transform your journey, expertise, and achievements into compelling media narratives."
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
        title: "Media Interview Placements",
        desc: "Coordinating interviews with leading digital news portals, business magazines, and industry publications."
      },
      {
        icon: "🔹",
        title: "Founder & Executive Features",
        desc: "In-depth profile stories showcasing leadership vision, milestones, and business growth."
      },
      {
        icon: "🔹",
        title: "Brand Story Coverage",
        desc: "Strategically crafted feature articles that highlight your mission, innovation, and market impact."
      },
      {
        icon: "🔹",
        title: "Expert Commentary & Q&A Features",
        desc: "Positioning you as an industry expert through structured interviews and opinion-based articles."
      },
      {
        icon: "🔹",
        title: "Editorial Outreach & Pitching",
        desc: "Proactive engagement with journalists and editors to secure relevant placements."
      },
      {
        icon: "🔹",
        title: "Pre-Interview Strategy & Messaging Support",
        desc: "Preparing key talking points and brand positioning to ensure confident media representation."
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
      "Startups & Growing Brands",
      "Corporate Executives",
      "Industry Experts & Consultants",
      "Public Figures"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Positioning Your Voice Where It Matters Most."
  }
]

export default function InterviewFeaturePlacement() {
  return (
    <div>
      <ShowdataReuseble
        heading="Interview & Feature Placement"
        image={first}
        imageAlt="Interview & Feature Placement"
        content={interviewFeatureContent}
      />
    </div>
  )
}