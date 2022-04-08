import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Gayanath Lakmevan Silva</a>

      <ul className='permalinks'>

        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Education</a></li>
        <li><a href='#experience'>Experience</a></li>
        
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Skills</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href='https://www.facebook.com/profile.php?id=100065582674561' target="_blank"><FaFacebookF /></a>
        <a href='https://www.instagram.com/gayanath_lakmevan/' target="_blank"><FiInstagram /></a>
        <a href='https://twitter.com/GayanathSilva' target="_blank"><IoLogoTwitter /></a>
      </div>


      <div className="footer_copyright">
        <small>&copy;Gayanath Lakmevan Silva.<br/>ADDRESS: 517, 
PALUGAHAVELA,KATUWELLEGAMA<br/> All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer