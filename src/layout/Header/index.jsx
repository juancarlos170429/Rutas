import React from 'react'

import './style.scss'
import {Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img src="http://assets.stickpng.com/images/58428ba1a6515b1e0ad75ab0.png" alt="" />
      </div>
      <div className="l_header_menu">
       
       <div>
          <Link to="/"><p>Home</p></Link>
        </div>
        <div>
          <Link to="/hero"> <p>Heros</p></Link>
        </div>
        <div>
          <Link to="/ruta1"><p>Ruta 1</p></Link>
        </div>
        <div>
          <Link to="/ruta2"><p>Ruta 2</p></Link>
        </div>
       
      </div>
    </div>
  )
}

export default Header
