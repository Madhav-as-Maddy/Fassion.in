import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div className="container-fluid mt-5">
                {/* <!-- Footer --> */}
                <footer
                    className=" text-center text-lg-start text-white"
                    style={{ backgroundColor: "#45526e" }}
                >
                    {/* <!-- Grid container --> */}
                    <div className="container p-4 pb-0">
                        {/* <!-- Section: Links --> */}
                        <section className="">
                            {/* <!--Grid row--> */}
                            <div className="row">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Fassion.in
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr className="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                    <p>
                                        <Link className="text-white" to="/fashion-store">Tshirt</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white" to="/fashion-store">Jeans</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white" to="/cosmetic-store">cosmetics</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white" to="/perfume-store">Perfume</Link>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr className="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h6>
                                    <p>
                                        <Link className="text-white" to="/booking">contact</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white" to="/perfume-store">Top Perfume</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white" to="/fashion-store">Best Jeans</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white" to="/booking">Help</Link>
                                    </p>
                                </div>

                                {/* <!-- Grid column --> */}
                                <hr className="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> Kolar Road, Bhopal</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@fassion.in</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 91 9584 584 101</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!--Grid row--> */}
                        </section>
                        {/* <!-- Section: Links --> */}

                        <hr className="my-3" />

                        {/* <!-- Section: Copyright --> */}
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    {/* <!-- Copyright --> */}
                                    <div className="p-3">
                                        © 2020 Copyright:
                                        <Link className="text-white" to="/">fassion.in</Link>
                                    </div>
                                    {/* <!-- Copyright --> */}
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    {/* <!-- Facebook --> */}
                                    <Link
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        role="button" to="www.facebok.com/fassion.in.bhopal"
                                    ><i className="fab fa-facebook-f"></i
                                    ></Link>

                                    {/* <!-- Google --> */}
                                    <Link
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        role="button" to="www.instagram.com/fassion.in.bhopal"
                                    ><i className="fab fa-google"></i
                                    ></Link>

                                    {/* <!-- Instagram --> */}
                                    <Link
                                        className="btn btn-outline-light btn-floating m-1 text-dark"
                                        role="button" to="www.instagram.com/fassion.in.bhopal"
                                    ><i className="fab fa-instagram"></i
                                    ></Link>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                        </section>
                        {/* <!-- Section: Copyright --> */}
                    </div>
                    {/* <!-- Grid container --> */}
                </footer>
                {/* <!-- Footer --> */}
            </div>
            {/* <!-- End of .container --> */}
        </>
    )
}

export default Footer;