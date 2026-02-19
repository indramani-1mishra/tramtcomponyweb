import React, { lazy, Suspense } from "react";
const Carousel = lazy(() =>import("../../reuseblecomponent/crousel/Crousel"));
const WhatWeOffer = lazy(()=>import('../../reuseblecomponent/whatweoffer/WhatWeOffer'));
const Testimonial = lazy(()=>import('../../reuseblecomponent/testominal/Testominal'));
const OurClient =lazy(()=>import('../../reuseblecomponent/ourclient/Ourclient'));


export default function Homepage() {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <Carousel />
        <WhatWeOffer />
        <Testimonial />
        <OurClient />
      </Suspense>

      
    </>
  );
}
