import React from 'react';

// cusom CSS import
import './topApperalsBrand.css'

// third party library import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopApperalsBrand = () => {

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
            <div className=' brands-logo-section'>
                <h2 className='px-2'>Available Top Brand</h2>
                <div className='px-2'>We have most of the top brands Available in our store</div>
                <hr className='mx-2' />
                <Slider {...settings} className="brand-logo-container">
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "15rem", height: "auto" }}>
                        <img src="./images/clothings/brands-logo/biba.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/shein.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/h&m.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/levi's.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/tomy-heilfiger.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/pepe-gence.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/kazo.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/ele.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/end.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/madame.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/maxresdefault.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/only-logo.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/soch.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/vero-moda.png" alt="" />
                    </div>
                    <div className=" mx-2 brands-logo " style={{ maxWidth: "25rem", height: "15rem" }}>
                        <img src="./images/clothings/brands-logo/zara.png" alt="" />
                    </div>

                </Slider>
            </div>
        </>
    )
}

export default TopApperalsBrand;