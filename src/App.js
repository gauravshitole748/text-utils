import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
const [mode, setMode] = useState('light');

document.body.style.backgroundColor = mode === "light" ? "#FFF" : "#262626"
document.body.style.color = mode === "light" ? "#000" : "#FFF"

  //document.body.style.backgroundColor = "#000"
  return (
    <>
      <Navbar title="TextUtils" mode={mode} modeSetting={() => setMode(mode === "dark" ? "light" : "dark")}/>
      <div className="container mb-3">
        <TextForm title="Enter text to analyze below:" mode={mode} style={{backgroundColor: mode === "light" ? "#FFF" : "#262626"}}/>
      </div>
    </>
  );
}

export default App;
