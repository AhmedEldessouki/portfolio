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
        <div>
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
        <div className="about-me">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
          </p>
        </div>
      </div>
    )
  }
}
