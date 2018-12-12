import React, { Component } from 'react';
import './App.scss';
import MyNav from './componant/MyNav/MyNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyNav />
        </header>
        <main>
          
        </main>
      </div>
    );
  }
}

export default App;
