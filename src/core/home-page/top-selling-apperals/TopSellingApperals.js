import React from 'react'

// custom CSS Import
import './topSellingApperals.css'

// third party library import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSellingApperals = () => {
    const settings = {
        dots: false,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
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
            <div className=' top-selling-apperals-section'>
                <h2 className='px-2'>Top Selling Aperals</h2>
                <div className='px-2'>These products are sold most out of our 1000+ of other products</div>
                <hr className='mx-2' />
                <Slider {...settings} className="top-selling-apperals-container">
                    <div className="card mx-2 product-details top-product-list" style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/clothings/jeans-to-display/jeans-1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Levi's jeans skin fit</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list" style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/clothings/t-shirts-to-display/t-shirt-1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Levi's T-shirt</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹599</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹1199</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list" style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/clothings/jeans-to-display/jeans-2.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Levi's jeans ankle length</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2299</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list" style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/clothings/t-shirts-to-display/t-shirt-2.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Tommy Hilfigur</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹699</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹1499</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list" style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/clothings/jeans-to-display/jeans-3.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list" style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/clothings/t-shirts-to-display/t-shirt-3.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Levi's T-shirt</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹599</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹1199</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list" style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/clothings/jeans-to-display/jeans-4.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default TopSellingApperals
