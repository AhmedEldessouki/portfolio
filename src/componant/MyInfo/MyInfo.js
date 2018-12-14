import React, { Component } from 'react'
import './MyInfo.scss'
import axios from "axios";

export default class MyInfo extends Component {
  constructor() {
    super();
    this.state = {
      profile: '',
      isLoading: true
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/ahmedeldessouki`)
      .then((res) => {
        this.setState({
          profile: res.data,
          isLoading: false
        })
      }).catch((err) => {
        console.log(err);//todo we don't show the user the error in console. we remove this in the future
      });
  }
  render() {
    const { profile } = this.state
    console.log(profile)
    return (
      <div className="MyInfo">
        <div className="first-container">
          <div className="img-container">
            <img src={profile.avatar_url} alt="profilePicture" />
          </div>
          <ul className="details-container">
            <li>{profile.name}</li>
            <li className="follow-container">
              Lives in {profile.location}
            </li>
            <li>
              <a href={profile.url}>
                My Github
							</a>
            </li>
          </ul>
        </div>
        <div className="second-container">
          <p>
          Welcome I'm Ahmed Eldessouki I work as <em>Fron-End Developer</em> I'm from Egypt 
          and I'm currently living in Turkey. I graduated from Universty Of South Wales and 
          right now I work in RoomMe as an entry level Front-End Developer. I'm very passionate 
          newbie Front-End Developer who loves  to develop himself and stay up-to-date with the 
          new <em>technologies and technics</em>.
          </p>
        </div>
      </div>
    )
  }
}
