import React from 'react'
import "./navbar.css"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="brand">
                <Link to ="/" className="link">
                    <img src="/img/logo_navbar.webp" alt="Logo Infant Annihilator" className="logo"/>
                </Link>
            </div>
            <ul className="navMenu">
                <li className="navText">
                    <Link to ="/" className="navText">Inicio</Link>
                </li>
                <li className="navText">|</li>
                <li className="navText">
                    <Link to ="/category/vestimenta" className="navText">Vestimenta</Link>
                </li>
                <li className="navText">|</li>
                <li>
                    <Link to ="/category/musica" className="navText">Música</Link>
                </li>
                <li className="navText">|</li>
                <li>
                    <Link to ="/category/otros" className="navText">Otros</Link>
                </li>
                <li className="navText">|</li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default NavBar