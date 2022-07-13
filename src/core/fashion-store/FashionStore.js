import React from 'react';

// Custom components import
import FashionStoreCarousel from './fashion-carousel/FashionStoreCarousel';
import FashionProductList from './fashion-store-products/FashionProductList';
import TopSellingApperals from '../home-page/top-selling-apperals/TopSellingApperals';

const FashionStore = () => {
    return (
        <>
            {/* header slides of the Fashion store page */}
            <FashionStoreCarousel />

            {/* Top selling fashion product list */}
            <TopSellingApperals />

            {/* Product list component */}
            <FashionProductList />
        </>
    )
}

export default FashionStore;