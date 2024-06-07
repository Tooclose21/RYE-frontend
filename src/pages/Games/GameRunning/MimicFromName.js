import '../../../styles.css';
import OrangeNavbar from "../../../navbars/OrangeNavbar";
import React, {useEffect, useState} from "react";
import Button from "../../../components/Buttons";
import Picture from "../../../components/Picture";
import {useLocation, useNavigate} from 'react-router-dom';
import sendImage from "../../../game-handle/PictureHandle"
import fetchPicture from "../../../game-handle/PictureFetch";
import fetchEmotions from "../../../game-handle/FetchEmotions";

function MimicFromName() {
    const location = useLocation();
    const navigate = useNavigate();

    // const searchParams = new URLSearchParams(location.search);
    // const quests = parseInt(searchParams.get('quests')) || 0;
    // const initialClickCount = location.state ? location.state.clickCount : 0;

    const questData = location.state.images[0];
    const results = location.state.results;

    const [, ...images] = location.state.images

    // const [clickCount, setClickCount] = useState(initialClickCount);
    const [imageSrc, setImageSrc] = useState(null);
    const [showCamera, setShowCamera] = useState(false);

    // useEffect(() => {
    //     console.log("Quests:", quests);
    // }, [quests]);

    console.log(questData)

    const handleClick = () => {
        if (!imageSrc) {
            return;
        }

         sendImage(imageSrc, questData).then(rate => {
            results.push(rate.score)

            let destination;
            if (!location.state.infty) {
                destination = images.length === 0 ? "/FinishedGame" : "/MimicFromName"
                navigate(destination, {
                    state: {
                        images: images, results: results, mode: 'MIMIC_FROM_NAME'
                    }
                });
            } else {
                fetchEmotions(1).then(response => {

                    destination = rate.score === 1 ? "/MimicFromName" : "/FinishedGame"
                    navigate(destination, {
                        state: {
                            images: response.data, results: results, infty: location.state.infty
                        }
                    })
                });
            }
        }).catch(err => console.log(err));
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

    const total = location.state.infty ? "\u221e" : images.length + results.length + 1;

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F2EFE3'}}>
            <OrangeNavbar />
            <h1 className="mfm--headline">Mimic from emotion name</h1>
            {imageSrc ? null : <h1 className="emotion--name">{questData}</h1>}
            {showCamera ? (<Picture onCapture={handleCapture} onHideCamera={handleHideCamera}/>) : (<div>
                {imageSrc && (<div style={{textAlign: 'center'}}>
                    <img src={imageSrc} alt="Captured"
                         style={{top: '25%', left: '30%', scale: '0.7', zIndex: '9999'}}/>
                    <br/>
                    <Button onClick={handleRetake} loc={{
                        width: '15%', height: '8%', color: '#F8A365', position: 'absolute', top: '80%', left: '42.5%'
                    }} color="#FEE8AA">Retake picture</Button>
                </div>)}
                {!imageSrc && (<Button onClick={handleShowCamera} loc={{
                    position: 'absolute', top: '80%', left: '43%', width: '15%', height: '8%', color: '#F8A365'
                }} color="#FEE8AA">Take a picture</Button>)}
            </div>)}
            {!showCamera && (<Button onClick={handleClick} loc={{
                position: 'absolute', top: '80%', left: '73%', width: '10%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA">Finish</Button>)}
            <h1 className="counter--text">{results.length + 1}/{total}</h1>
            {/*<p style={{position: "absolute", top: "55%", color: "black"}}>Button clicked {clickCount} times</p>*/}
        </div>);
}

export default MimicFromName;