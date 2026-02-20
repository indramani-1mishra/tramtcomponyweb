import React from 'react'
import first from '../../../assets/pageImages/awardspr.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const awardNominationContent = [
  {
    type: "para",
    text: "At PRx India, our Award Nomination & Recognition PR service is designed to position your brand, leadership, and achievements for prestigious industry awards and recognitions. Awards are more than trophies — they build credibility, authority, and long-term brand trust."
  },
  {
    type: "para",
    text: "We strategically present your success story to maximize your chances of winning and gaining industry acknowledgment."
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
        title: "Award Research & Shortlisting",
        desc: "Identifying relevant national and international awards aligned with your industry and growth stage."
      },
      {
        icon: "🔹",
        title: "Strategic Nomination Positioning",
        desc: "Crafting a compelling narrative that highlights measurable achievements and competitive strengths."
      },
      {
        icon: "🔹",
        title: "Professional Nomination Drafting",
        desc: "Preparing persuasive, data-backed entries that meet award committee standards."
      },
      {
        icon: "🔹",
        title: "Supporting Documentation Preparation",
        desc: "Organizing case studies, media coverage, testimonials, and performance metrics."
      },
      {
        icon: "🔹",
        title: "Jury Communication & Submission Management",
        desc: "Handling application submissions, follow-ups, and clarification processes."
      },
      {
        icon: "🔹",
        title: "Post-Nomination PR Amplification",
        desc: "Promoting shortlisting or award wins through press releases and media coverage."
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
      "Startups & Emerging Brands",
      "CEOs & Founders",
      "Corporate Leaders",
      "Industry Experts",
      "High-Growth Companies"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Turning Achievements into Recognized Success."
  }
]

export default function AwardNominationRecognitionPR() {
  return (
    <div>
      <ShowdataReuseble
        heading="Award Nomination & Recognition PR"
        image={first}
        imageAlt="Award Nomination & Recognition PR"
        content={awardNominationContent}
      />
    </div>
  )
}