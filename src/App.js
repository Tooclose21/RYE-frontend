import logo from './images/logo.svg';
import './styles.css';
import Navbar from "./components/Navbar.js";
import WelcomeMessage from "./components/WelcomeMessage.js";
import Button from "./components/Button";
import React from "react";
import blueGhost from "./images/blueGhost.png";


function App() {
    return (

        <div>
            <h1 className={"login--text"}> Log in as</h1>
            <Button loc={{position: 'absolute', top: '30%', left: '59%'}}>Parent</Button>
            <Button loc={{position: 'absolute', top: '40%', left: '59%'}}>Child</Button>
            <h1 className={"login--text2"}> Don't have an account yet?</h1>
            <Navbar/>
            <img src={blueGhost} style={{ marginLeft: '100px', marginBottom: '10px', width: '500px', height: '450px' }}  alt="Blue ghost"/>
        </div>

    );
    // return (
    //     <div>
    //       <Navbar />
  //       <WelcomeMessage />
  //     </div>
  // );
  //



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
