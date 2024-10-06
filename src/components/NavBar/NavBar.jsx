import "./navbar.css"
import Logo from "../../assets/logo_navbar.webp"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav className="navbar">
            <img src={Logo} alt="Logo Infant Annihilator" className="logo"/>
            <ul className="navMenu">
                <li>Inicio</li>
                <li>|</li>
                <li>Vestimenta</li>
                <li>|</li>
                <li>Música</li>
                <li>|</li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default NavBar