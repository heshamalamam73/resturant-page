import React, { Component } from 'react';
import logo from './logo.svg';
import './css/main.css';
import Header from './component/header';
import Body from './component/body';
import img1 from './img/img1.jpg'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Body  title="pasta" 
             ingredients={["spagetty","water","salt","baby nero"]}
             instructions =" make the water hor then put some slat then spaghetti"
             img={img1}
      
      
      
      
      
      />
     
      </div>
    );
  }
}

export default App;
