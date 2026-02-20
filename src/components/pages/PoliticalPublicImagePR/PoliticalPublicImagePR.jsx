import React from 'react'
import first from '../../../assets/pageImages/PoliticalPublicImagePR.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const politicalPRContent = [
  {
    type: "para",
    text: "At PRx India, our Political & Public Image PR service is designed to build, strengthen, and protect the public image of political leaders, public representatives, and influential personalities. We craft strategic communication that enhances credibility, public trust, and voter engagement."
  },
  {
    type: "para",
    text: "In politics and public life, perception shapes power — and we manage that perception with precision."
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
        title: "Image Positioning Strategy",
        desc: "Developing a strong and consistent public identity aligned with your values, vision, and leadership goals."
      },
      {
        icon: "🔹",
        title: "Media Coverage & Press Management",
        desc: "Securing positive media visibility across digital news platforms and regional/national publications."
      },
      {
        icon: "🔹",
        title: "Speech & Public Statement Drafting",
        desc: "Professionally structured speeches, press statements, and official communications."
      },
      {
        icon: "🔹",
        title: "Reputation Monitoring & Protection",
        desc: "Tracking public sentiment and managing negative narratives proactively."
      },
      {
        icon: "🔹",
        title: "Crisis Communication Support",
        desc: "Strategic handling of controversies or sensitive issues to maintain public confidence."
      },
      {
        icon: "🔹",
        title: "Campaign Visibility Enhancement",
        desc: "Boosting visibility during elections, public campaigns, and social initiatives."
      },
      {
        icon: "🔹",
        title: "Social & Digital Image Management",
        desc: "Aligning PR strategies with digital platforms for consistent public messaging."
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
      "Political Leaders & Candidates",
      "Public Representatives",
      "Social Activists",
      "Policy Influencers",
      "Government & Public Office Holders"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Building Strong Public Images with Strategic Communication."
  }
]

export default function PoliticalPublicImagePR() {
  return (
    <div>
      <ShowdataReuseble
        heading="Political & Public Image PR"
        image={first}
        imageAlt="Political & Public Image PR"
        content={politicalPRContent}
      />
    </div>
  )
}