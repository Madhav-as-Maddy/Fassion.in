import React from 'react'

// custom CSS import
import './footerCallToAction.css'



const FooterCallToAction = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="call-container">
                    <a href="tel:8976031050"><i className="fas fa-phone-alt fa-3x"></i> </a>
                </div>
                <div className="facebook-container"> <a href='https://www.facebook.com/fassion.in.bhopal/' target={"_blank"} rel="noreferrer"><i className="fab fa-facebook fa-3x"></i></a>
                </div>
                <div className="instagram-container"> <a href='https://www.instagram.com/fassion.in.bhopal/' target={"_blank"} rel="noreferrer"><i className="fab fa-instagram fa-3x"></i></a>
                </div>
                <div className="linkedIn-container"> <a href='https://www.linkedin.com/company/fas/' target={"_blank"} rel="noreferrer"><i className="fab fa-linkedin-in fa-3x"></i></a>
                </div>
                <div className="whatsapp-container"> <a href='https://api.whatsapp.com/send?phone=919009011223/'><i className="fab fa-whatsapp fa-3x"></i></a>
                </div>
            </div>
        </div>
    )
}

export default FooterCallToAction
