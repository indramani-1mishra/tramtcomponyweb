import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Allclient from '../reuseblecomponent/ourclient/allclient'
import Upperheader from '../reuseblecomponent/header/upperheader/Upperheader'
import LoverHeader from '../reuseblecomponent/header/loverheader/LoverHeader'
import Footer from '../reuseblecomponent/footer/Footer'
import Homepage from '../pages/homepage/Homepage'
import MediaRelationPage from '../pages/MediaRelationPage/MediaRelationPage'
import PressReleaseWritingDistribution from '../pages/PressReleaseWriting&Distribution/PressReleaseWriting&Distribution'
import DigitalPRCampaigns from '../pages/DigitalPRCampaigns/DigitalPRCampaigns'
import BrandReputationManagement from '../pages/BrandReputationManagement/BrandReputationManagement'
import CorporateCommunications from '../pages/CorporateCommunications/CorporateCommunications'
import OnlineReputationManagement from '../pages/OnlineReputationManagement/OnlineReputationManagement'
import StartupPRLaunchPackages from '../pages/StartupPRLaunchPackages/StartupPRLaunchPackages'
import InfluencerMediaOutreach from '../pages/Influencer&MediaOutreach/Influencer&MediaOutreach'
import NationalMediaCoverageCampaign from '../pages/NationalMediaCoverageCampaign.jsx/NationalMediaCoverageCampaign'
import CEOFounderProfiling from '../pages/CEOFounderProfiling/CEOFounderProfiling'
import ThoughtLeadershipPlacement from '../pages/ThoughtLeadershipPlacement/ThoughtLeadershipPlacement'
import InterviewFeaturePlacement from '../pages/Interview&FeaturePlacement/InterviewFeaturePlacement'
import EventPRMediaCoverage from '../pages/EventPRMediaCoverage/EventPR&MediaCoverage'
import ProductLaunchPR from '../pages/ProductLaunchPR/ProductLaunchPR'
import PoliticalPublicImagePR from '../pages/PoliticalPublicImagePR/PoliticalPublicImagePR'
import AwardNominationRecognitionPR from '../pages/AwardNominationRecognitionPR/AwardNominationRecognitionPR'
import InvestorFundingAnnouncementPR from '../pages/InvestorFundingAnnouncement PR/InvestorFundingAnnouncementPR'
import IntegratedPRDigitalVisibilityPackage from '../pages/IntegratedPR&DigitalVisibilityPackage/IntegratedPRDigitalVisibilityPackage'

export default function Router() {
  return (
    <>
     <Upperheader/>
     <LoverHeader/>
      <Routes>
       <Route path='/our_client' element={<Allclient/>} />
       <Route path='/' element={<Homepage/>}/>
       <Route path='/mediarelation' element={<MediaRelationPage/>}/>
       <Route path='/pressreleasepage' element={<PressReleaseWritingDistribution/>}/>
       <Route path='/digitalPR' element={<DigitalPRCampaigns/>}/>
       <Route path='/brandreputaion' element={<BrandReputationManagement/>}/>
       <Route path='/CrisisCommunicationManagement' element={<CorporateCommunications/>}/>
       <Route path='/OnlineReputationManagement' element={<OnlineReputationManagement/>}/>
       <Route path='/StartupPRLaunchPackages' element={<StartupPRLaunchPackages/>}/>
       <Route path='/NationalMediaCoverageCampaign' element={<NationalMediaCoverageCampaign/>}/>
       <Route path='/CEOFounderProfiling' element={<CEOFounderProfiling/>}/>
       <Route path='/ThoughtLeadershipPlacement' element={<ThoughtLeadershipPlacement/>}/>
       <Route path='/InterviewFeaturePlacement' element={<InterviewFeaturePlacement/>}/>
        <Route path='/EventPRMediaCoverage' element={<EventPRMediaCoverage/>}/>
        <Route path='/ProductLaunchPR' element={<ProductLaunchPR/>}/>
        <Route path='/PoliticalPublicImagePR' element={<PoliticalPublicImagePR/>}/>
        <Route path='/AwardNominationRecognitionPR' element={<AwardNominationRecognitionPR/>}/>
        <Route path='/InvestorFundingAnnouncementPR' element={<InvestorFundingAnnouncementPR/>}/>
        <Route path='/IntegratedPRDigitalVisibilityPackage' element={<IntegratedPRDigitalVisibilityPackage/>}/>
        <Route path='/InfluencerMediaOutreach' element={<InfluencerMediaOutreach/>}/>
        
      
       
      </Routes>
      <Footer/>
    </>
  )
}
