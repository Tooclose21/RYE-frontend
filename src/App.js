
import './styles.css';
import Navbar from "./components/Navbar";
import WelcomeMessage from "./components/WelcomeMessage";
import React from "react";

function App() {
  return (
      <div>
        <Navbar />
        <WelcomeMessage />
      </div>
  );
}

export default App;
