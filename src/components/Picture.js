import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import Button from "./Buttons";

const Picture = ({ onCapture, onHideCamera, onRetake }) => {
    const webcamRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [imageCaptured, setImageCaptured] = useState(false);
    const [capturedImageSrc, setCapturedImageSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        onCapture(imageSrc);
        setImageCaptured(true);
        setCapturedImageSrc(imageSrc);
    }, [onCapture]);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const handleHideCamera = () => {
        onHideCamera();
    };

    const handleRetake = () => {
        setImageCaptured(false);
        setCapturedImageSrc(null);
        onRetake();
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F2EFE3' }}>
            {imageCaptured ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                    <img src={capturedImageSrc} alt="Captured" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    {/*<Button onClick={handleRetake} loc={{ width: '15%', height: '8%', color: '#F8A365' }} color="#FEE8AA">*/}
                    {/*    Retake picture*/}
                    {/*</Button>*/}
                </div>
            ) : (
                <>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        style={{ width: isFullScreen ? '100%' : 'auto', height: isFullScreen ? '100%' : 'auto' }}
                    />
                    <Button onClick={toggleFullScreen} loc={{ position: 'absolute', top: '40%', left: '83%', width: '15%', height: '8%', color: '#F8A365', zIndex: 9999 }} color="#FEE8AA">
                        {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
                    </Button>
                    <Button onClick={capture} loc={{ position: 'absolute', top: '20%', left: '83%', width: '15%', height: '8%', color: '#F8A365', zIndex: 9999 }} color="#FEE8AA">
                        Capture
                    </Button>
                    <Button onClick={handleHideCamera} loc={{ position: 'absolute', top: '60%', left: '83%', width: '15%', height: '8%', color: '#F8A365', zIndex: 9999 }} color="#FEE8AA">
                        Hide Camera
                    </Button>
                </>
            )}
        </div>
    );
};

export default Picture;