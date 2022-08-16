import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';

const checkMobile = () => {
  if (window.innerWidth < 500) 
      return "Mobile";
  return "Computer"; //En litt eksperimentell måte å gjøre det på men kanskje det er digg idk
}

function App() {
  const isMobile:string = checkMobile();
  return (
    <div className={isMobile}>
        <Home/>
    </div>
  );
}

export default App;
