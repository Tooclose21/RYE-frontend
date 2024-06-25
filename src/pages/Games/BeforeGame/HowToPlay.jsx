import "./HowToPlay.css"
import Button from "../../../components/Button";
import {useNavigate} from "react-router-dom";


const HowToPlay = () => {
    const navigate = useNavigate();
    return (
        <div className="how-to-play">
            <div className={'intr-container'}>
                <h1 className={'intr-header'}>Choosing game mode and game time</h1>
                <p>To start playing, choose any of provided game modes. Then you will be asked for game time:
                    <li>5 quest -- choosing this options means you will be asked 5 questions,</li>
                    <li>10 quest -- choosing this options means you will be asked 10 questions,</li>
                    <li>15 quest -- choosing this options means you will be asked 15 questions,</li>
                    <li>Endless -- this mean you will be asked question by question until you fail.</li>
                    All available game modes are described below.
                </p>
            </div>
            <div className={'intr-container'}>
                <h1 className={'intr-header'}>Mimic from name</h1>
                <p>In this game mode you see emotion name, and your goal is to take photo of yourself showing
                    this particular emotion.</p>
            </div>

            <div className={'intr-container'}>
                <h1 className={'intr-header'}>Mimic from picture</h1>
                <p>In this game mode you see a picture with person, and your goal is to recognize this emotion and take photo of yourself showing
                    this particular emotion.</p>
            </div>

            <div className={'intr-container'}>
                <h1 className={'intr-header'}>Recognize from picture</h1>
                <p>In this game mode you see a picture with person, and your goal is to recognize this emotion and choose correct answer.</p>
            </div>

            <Button onClick={() => navigate("/ChooseGameMode")} color={'#06066a'} loc={{margin: 'auto'}}>Back</Button>
        </div>
    )
}

export default HowToPlay