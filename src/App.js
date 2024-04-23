import logo from './images/logo.svg';
import './styles.css';
import Navbar from "./components/Navbar";
import WelcomeMessage from "./components/WelcomeMessage";
import {WindowContext, WindowContextProvider} from "./components/Resize";
import React from "react";

function App() {
    const { clientHeight, clientWidth } = React.useContext(WindowContext);
  return (
      <WindowContextProvider>
      <div>
        <Navbar />
        <WelcomeMessage />
      </div>
          </WindowContextProvider>
  );
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
}

export default App;
