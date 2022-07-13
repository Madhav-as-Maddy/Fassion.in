import React from 'react'

// Custom Components import
import HomeCarousel from './home-carousel/HomeCarousel';
import TopApperalsBrand from './top-apperals-brand/TopApperalsBrand';
// import TopCosmeticsBrand from './top-cosmetic-brand/TopCosmeticsBrand';
import TopSellingApperals from './top-selling-apperals/TopSellingApperals';
import TopSellingCosmetic from './top-selling-cosmetics/TopSellingCosmetic';

const Home = () => {
  return (
    <>
      <HomeCarousel />

      <TopApperalsBrand />

      {/* <TopCosmeticsBrand /> */}

      <TopSellingApperals />

      <TopSellingCosmetic />
    </>
  )
}

export default Home;