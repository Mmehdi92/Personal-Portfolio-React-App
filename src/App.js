import './styles/App.css';
import React from 'react';
import { NavBar } from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
