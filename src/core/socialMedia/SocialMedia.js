import React from 'react'

// Custom CSS import
import './socialMedia.css'

const SocialMedia = () => {
    return (
        <>
            <div className='social-media-container d-flex gap-2'>
                <a
                    href="https://www.facebook.com/fassion.in.bhopal"
                    target='_blank'
                    rel="noreferrer">
                    <img src="./images/social-media-icons/facebook.png" className="d-block " style={{ height: '30px', width: 'auto' }} alt="..." /></a>
                <a
                    href="https://www.instagram.com/fassion.in.bhopal/"
                    target='_blank'
                    rel="noreferrer">
                    <img src="./images/social-media-icons/instagram.png" className="d-block " style={{ height: '30px', width: 'auto' }} alt="..." /></a>
                <a
                    href="https://www.linkedin.com/"
                    target='_blank'
                    rel="noreferrer">
                    <img src="./images/social-media-icons/linkedin.png" className="d-block " style={{ height: '30px', width: 'auto' }} alt="..." /></a>
            </div>
        </>
    )
}

export default SocialMedia
