import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="container">
           <div className="nav-container">
               <NavLink to="/" className="navlink-one" activeClassName="navlink-one-active">
                <div >
                    <p>Om mig</p>
                </div>
               </NavLink>
                <div className="navlink-one">
                    <p>F&F</p>
                </div>
                <div className="navlink-one">
                    <p>Eksempler</p>
                </div>
                <div className="navlink-one">
                    <p>Kontakt</p>
                </div>
           </div>
        </div>
    )
}
