import { React, useState } from "react"
import "./footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  const [hoverIcon, setHoverIcon] = useState(0)

  return (
    <div className="footerContainer">
      <div className="textDiv">
        <h2 className="footerText">Infant Annihilator Ecommerce</h2>
        <h2 className="footerText">Página desarrollada por Manuel Eberhardt</h2>
      </div>
      <div className="imgDiv">
        <Link to="https://www.instagram.com/infantannihilator/?hl=es" target="_blank">
          <img src="/img/icon-instagram.webp" alt="Instagram" className={hoverIcon == 1 ? "iconImgHover" : hoverIcon == 0 ? "iconImgHover" : "iconImg"} onMouseOver={() => setHoverIcon(1)} onMouseOut={() => setHoverIcon(0)}/>
        </Link>
        <Link to="https://x.com/infantofficial" target="_blank">
          <img src="/img/icon-twitter.webp" alt="Twitter" className={hoverIcon == 2 ? "iconImgHover" : hoverIcon == 0 ? "iconImgHover" : "iconImg"} onMouseOver={() => setHoverIcon(2)} onMouseOut={() => setHoverIcon(0)}/>
        </Link>
        <Link to="https://www.youtube.com/channel/UCuunZEbo3XJFR5q1neQNXnw" target="_blank">
          <img src="/img/icon-youtube.webp" alt="Youtube" className={hoverIcon == 3 ? "iconImgHover" : hoverIcon == 0 ? "iconImgHover" : "iconImg"} onMouseOver={() => setHoverIcon(3)} onMouseOut={() => setHoverIcon(0)}/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
