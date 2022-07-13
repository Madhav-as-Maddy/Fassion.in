import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

// import the routes components
import Navbar from './core/navbar/Navbar';
import Home from './core/home-page/Home';
import FooterCallToAction from './core/footerCallToAction/FooterCallToAction';
import FashionStore from './core/fashion-store/FashionStore';
import CosmeticStore from './core/cosmetic-store/CosmeticStore';
import Footer from './core/footer/Footer';
import PerfumeStore from './core/perfume-store/PerfumeStore';
import BookingPage from './core/booking-page/BookingPage';

const ProjectRoutes = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/fashion-store" element={<FashionStore />} />
                    <Route exact path="/cosmetic-store" element={<CosmeticStore />} />
                    <Route exact path="/perfume-store" element={<PerfumeStore />} />
                    <Route exact path="/booking" element={<BookingPage />} />


                </Routes>
                <Footer />
                <FooterCallToAction />
            </Router>
        </>
    )
}

export default ProjectRoutes;