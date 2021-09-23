import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import urlBuilder from '@sanity/image-url'
import sanityClient from "../client.js"

const urlFor = source => urlBuilder({projectId: 'jy9nlhu2', dataset: 'production'}).image(source)

export default function SocialGallery() {
    const [images, setImages] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "gallery"] {
                images,
            }[0...10]`)
                .then((data) => setImages(data))
                .catch(console.error)
    }, [])


    // RECEIVE AN ARRAY OF IMAGES FROM SANITY
    const IMAGES = images && images[0].images.map((image) => (
        // Return objects of key value pairs 
        {original: urlFor(image.asset._ref)}
    ))

    return (
        <div className="container">
            <div className="social-gallery-container">
                <div className="social-gallery-title">
                    <p>SOCIALE MEDIER</p>
                </div>
                <div className="image-slider-container">
                    {IMAGES && <ImageGallery
                        items={IMAGES}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />}
                </div>
                <div className="social-text-container">
                        <h4>Overvejelser</h4>
                        <p>I ovenstående eksempler har jeg vha. Photoshop designet et par Instagram posts. Her kunne man ligeledes eksperimentere med forskellige designformater for at gøre indholdet mere interessant.</p>
                    </div>
            </div>
        </div>
    )
}
