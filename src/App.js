import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const modeSetup = () => {
  if (mode === "light") {
    setMode("dark")
    showAlert("Dark mode activated!", "dark")
  } else {
    setMode("light")
    showAlert("Light mode activated!", "light")
  }
};

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

//Set document backgoundColor when mode changes
document.body.style.backgroundColor = mode === "light" ? "whitesmoke" : "#100f0f"
document.body.style.color = mode === "light" ? "#000" : "#FFF"

  return (
    <>
      {/* <Navbar title="TextUtils" mode={mode} modeSetting={() => setMode(mode === "dark" ? "light" : "dark")}/> */}
      <Navbar title="TextUtils" mode={mode} modeSetting={modeSetup}/>
      <Alert alert={alert}/>
      <div className="container mb-3">
        <TextForm title="Enter text to analyze below:" mode={mode} showAlert={showAlert} style={{backgroundColor: mode === "light" ? "#FFF" : "#262626"}}/>
      </div>
    </>
  );
}

export default App;
