import React, { useState, useEffect } from 'react'
import './MyInfo.scss'
import axios from 'axios'
import { GoMarkGithub } from 'react-icons/go'
import { BarLoader } from 'react-spinners'

const MyInfo = () => {
  const [profile, setProfile] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [url, setUrl] = useState('')
  const [setTime, setSetTime] = useState(0)

  const myGitHub = async () => {
    setUrl('https://api.github.com/users/ahmedeldessouki')
    const res = await axios(url)
    setProfile(res.data)
    setIsLoading(false)
    setSetTime(840000)
    return [profile, isLoading, setTime]
  }

  useEffect(() => {
    setTimeout(() => {
      myGitHub()
    }, setTime)
  })

  return (
    <div>
      {isLoading ? (
        <div className="my-spinner-container">
          <BarLoader
            className="my-spinner"
            sizeUnit={'px'}
            size={150}
            color={'#d4dff6'}
            loading={isLoading}
          />
          Loading...
        </div>
      ) : (
        <div className="MyInfo" style={{ minHeight: window.innerHeight }}>
          <div className="first-container">
            <div className="img-container">
              <img src={profile.avatar_url} alt="profilePicture" />
            </div>
            <ul className="details-container">
              <li>{profile.name}</li>
              <li className="follow-container">Lives in {profile.location}</li>
              <li
                style={{
                  backgroundColor: '#23527c',
                }}
              >
                <a href={profile.html_url}>
                  <GoMarkGithub /> My Github
                </a>
              </li>
            </ul>
          </div>
          <div className="second-container">
            <p>
              Welcome! I'm Ahmed Eldessouki. I'm 31 years old from Cairo, Egypt
              currently living in <b>Istanbul, Turkey</b>. I looking for a new
              opportunity as a<em> Front-End Developer</em>. I graduated from
              University Of Wales. I worked at RoomMe as an entry level
              Front-End Developer. I'm a very passionate about Front-End
              Developer. Always developing myself. A strength of mine, is my
              ability to be observant of small details and to stay up-to-date
              with the newest <em>technologies and techniques</em>.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyInfo
