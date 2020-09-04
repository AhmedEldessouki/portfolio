import React from 'react'
import './MyFooter.scss'
import {
  FaLinkedin,
  FaSass,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaRegCopyright,
  FaGithubSquare,
} from 'react-icons/fa'
import react from '../../../assets/react.svg'

const MyFooter = () => {
  return (
    <footer className='MyFooter'>
      <div className='separator' />
      <div className='left-container'>
        <a href='https://www.linkedin.com/in/ahmedeldessouki/'>
          <FaLinkedin />
        </a>
        <a href='https://www.github.com/ahmedeldessouki/'>
          <FaGithubSquare />
        </a>
        <a href='https://plus.google.com/+AhmedElDessouki1'>
          <FaGooglePlusSquare />
        </a>
        <a href='https://www.instagram.com/eldessouki.a'>
          <FaInstagram />
        </a>
        <a href='https://www.facebook.com/ahmed.eldessouki.39'>
          <FaFacebookSquare />
        </a>
        <a href='https://www.twitter.com/nem0adam'>
          <FaTwitterSquare />
        </a>
      </div>
      <div className='center-container'>
        <img className='react-logo' alt='' src={react} />
        <FaSass style={{ color: 'hotpink', alignSelf: 'center' }} />
      </div>
      <div className='right-container'>
        <FaRegCopyright />
        <p>2019 Ahmed ElDessouki</p>
      </div>
    </footer>
  )
}
export default MyFooter
