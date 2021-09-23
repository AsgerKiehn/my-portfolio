import React from 'react'


export default function Contact() {

    return (
        <div className="container">
            <div className="contact-container">
                <p><strong>Email:</strong> asgerkiehn@hotmail.com</p>
                <p><strong>Tlf:</strong> 42409135</p>
                <br/>
                <p>&copy; 2021 - Asger Thistrup Kiehn</p>
                {/* <div className="contact-image">
                    { meImg && 
                            <img className="about-img" src={urlFor(meImg[0].mainImage.asset.url)} alt="Asger Kiehn"/>
                        }
                </div> */}
            </div>
        </div>
    )
}
