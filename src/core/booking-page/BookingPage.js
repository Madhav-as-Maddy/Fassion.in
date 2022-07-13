import React from 'react'

const BookingPage = () => {
    return (
        <>
            <div className="booking-container">
                <div className="left-side-elements-container">
                    <div className="card text-center">
                        <div className="card-header">
                            As of now we are only serving offiline booking !
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">We accept order on the telephone and provide free home delivery with cash on delivery option</h5>
                            <h2 className="card-title">Call : + 91 9584584101</h2>
                            <p className="card-text">Plot No 20A, Lowerground Floor, Deepak Society, Chunabhatti Kolar Road, Next to ICICI Bank, <br /> Opposite Manoria Hospital Chuna Bhatti Bhopal, Madhya Pradesh 462016</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                        <div className="card-footer text-muted">
                            Call: + 91 9584584101
                        </div>
                    </div>
                    {/* google map */}
                    <iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1583482491606!2d77.41450771492256!3d23.200899184863058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439fb503e283%3A0x9e160c8b3d896171!2sFassion.in!5e0!3m2!1sen!2sin!4v1653374081620!5m2!1sen!2sin"
                    style={{width: "100%", height:"450px", border: "o"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
                {/* <div className="right-side-elements-container">

                </div> */}
            </div>
        </>
    )
}

export default BookingPage