import React from 'react';

// Custom Components import
import CosmeticStoreCarousel from './cosmetic-carousel/CosmeticStoreCarousel';
import TopSellingCosmetic from '../home-page/top-selling-cosmetics/TopSellingCosmetic';
import CosmeticProductList from './cosmetic-store-products/CosmeticProductList';

const CosmeticStore = () => {
    return (
        <>
            {/* header slides of the cosmetic store page */}
            <CosmeticStoreCarousel />

            {/* Top selling cosmetic products */}
            <TopSellingCosmetic />
            
            {/* Cosmeti product list components */}
            <CosmeticProductList />
        </>
    )
}

export default CosmeticStore;