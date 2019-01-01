import React, {Component} from 'react'

window.fbAsyncInit = function () {
  FB.init({
    appId: '1813842465324998',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.11'
  });

  // Broadcast an event when FB object is ready
  var fbInitEvent = new Event('FBObjectReady');
  document.dispatchEvent(fbInitEvent);
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export default class FacebookLogin extends Component {


  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  /**
   * Init FB object and check Facebook Login status
   */
  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  /**
   * Check login status
   */
  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }

  /**
   * Check login status and call login api is user is not logged in
   */
  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'});
      }
    }, );
  }

  /**
   * Handle login response
   */
  facebookLoginHandler = response => {
    if (response.status === 'connected') {
      this.FB.api('/me', userData => {
        let result = {
          ...response,
          user: userData
        };
        this.props.onLogin(true, result);
      });
    } else {
      this.props.onLogin(false);
    }
  }

  render() {
    let {children} = this.props;
    return (
      <div onClick={this.facebookLogin}>
        {children}
      </div>
    );
  }
}