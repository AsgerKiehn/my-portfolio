import React, {useEffect, useState} from 'react'
import sanityClient from "../client.js"
import urlBuilder from '@sanity/image-url'

const urlFor = source => urlBuilder({projectId: 'jy9nlhu2', dataset: 'production'}).image(source)

export default function About() {
    const [meImg, setMeImg] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "images" && _id == "1eee49fc-d635-4916-ad11-0900057acf5d"]{
                title,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setMeImg(data))
            .catch(console.error) 
    }, [])

    console.log(meImg)

    return (
        <div className="container">
            <div className="about-container">
                <div className="colored-div-about">
                    { meImg && 
                        <img className="about-img" src={urlFor(meImg[0].mainImage.asset.url)} alt="Asger Kiehn"/>
                    }
                </div>
                
                
            </div>
        </div>
    )
}



