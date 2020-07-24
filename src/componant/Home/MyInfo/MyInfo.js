import React, { Component } from 'react'
import './MyInfo.scss'
import axios from 'axios'
import { GoMarkGithub } from 'react-icons/go'
import { BarLoader } from 'react-spinners'

export default class MyInfo extends Component {
  constructor() {
    super()
    this.state = {
      profile: '',
      isLoading: true,
    }
  }
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/ahmedeldessouki`)
      .then((res) => {
        this.setState({
          profile: res.data,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log(err) //todo we don't show the user the error in console. we remove this in the future
      })
  }
  render() {
    const { profile, isLoading } = this.state
    return (
      <div>
        {isLoading ? (
          <div className="my-spinner-container">
            <BarLoader
              className="my-spinner"
              sizeUnit={'px'}
              size={150}
              color={'#d4dff6'}
              loading={this.state.loading}
            />
            Loading...
          </div>
        ) : (
          <div className="MyInfo" style={{ height: window.innerHeight }}>
            <div className="first-container">
              <div className="img-container">
                <img
                  src={`https://images.weserv.nl/?url=${profile.avatar_url}`}
                  alt="profilePicture"
                />
              </div>
              <ul className="details-container">
                <li>{profile.name}</li>
                <li className="follow-container">
                  Lives in {profile.location}
                </li>
                <li>
                  <a href={profile.html_url}>
                    <GoMarkGithub /> My Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="second-container">
              <p>
                Welcome! I'm Ahmed Eldessouki. I'm 31 years old from Cairo,
                Egypt currently living in <b>Istanbul, Turkey</b>. I looking for
                a new opportunity as a<em> Front-End Developer</em>. I graduated
                from University Of Wales. I worked at RoomMe as an entry level
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
}
