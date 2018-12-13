import React, { Component } from 'react';
import './App.scss';
import MyNav from './componant/MyNav/MyNav'
import MyInfo from './componant/MyInfo/MyInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyNav />
          <MyInfo />
        </header>
        <main>

        </main>
      </div>
    );
  }
}

export default App;
