import React, { Component } from 'react';
import { render } from 'react-dom';
import StarComponent from './StarComponent';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <StarComponent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
