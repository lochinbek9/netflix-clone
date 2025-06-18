
import "./Navbar.css"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img  from "../../assets/profile_img.png"
import caret_icon  from "../../assets/caret_icon.svg"
import { useEffect, useRef } from "react"
import { logout } from "../../firebase"
import { ToastContainer, toast } from 'react-toastify';

function Navbar() {
  const navRef = useRef();

  useEffect(() =>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      } else{
        navRef.current.classList.remove("nav-dark")
      }
    })
  })
  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-left">
        <a href="./index.html">
          <img src={logo} alt="logo" />
        </a>
        <ul className="navbar-list">
            <li>
              <a href="#" className="navbar__link">Home</a>
            </li>
            <li>
              <a href="#" className="navbar__link">TV Shows</a>
            </li>
            <li>
              <a href="#" className="navbar__link">Movies</a>
            </li>
            <li>
              <a href="#" className="navbar__link">News & Popular</a>
            </li>
            <li>
              <a href="#" className="navbar__link">My List </a>
            </li>
            <li>
              <a href="#" className="navbar__link">Browse by languages</a>
            </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="Search Icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="Bell Icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img } alt="profile" className="icons profile" />
          <img src={ caret_icon } alt="caret" className="icons" />
          <div className="dropdown">
              <button onClick={() =>{logout()}}>Sign Out of Netflix</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar