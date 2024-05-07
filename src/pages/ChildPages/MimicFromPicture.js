import '../../styles.css';
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from "react";
import Button from "../../components/Buttons";
import Picture from "../../components/Picture";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import emotion from "../../images/emotion.png";

function MimicFromPicture() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const quests = parseInt(searchParams.get('quests')) || 0;

    const [clickCount, setClickCount] = useState(0);
    const [imageSrc, setImageSrc] = useState(null);
    const [showCamera, setShowCamera] = useState(false);

    useEffect(() => {
        console.log("Quests:", quests);
    }, [quests]);

    const handleClick = () => {
        if (!imageSrc) {
            return;
        }

        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);
        console.log("Button clicked", newClickCount, "times");
        navigate("/FinishedGame", { state: { clickCount: newClickCount, quests: quests, gameMode: 'mimicFromPicture' } });

        setImageSrc(null);
    };

    const handleCapture = (image) => {
        setImageSrc(image);
        setShowCamera(false);
    };

    const handleRetake = () => {
        setImageSrc(null);
        setShowCamera(true);
    };

    const handleShowCamera = () => {
        setShowCamera(true);
    };

    const handleHideCamera = () => {
        setShowCamera(false);
        setImageSrc(null);
    };
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F2EFE3'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className="mfm--headline">Mimic from picture</h1>
            {imageSrc ? null : <img src={emotion} className="emotion--img" alt="Face with emotion to mimic"/>}
            {showCamera ? (
                <Picture onCapture={handleCapture} onHideCamera={handleHideCamera}/>
            ) : (
                <div>
                    {imageSrc && (
                        <div style={{textAlign: 'center'}}>
                            <img src={imageSrc} alt="Captured"
                                 style={{top: '25%', left: '30%', scale: '0.7', zIndex: '9999'}}/>
                            <br/>
                            <Button onClick={handleRetake} loc={{
                                width: '15%',
                                height: '8%',
                                color: '#F8A365',
                                position: 'absolute',
                                top: '80%',
                                left: '42.5%'
                            }} color="#FEE8AA">Retake picture</Button>
                        </div>
                    )}
                    {!imageSrc && (
                        <Button onClick={handleShowCamera} loc={{
                            position: 'absolute',
                            top: '80%',
                            left: '43%',
                            width: '15%',
                            height: '8%',
                            color: '#F8A365'
                        }} color="#FEE8AA">Take a picture</Button>
                    )}
                </div>
            )}
            {!showCamera && (
                <Button onClick={handleClick} loc={{
                    position: 'absolute',
                    top: '80%',
                    left: '73%',
                    width: '10%',
                    height: '8%',
                    color: '#F8A365'
                }} color="#FEE8AA">Finish</Button>
            )}
            <h1 className="counter--text" style={{marginBottom:"40%",top:"66.5%", position:"absolute"}}>{clickCount}/5</h1>
        </div>
        // <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F2EFE3'}}>
        //     <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
        //     <h1 className="mfp--headline">Mimic from picture</h1>
        //     <img src={emotion} className="emotion--img" alt="Face with emotion to mimic"/>
        //     <Button loc={{position: 'absolute', top: '80%', left: '43%', width: '15%', height: '8%', color: '#F8A365'}}
        //             color="#FEE8AA">Take a picture</Button>
        //     <Link to="/FinishedGame"><Button loc={{position: 'absolute', top: '80%', left: '75%', width: '10%', height: '8%', color: '#F8A365'}}
        //                                        color="#FEE8AA">Finish</Button></Link>
        //     <h1 className="counter--text--mfp">1/5</h1>
        // </div>
    );
}

export default MimicFromPicture;