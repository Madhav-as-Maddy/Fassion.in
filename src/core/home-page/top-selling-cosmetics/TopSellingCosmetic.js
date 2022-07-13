import React from 'react'

// Custom CSS import
import './topSellingCosmetics.css'

// third party library import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSellingCosmetic = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
            <div className=' top-selling-cosmetic-section'>
                <h2 className='px-2'>Top Selling Cosmetics Products</h2>
                <div className='px-2'>These products are sold most out of our 1000+ of other products</div>
                <hr className='mx-2' />
                <Slider {...settings} className="top-selling-apperals-container">
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/cosmetics/cosmetic-to-display/cosmetic-1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Foever 52 lip color</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹699</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹750</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/cosmetics/cosmetic-to-display/cosmetic-2.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Forever 52 matt lipstick</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹659</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹699</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/cosmetics/cosmetic-to-display/cosmetic-3.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Forever 52 foundation</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹850</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹875</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/cosmetics/cosmetic-to-display/cosmetic-12.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Maybeline maskara</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹349</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹399</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/cosmetics/cosmetic-to-display/cosmetic-5.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Lotus face wash</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹355</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹375</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/cosmetics/cosmetic-to-display/cosmetic-6.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>o3+ soothing cream</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹1750</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹1820</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/cosmetics/cosmetic-to-display/cosmetic-7.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Maybeline lipstick</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹259</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹299</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default TopSellingCosmetic