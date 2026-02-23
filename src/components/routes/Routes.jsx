import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Upperheader from '../reuseblecomponent/header/upperheader/Upperheader'
import LoverHeader from '../reuseblecomponent/header/loverheader/LoverHeader'
import Footer from '../reuseblecomponent/footer/Footer'
import ContactButtons from '../reuseblecomponent/Buttons/Button'
import { PageSpinner } from '../reuseblecomponent/pageSpinner/PageSpinner'

const Allclient                          = lazy(() => import('../reuseblecomponent/ourclient/allclient'))
const Homepage                           = lazy(() => import('../pages/homepage/Homepage'))
const MediaRelationPage                  = lazy(() => import('../pages/MediaRelationPage/MediaRelationPage'))
const PressReleaseWritingDistribution    = lazy(() => import('../pages/PressReleaseWriting&Distribution/PressReleaseWriting&Distribution'))
const DigitalPRCampaigns                 = lazy(() => import('../pages/DigitalPRCampaigns/DigitalPRCampaigns'))
const BrandReputationManagement          = lazy(() => import('../pages/BrandReputationManagement/BrandReputationManagement'))
const CorporateCommunications            = lazy(() => import('../pages/CorporateCommunications/CorporateCommunications'))
const OnlineReputationManagement         = lazy(() => import('../pages/OnlineReputationManagement/OnlineReputationManagement'))
const StartupPRLaunchPackages            = lazy(() => import('../pages/StartupPRLaunchPackages/StartupPRLaunchPackages'))
const InfluencerMediaOutreach            = lazy(() => import('../pages/Influencer&MediaOutreach/Influencer&MediaOutreach'))
const NationalMediaCoverageCampaign      = lazy(() => import('../pages/NationalMediaCoverageCampaign.jsx/NationalMediaCoverageCampaign'))
const CEOFounderProfiling                = lazy(() => import('../pages/CEOFounderProfiling/CEOFounderProfiling'))
const ThoughtLeadershipPlacement         = lazy(() => import('../pages/ThoughtLeadershipPlacement/ThoughtLeadershipPlacement'))
const InterviewFeaturePlacement          = lazy(() => import('../pages/Interview&FeaturePlacement/InterviewFeaturePlacement'))
const EventPRMediaCoverage               = lazy(() => import('../pages/EventPRMediaCoverage/EventPR&MediaCoverage'))
const ProductLaunchPR                    = lazy(() => import('../pages/ProductLaunchPR/ProductLaunchPR'))
const PoliticalPublicImagePR             = lazy(() => import('../pages/PoliticalPublicImagePR/PoliticalPublicImagePR'))
const AwardNominationRecognitionPR       = lazy(() => import('../pages/AwardNominationRecognitionPR/AwardNominationRecognitionPR'))
const InvestorFundingAnnouncementPR      = lazy(() => import('../pages/InvestorFundingAnnouncement PR/InvestorFundingAnnouncementPR'))
const IntegratedPRDigitalVisibilityPackage = lazy(() => import('../pages/IntegratedPR&DigitalVisibilityPackage/IntegratedPRDigitalVisibilityPackage'))
const ContectusPage                      = lazy(() => import('../pages/contectuspage/ContectusPage'))
const About                              = lazy(() => import('../pages/aboutuspage/Aboutuspage'))




// ─── Router ───────────────────────────────────────────────────────────────────
export default function Router() {
  return (
    <>
      <Upperheader />
      <LoverHeader />

      <Suspense fallback={<PageSpinner/>}>
        <Routes>
          <Route path="/our_client"                        element={<Allclient />} />
          <Route path="/"                                  element={<Homepage />} />
          <Route path="/mediarelation"                     element={<MediaRelationPage />} />
          <Route path="/pressreleasepage"                  element={<PressReleaseWritingDistribution />} />
          <Route path="/digitalPR"                         element={<DigitalPRCampaigns />} />
          <Route path="/brandreputaion"                    element={<BrandReputationManagement />} />
          <Route path="/CrisisCommunicationManagement"     element={<CorporateCommunications />} />
          <Route path="/OnlineReputationManagement"        element={<OnlineReputationManagement />} />
          <Route path="/StartupPRLaunchPackages"           element={<StartupPRLaunchPackages />} />
          <Route path="/NationalMediaCoverageCampaign"     element={<NationalMediaCoverageCampaign />} />
          <Route path="/CEOFounderProfiling"               element={<CEOFounderProfiling />} />
          <Route path="/ThoughtLeadershipPlacement"        element={<ThoughtLeadershipPlacement />} />
          <Route path="/InterviewFeaturePlacement"         element={<InterviewFeaturePlacement />} />
          <Route path="/EventPRMediaCoverage"              element={<EventPRMediaCoverage />} />
          <Route path="/ProductLaunchPR"                   element={<ProductLaunchPR />} />
          <Route path="/PoliticalPublicImagePR"            element={<PoliticalPublicImagePR />} />
          <Route path="/AwardNominationRecognitionPR"      element={<AwardNominationRecognitionPR />} />
          <Route path="/InvestorFundingAnnouncementPR"     element={<InvestorFundingAnnouncementPR />} />
          <Route path="/IntegratedPRDigitalVisibilityPackage" element={<IntegratedPRDigitalVisibilityPackage />} />
          <Route path="/InfluencerMediaOutreach"           element={<InfluencerMediaOutreach />} />
          <Route path="/contact"                           element={<ContectusPage />} />
          <Route path="/about"                             element={<About />} />
        </Routes>
      </Suspense>

      <Footer />
      <ContactButtons />
    </>
  )
}