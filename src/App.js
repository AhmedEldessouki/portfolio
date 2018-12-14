import React, { Component } from 'react';
import './App.scss';
import MyNav from './componant/MyNav/MyNav'
import MyInfo from './componant/MyInfo/MyInfo'
import Projects from './componant/Projects/Projects'
import ContactMe from './componant/ContactMe/ContactMe'
import MyFooter from './componant/MyFooter/MyFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyNav />
          <MyInfo />
        </header>
        <main>
          <Projects />
        </main>
        <footer>
          <ContactMe />
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
