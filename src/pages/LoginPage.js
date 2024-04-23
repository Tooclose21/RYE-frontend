import logo from './images/logo.svg';
import './styles.css';
import Navbar from "./components/Navbar.js";
import WelcomeMessage from "./components/WelcomeMessage.js";
import Button from "./components/Button";


function LoginPage() {
    return (
        <div>
            <Button loc={{position: 'absolute', top: 20, left: 20}}>Parent</Button>
            <Navbar/>
        </div>
    );
}

export default LoginPage;