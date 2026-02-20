// ✅ navdata mein onClick ab sirf ek simple function hai
// State manage LoverHeader karega — navdata ko state ki zaroorat nahi

export const navdata = [
  {
    mainheading: "home",
    url: "/",
    isHome: true,
  },
  {
    mainheading: "about us",
    url: "/about",
  },
  {
    mainheading: "our experties",
    url: "/",
    subdata: [
      {
        subheading: "Core PR Services",
        url: "/",
        subsubhedata: [
          { subheading: "Media Relations Management",           url: "/mediarelation" },
          { subheading: "Press Release Writing & Distribution", url: "/pressreleasepage" },
          { subheading: "Digital PR Campaigns",                 url: "/digitalPR" },
          { subheading: "Brand Reputation Management",          url: "/brandreputaion" },
          { subheading: "Corporate Communications",             url: "/CorporateCommunications" },
          { subheading: "Online Reputation Management (ORM)",   url: "/OnlineReputationManagement" },
          { subheading: "Startup PR Launch Packages",           url: "/StartupPRLaunchPackages" },
          { subheading: "Crisis Communication Management",      url: "/CrisisCommunicationManagement" },
          { subheading: "Personal Branding PR",                 url: "/PersonalBrandingPR" },
          { subheading: "Influencer & Media Outreach",          url: "/InfluencerMediaOutreach" },
        ],
      },
      {
        subheading: "Premium / Advanced Services",
        url: "/",
        subsubhedata: [
          { subheading: "National Media Coverage Campaign",           url: "/NationalMediaCoverageCampaign" },
          { subheading: "CEO & Founder Profiling",                    url: "/CEOFounderProfiling" },
          { subheading: "Thought Leadership Placement",               url: "/ThoughtLeadershipPlacement" },
          { subheading: "Interview & Feature Placement",              url: "/InterviewFeaturePlacement" },
          { subheading: "Product Launch PR",                          url: "/ProductLaunchPR" },
          { subheading: "Investor & Funding Announcement PR",         url: "/InvestorFundingAnnouncementPR" },
          { subheading: "Integrated PR & Digital Visibility Package", url: "/IntegratedPRDigitalVisibilityPackage" },
        ],
      },
      { subheading: "Event PR & Media Coverage",         url: "/EventPRMediaCoverage" },
      { subheading: "Award Nomination & Recognition PR", url: "/AwardNominationRecognitionPR" },
      { subheading: "Political & Public Image PR",       url: "/PoliticalPublicImagePR" },
    ],
  },
  {
    mainheading: "blog",
    url: "/blog",
  },
  {
    mainheading: "contact us",
    url: "/contact",
    subdata: [
      { subheading: "contact", url: "/contact" },
      { subheading: "career",  url: "/career" },
    ],
  },
  {
    mainheading: "enquiry now",
   
    type: "button",
  },
];
