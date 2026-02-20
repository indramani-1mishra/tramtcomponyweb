import React from 'react'
import first from '../../../assets/pageImages/CorporateCommbanner.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const corporateCommunicationsContent = [
  {
    type: "para",
    text: "At PRx India, our Corporate Communications service ensures your organization delivers clear, consistent, and impactful messaging to stakeholders, media, employees, and the public. We help businesses build trust, transparency, and a strong corporate image through strategic communication planning."
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
        title: "Strategic Communication Planning",
        desc: "Developing structured communication strategies aligned with your company's vision and objectives."
      },
      {
        icon: "🔹",
        title: "Internal Communication Management",
        desc: "Creating effective messaging for employees, leadership updates, and organizational announcements."
      },
      {
        icon: "🔹",
        title: "External Corporate Messaging",
        desc: "Managing communication with media, investors, partners, and the public."
      },
      {
        icon: "🔹",
        title: "Leadership & Executive Communication",
        desc: "Speech drafting, public statements, keynote messaging, and CEO profiling."
      },
      {
        icon: "🔹",
        title: "Corporate Announcements & Disclosures",
        desc: "Professional handling of mergers, acquisitions, partnerships, funding news, and major milestones."
      },
      {
        icon: "🔹",
        title: "Crisis & Sensitive Communication Handling",
        desc: "Structured response planning to maintain corporate credibility during challenging situations."
      },
      {
        icon: "🔹",
        title: "Investor & Stakeholder Communication",
        desc: "Clear and professional communication designed to strengthen stakeholder confidence."
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
      "Corporates & Enterprises",
      "Growing Companies & Startups",
      "Listed Companies",
      "CEOs, Directors & Leadership Teams"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Strategic Communication that Builds Corporate Trust and Authority."
  }
]

export default function CorporateCommunications() {
  return (
    <div>
      <ShowdataReuseble
        heading="Corporate Communications"
        image={first}
        imageAlt="Corporate Communications"
        content={corporateCommunicationsContent}
      />
    </div>
  )
}