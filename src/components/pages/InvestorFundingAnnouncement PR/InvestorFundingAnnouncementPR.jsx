import React from 'react'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'
import first from '../../../assets/pageImages/InvestorFundingAnnouncementPR.png'

const investorFundingContent = [
  {
    type: "para",
    text: "At PRx India, our Investor & Funding Announcement PR service is designed to strategically announce funding rounds, investor partnerships, and financial milestones to the right audience. A well-managed funding announcement builds credibility, attracts future investors, and strengthens market positioning."
  },
  {
    type: "para",
    text: "We ensure your financial growth story reaches media, stakeholders, and industry leaders with maximum impact."
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
        title: "Funding Announcement Strategy",
        desc: "Crafting a structured communication plan aligned with your growth vision and investor messaging."
      },
      {
        icon: "🔹",
        title: "Professional Press Release Drafting",
        desc: "Clear, data-driven, and media-ready announcements highlighting investment value and business expansion plans."
      },
      {
        icon: "🔹",
        title: "National & Digital Media Distribution",
        desc: "Publishing funding news across leading business, startup, and financial news platforms."
      },
      {
        icon: "🔹",
        title: "Investor & Leadership Profiling",
        desc: "Showcasing founders and investors to build authority and trust."
      },
      {
        icon: "🔹",
        title: "Stakeholder Communication Support",
        desc: "Aligning internal and external messaging for partners, clients, and employees."
      },
      {
        icon: "🔹",
        title: "Post-Funding Media Amplification",
        desc: "Sustained PR efforts to maintain momentum after the announcement."
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
      "Seed & Angel Funded Startups",
      "Series A, B & Growth Stage Companies",
      "Venture Capital Backed Brands",
      "Expanding Corporates",
      "IPO & Pre-IPO Announcements"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Announcing Growth with Authority and Impact."
  }
]

export default function InvestorFundingAnnouncementPR() {
  return (
    <div>
      <ShowdataReuseble
        heading="Investor & Funding Announcement PR"
        image={first}
        imageAlt="Investor & Funding Announcement PR"
        content={investorFundingContent}
      />
    </div>
  )
}