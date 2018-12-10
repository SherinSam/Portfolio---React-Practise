import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';

const arr = [
  {
    name:"Rails Marketplace",
    description:"A two sided market place",
    link:"https://gentle-mountain-97851.herokuapp.com/",
    public: true

  },
  {
    name:"Portfolio HTML/CSS",
    description:"Portfolio version one in HTML/CSS",
    link:"https://sherinsam-portfolio.netlify.com/",
    public: true
  },
  {
    name:"Google Fonts Tester",
    description:"Test Google fonts with diff colors and sizes",
    link:"https://sherinsam-google-fonts-tester.netlify.com/",
    public: true
  },
  {
    name:"Javascript Game",
    description:"A simple JS dice game",
    link:"https://a-dice-game.netlify.com/",
    public: true
  },
  {
    name:"Javascript Clock",
    description:"A JS practise app",
    link:" https://sherinsam-jsclock.netlify.com/",
    public: true
  }
]


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div class="main-body">
          {
            arr.map(project =>
              project.public?  <Main //forEach doesnt work
                name={project.name}
                description={project.description}
                link={project.link}               
              />
              :
                null
              )
          } 
        </div>

      </div>
    )
  }
}

export default App;