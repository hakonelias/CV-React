import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';

const checkMobile = () => {
  if (window.innerWidth < 600) 
      return true;
  return false; //
}

function App() {
  const isMobile = checkMobile();
  if (!checkMobile())
  return (
    <div>
        <Home/>
    </div>
  );
  else
  return <div>
    <h1></h1>
    <Home/>
  </div>
}

export default App;
