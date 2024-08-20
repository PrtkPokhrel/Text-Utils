import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Text from './Component/Text';
import About from './Component/About';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [modeLetter, setModeLetter] = useState('Enable Dark Mode');

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeLetter('Enable Light Mode');
      document.body.style.backgroundColor = "#3e4d4a";
      document.title = "Text Utils - Dark Mode";
    } else {
      setMode('light');
      setModeLetter('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      document.title = "Text Utils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar logo="TextUtils" home="Home" about="About" mode={mode} changeMode={changeMode} word={modeLetter} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Text} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
  




