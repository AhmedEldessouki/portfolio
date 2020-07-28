import React from 'react'
import './Navigation.scss'
import my from '../../assets/my.svg'

const UnAuthNavlinks = () => {
  return (
    <div className="myNav-container">
      <div className="my-name">
        <img
          src={my}
          alt={'Ahmed Eldessouki'}
          style={{ width: '267px', padding: '0px 0px 15px 20px' }}
        />
      </div>
      <div className="myNav">
        <a className="myNav-item" href="/">
          Home
        </a>
        <a className="myNav-item" href={'/#projects'}>
          Projects
        </a>
        <a className="myNav-item" href="/#contactMe">
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default UnAuthNavlinks
