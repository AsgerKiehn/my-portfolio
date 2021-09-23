import React from 'react'
import Intro from './Intro'
import Examples from "./Examples"
import Contact from './Contact'
import SocialGallery from './SocialGallery'

export default function Home() {
    return (
        <main>
            <Intro/>
            <Examples/>
            <SocialGallery/>
            <Contact/>
        </main>
    )
}
