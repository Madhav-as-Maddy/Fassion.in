import React from 'react'

// import custome CSS
import './topSellingPerfume.css'

// third party library import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSellingPerfume = () => {
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
            <div className=' top-selling-perfume-section'>
                <h2 className='px-2'>Top Selling perfume</h2>
                <div className='px-2'>These products are sold most out of our 100+ of other products</div>
                <hr className='mx-2' />
                <Slider {...settings} className="top-selling-perfume-container">
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/perfumes/perfume-to-display/adidas-1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title" style={{ maxWidth: "15rem" }}> <b>Adidas victory perfume (male) -100ml</b> </h6>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹799</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹1295</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/perfumes/perfume-to-display/armaf.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title" style={{ maxWidth: "15rem" }}> <b>Armaf perfume (Women) -100ml</b> </h6>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹3499</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹3999</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/perfumes/perfume-to-display/chanel.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title" style={{ maxWidth: "15rem" }}> <b>Chanel perfume (women) -100ml</b> </h6>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹14999</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹17400</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/perfumes/perfume-to-display/chastaty.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title" style={{ maxWidth: "15rem" }}> <b>Rasasi chastity perfume -100ml</b> </h6>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹2199</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/perfumes/perfume-to-display/coco-6.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title" style={{ maxWidth: "15rem" }}> <b>Chanel perfume -100ml</b> </h6>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹14999</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹17400</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/perfumes/perfume-to-display/colors.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title" style={{ maxWidth: "15rem" }}> <b>UCB purple perfume (women) -100ml</b> </h6>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹1999</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2100</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                    <div className="card mx-2 product-details top-product-list " style={{ Width: "25rem", height: "auto" }}>
                        <img src="./images/perfumes/perfume-to-display/diesel-1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title" style={{ maxWidth: "15rem" }}> <b>Dissel bad intence perfume (male) -100ml</b> </h6>
                            <div className="selling-price d-flex align-items-center">
                                <h6 className="card-text">Selling Price </h6> <h4><b> ₹9999</b></h4>
                            </div>
                            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹1200</p>
                            <a href="/booking" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default TopSellingPerfume