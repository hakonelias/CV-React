import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';

const checkMobile = () => {
  if (window.innerWidth < 800) 
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
  return <div> {/*Hold up hva faen skjedde her hahahah håper ikke andrè finner dette prosjektet*/}
    <h1></h1>
    <Home/>
  </div>
}

export default App;
