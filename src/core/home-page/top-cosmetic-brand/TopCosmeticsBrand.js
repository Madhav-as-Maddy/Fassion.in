import React from 'react'

// cusom CSS import
import './topCosmeticsBrand.css'

// third party library import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCosmeticsBrand = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className=' brands-logo-section'>
                <h2 className='px-2 mt-4'>Available Top Cosmetics Brand</h2>
                <div className='px-2'>We have most of the top brands Available in our store</div>
                <hr className='mx-2' />
                <Slider {...settings} className="brand-logo-container">
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "15rem", height: "auto", border: "none" }}>
                        <img src="./images/apperals-brand/brand-8.png" alt="loading..." />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/apperals-brand/brand-7.png" alt="loading..." />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/apperals-brand/brand-6.png" alt="loading..." />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/apperals-brand/brand-5.png" alt="loading..." />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/apperals-brand/brand-4.png" alt="loading..." />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/apperals-brand/brand-3.png" alt="loading..." />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/apperals-brand/brand-2.png" alt="loading..." />
                    </div>

                </Slider>
            </div>
        </>
    )
}

export default TopCosmeticsBrand