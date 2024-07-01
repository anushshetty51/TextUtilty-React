import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import About from './Components/About';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [redmode, setRedMode] = useState('light');

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleswitch = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#010428';
      showalert("Dark mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  }

  const toggleRed = () => {
    if (redmode === 'light' || redmode === 'dark') {
      setRedMode('red');
      document.body.style.backgroundColor = 'rgb(0 1 255)';
      showalert('Blue Mode activated', 'success');
    } else {
      setRedMode('dark');
      document.body.style.backgroundColor = '#010428';
      showalert("Dark mode Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar 
          title="TextUtils" 
          aboutTitle="About Us" 
          mode={mode} 
          toggle={toggleswitch} 
          toggleRed={toggleRed}  
          redmode={redmode}
        />  
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textforms showalert={showalert} heading="Enter the text to analyze" mode={mode}/>} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
