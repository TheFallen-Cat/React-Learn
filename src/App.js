import "./App.css";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#141414";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <div>
      <Navbar title="React App" theme={mode} toggleMode={toggleTheme}></Navbar>
      <Alert alert={alert}></Alert>

      <Form theme={mode} />
    </div>
  );
}

export default App;
