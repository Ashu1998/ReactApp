import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component{

  state = {

  }
  
  render(){
    const {titles} = this.state;
    return(
       <div className = "App">
       { titles.map(this.renderTitles)}
       </div>
    
      );

  }
}

export default App;
