import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Anime from "./components/Anime";
import CharacterContainer from "./components/CharacterContainer";
import About from "./components/About";
import Contact from "./components/Contact";
import SeasonContainer from "./components/SeasonContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Anime/>}/>
            <Route path="/character" element={<CharacterContainer/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/season" element={<SeasonContainer/>}/>

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
