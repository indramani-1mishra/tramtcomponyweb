import React from 'react'
import first from '../../../assets/pageImages/CEOFounderProfiling.png'
import ShowdataReuseble from '../../reuseblecomponent/showdatareuseblepage/ShowdataReuseble'

const ceoFounderContent = [
  {
    type: "para",
    text: "At PRx India, our CEO & Founder Profiling service is designed to position leaders as visionary voices and industry authorities. A strong executive presence not only builds personal credibility but also strengthens the brand's overall reputation and investor confidence."
  },
  {
    type: "para",
    text: "We craft compelling leadership narratives that highlight achievements, expertise, and future vision."
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
        title: "Executive Brand Positioning",
        desc: "Defining a clear leadership image aligned with your industry and business goals."
      },
      {
        icon: "🔹",
        title: "Media Interviews & Feature Stories",
        desc: "Securing placements in top digital publications, business portals, and industry media."
      },
      {
        icon: "🔹",
        title: "Leadership Thought Pieces",
        desc: "Publishing expert insights, opinion articles, and industry commentary."
      },
      {
        icon: "🔹",
        title: "Founder Journey Storytelling",
        desc: "Showcasing entrepreneurial journeys, challenges, milestones, and success stories."
      },
      {
        icon: "🔹",
        title: "LinkedIn & Digital Presence Enhancement",
        desc: "Optimizing professional profiles to reflect authority and credibility."
      },
      {
        icon: "🔹",
        title: "Award & Recognition Support",
        desc: "Positioning CEOs and founders for industry awards and leadership honors."
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
      "Startup Founders",
      "Corporate CEOs",
      "Entrepreneurs",
      "Industry Experts",
      "Emerging Business Leaders"
    ]
  },
  {
    type: "tagline",
    text: "PRx India – Transforming Leaders into Recognized Industry Icons."
  }
]

export default function CEOFounderProfiling() {
  return (
    <div>
      <ShowdataReuseble
        heading="CEO & Founder Profiling"
        image={first}
        imageAlt="CEO & Founder Profiling"
        content={ceoFounderContent}
      />
    </div>
  )
}