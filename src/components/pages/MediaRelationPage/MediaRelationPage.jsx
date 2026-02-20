import React from 'react'
import first from '../../../assets/pageImages/mediarelationsmanagament.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const mediaRelationsContent = [
  {
    type: "para",
    text: "At PRx India, our Media Relations Management service is designed to build strong, strategic relationships between your brand and the media. We help you gain consistent, credible, and high-impact coverage across leading digital platforms, news portals, and publications."
  },
  {
    type: "heading",
    text: "What We Do"
  },
  {
    type: "services",
    items: [
      {
        icon: "🔹",
        title: "Strategic Media Planning",
        desc: "We identify the right media outlets, journalists, and platforms that align with your industry and target audience."
      },
      {
        icon: "🔹",
        title: "Press Release Development & Distribution",
        desc: "Crafting compelling, newsworthy press releases and distributing them to relevant media networks for maximum visibility."
      },
      {
        icon: "🔹",
        title: "Journalist & Editor Outreach",
        desc: "Direct coordination with media professionals to secure interviews, features, and expert opinions."
      },
      {
        icon: "🔹",
        title: "Media Pitching & Story Placement",
        desc: "Positioning your brand story in a way that attracts media interest and increases chances of publication."
      },
      {
        icon: "🔹",
        title: "Interview & Feature Coordination",
        desc: "Arranging media interviews, founder stories, and expert commentary opportunities."
      },
      {
        icon: "🔹",
        title: "Long-Term Media Relationship Building",
        desc: "Maintaining ongoing relationships to ensure repeated coverage and sustained brand presence."
      }
    ]
  },
  {
    type: "heading",
    text: "Why Choose PRx India?"
  },
  {
    type: "checklist",
    items: [
      "Strong media network across India",
      "Industry-focused PR strategy",
      "Credibility-driven placements",
      "Measurable visibility growth"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Connecting Your Brand with the Right Media, at the Right Time."
  }
]

export default function MediaRelationPage() {
  return (
    <div>
      <ShowdataReuseble
        heading="Media Relations Management"
        image={first}
        imageAlt="Media Relations Management"
        content={mediaRelationsContent}
      />
    </div>
  )
}