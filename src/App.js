import './App.css';
import HtmlForm from './components/HtmlForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert'
import AboutUs from './components/AboutUs'

// import { BrowserRouter, Routes, Route } from "react-router-dom";



// import AboutUs from './components/AboutUs';

function App() {
  // for nav usestate
  let [mode, setmode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setmode("#0A1A2F")
      document.body.style.backgroundColor = "#0A1A2F"
      showAlert("Dark mode is enabled!", "success")
      document.title = "Textify -Dark mode"

      // set inverval
      // setInterval(() => {

      //   document.title=" install -Textify "
      // }, 2000);
      // setInterval(() => {

      //   document.title=" install -Textify now now "
      // }, 1500);
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"

      showAlert("light mode is enabled!", "success")
      document.title = "Textify -Light mode"
    }
  }
  // for alert usestate
  const [alert, setAlert] = useState(null)

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }


  return (
    <>
{/* <BrowserRouter> */}


      <Navbar Navbar="xechify" About="AboutUS" Home="home" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />

      {/* routor */}
      {/* <Routes>
        <Route path="/" element={<HtmlForm heading="Enter the text to examine" mode={mode} showAlert={showAlert} />
        } />
        <Route path="/about" element={<AboutUs />} />
      </Routes> */}

      <div className="container my-3">

        <HtmlForm heading="Enter the text to examine" mode={mode} showAlert={showAlert} />
        {/* <AboutUs /> */}
      </div>
{/* </BrowserRouter> */}

    </>

  );
}

export default App;

