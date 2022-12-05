import React from 'react';
import Home from "./Home/Home"
import EducationPage from './EducationPage/EducationPage';
import Technologies from './Technologies/Tech';
import Header from './Header/Header';
import './App.css';

function App() {

  return (
    <div id='main-div'>
      <Header/>
      <Home/>
      <EducationPage/>
      <Technologies/>
    </div>
  );
}

export default App;
