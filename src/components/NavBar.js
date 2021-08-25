import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-300 text-2xl font-bold cursive tracking-widest"
                    >
                        Asger Kiehn
                    </NavLink>
                    <NavLink 
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-green-300"
                        activeClassName="text-green-100 bg-blue-900"
                    >
                        Artikler
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-green-300"
                        activeClassName="text-green-100 bg-blue-900"
                        >
                        Projekter
                    </NavLink>
                    <NavLink 
                        to="/about"     
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-green-300"
                        activeClassName="text-green-100 bg-blue-900"
                        >
                        Kontakt
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon  url="https://twitter.com/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon  url="https://www.instagram.com/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon  url="https://www.youtube.com/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}
