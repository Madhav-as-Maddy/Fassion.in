import React from 'react'

const FashionProductList = () => {
  return (
    <>
      <div className="container-fluid product-container d-flex flex-wrap justify-content-center">
        {/* T-shirt section */}
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
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
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
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
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
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
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="./images/clothings/t-shirts-to-display/t-shirt-4.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's T-shirt</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹599</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹1199</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="./images/clothings/t-shirts-to-display/t-shirt-5.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Tommy crop top</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹749</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹1499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>

        {/* jeans paint section */}
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
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
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-2.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans ankle length</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2999</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-3.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-4.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1999</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-5.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans skin fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-6.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans skin fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-7.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans ankle length</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2999</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-8.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans skin fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-9.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeens skin fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-10.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-11.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans skin fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-12.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans ankle length</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2999</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-13.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans ankle length</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2999</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-14.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-15.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-16.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans skin fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-17.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans skin fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-18.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans skin fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-19.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-20.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans high west</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1349</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹3499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-21.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans high west</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1349</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹3499</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
        <div className="card mx-2 my-2 product-details " style={{ minWidth: "15rem", height: "auto" }}>
          <img src="/images/clothings/jeans-to-display/jeans-22.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <b>Levi's jeans regular fit</b> </h5>
            <div className="selling-price d-flex align-items-center">
              <h6 className="card-text">Selling Price </h6> <h4><b> ₹1199</b></h4>
            </div>
            <p style={{ textDecoration: "line-through", marginTop: "-13px" }}> ₹2799</p>
            <a href="/booking" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FashionProductList