import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      
     <a href='https://www.linkedin.com/in/gayanath-lakmevan-silva-b81337222/' target="_blank"><BsLinkedin/></a>
     <a href='https://github.com/gayanath97?tab=repositories' target="_blank"><FaGithub/></a>
     <a href='https://gayanathlakmevansilva.medium.com/' target="_blank"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials