import "./styles/global.scss"
import React from "react";
import About from './Components/About_me/About';
import Footer from "./Components/Footer/Footer";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from "./Components/Projects/Projects";
import Skills from './Components/Hard_Skills/Skills'
import Experience from './Components/Experience/Experience'
import Contacts from "./Components/Contacts/Contacts";
import MoveToUp from "./Components/MoveToUp/MoveToUp";

function App() {

  return (<div className="App">
    <Header />
    <Home /> 
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contacts />
    <Footer />
    <MoveToUp />
  </div>);
}

export default App;
