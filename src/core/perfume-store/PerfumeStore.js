import React from 'react'


// Custom components import
import PerfumeStoreCarousel from './perfume-carousel/PerfumeStoreCarousel'
import PerfumeProductList from './perfume-store-products/PerfumeProductList'
import TopSellingPerfume from './top-selling-perfume/TopSellingPerfume'

const PerfumeStore = () => {
    return (
        <>
            <div className="perfume-store-container">
                {/* perfume store page header carousel */}
                <PerfumeStoreCarousel />

                {/* Top selling perfume products */}
                <TopSellingPerfume />

                {/* List of all cosmetic products */}
                <PerfumeProductList />
            </div>
        </>
    )
}

export default PerfumeStore