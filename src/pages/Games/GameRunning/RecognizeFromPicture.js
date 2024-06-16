import '../../../styles.css';
import Navbar from "../../../navbars/Navbar";
import React from "react";
import Button from "../../../components/Buttons";
import emotion from "../../../images/emotion.png";
import OrangeNavbar from "../../../navbars/OrangeNavbar";
import {useLocation, useNavigate} from "react-router-dom";
import {useApi} from "../../../api/ApiProvider";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function RecognizeFromPicture() {
    const location = useLocation();
    const navigate = useNavigate();
    const api = useApi();

    // get image url to be displayed
    const questData = location.state.images[0];
    const results = location.state.results;
    let answers = location.state.answ[0];

    const randomAnswer = []
    const correctAnswer = getRandomInt(4);

    for (let i = 0; i < 4; i++) {
        if (i === correctAnswer) {
            randomAnswer.push(questData.emotion)
            continue
        }
        randomAnswer.push(answers[0])
        answers.splice(0, 1)
        console.log(answers)
    }


    // remove first image (as it was used)
    const [, ...images] = location.state.images
    const [, ...answ] = location.state.answ

    const handleAnswer = (answer) => {
        results.push(questData.emotion === answer ? 1 : 0)

        if (location.state.infty) {

            api.fetchPicturesAndAnswers(1).then(response => {
                if (!response.success) {
                    console.log(response);
                    return;
                }
                let destination = questData.emotion === answer ? "/MimicFromPicture" : "/RecognizeFromPicture"
                navigate(destination, {
                    state: {
                        quests: 1, images: response.data.pic, answ: response.data.answ, results: results, infty: true, mode: "RECOGNIZE_FROM_PICTURE"
                    }
                })

            })
            return
        }
        console.log(results)
        let destination = images.length === 0 ? "/FinishedGame" : "/RecognizeFromPicture"
        navigate(destination, {
                    state: {
                        images: images, answ: answ, results: results, mode: "RECOGNIZE_FROM_PICTURE"
                    }
                });

    }

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F2EFE3'}}>
            <OrangeNavbar/>
            <h1 className="rfp--headline">Recognize from picture</h1>
            <img src={questData.url} className="emotion--img--recognize" alt="Face with emotion to mimic"/>
            <h2 className={"name--emotion--rfp"}>Name emotion:</h2>
            <Button loc={{position: 'absolute', top: '75%', left: '33%', width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA" onClick={() => handleAnswer(randomAnswer[0])}>{randomAnswer[0]}</Button>
            <Button loc={{position: 'absolute', top: '85%', left: '33%', width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA" onClick={() => handleAnswer(randomAnswer[1])}>{randomAnswer[1]}</Button>
            <Button loc={{position: 'absolute', top: '75%', left: '52%', width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA" onClick={() => handleAnswer(randomAnswer[2])}>{randomAnswer[2]}</Button>
            <Button loc={{position: 'absolute', top: '85%', left: '52%', width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA" onClick={() => handleAnswer(randomAnswer[3])}>{randomAnswer[3]}</Button>
            <h1 className="counter--text--rfp">1/5</h1>
        </div>
    );
}

export default RecognizeFromPicture;
