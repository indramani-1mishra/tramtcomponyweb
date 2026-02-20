import React from 'react'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'
import first from '../../../assets/pageImages/EventPR&MediaCoverage.png'

const eventPRContent = [
  {
    type: "para",
    text: "At PRx India, our Event PR & Media Coverage service is designed to maximize visibility and media impact for your events. Whether it's a corporate launch, product unveiling, press conference, award function, seminar, or public gathering — we ensure your event receives the attention it deserves."
  },
  {
    type: "para",
    text: "We turn moments into headlines and events into powerful brand statements."
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
        title: "Pre-Event Buzz Creation",
        desc: "Strategic press releases and media announcements to generate anticipation before the event."
      },
      {
        icon: "🔹",
        title: "Media Invitations & Coordination",
        desc: "Inviting journalists, bloggers, and media representatives to attend and cover your event."
      },
      {
        icon: "🔹",
        title: "On-Ground Media Management",
        desc: "Coordinating interviews, press interactions, and live coverage during the event."
      },
      {
        icon: "🔹",
        title: "Post-Event Press Release Distribution",
        desc: "Publishing event highlights, key announcements, and success stories across media platforms."
      },
      {
        icon: "🔹",
        title: "Photo & Video Media Distribution",
        desc: "Sharing professional event visuals with media outlets for wider coverage."
      },
      {
        icon: "🔹",
        title: "Digital Amplification",
        desc: "Boosting event visibility through online PR, social media mentions, and influencer outreach."
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
      "Corporate Events & Conferences",
      "Product Launches",
      "Award Ceremonies",
      "Political & Public Events",
      "Startup Launch Events",
      "Brand Milestone Celebrations"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Giving Your Event the Media Spotlight It Deserves."
  }
]

export default function EventPRMediaCoverage() {
  return (
    <div>
      <ShowdataReuseble
        heading="Event PR & Media Coverage"
        image={first}
        imageAlt="Event PR & Media Coverage"
        content={eventPRContent}
      />
    </div>
  )
}