import '../../../styles.css';
import Navbar from "../../../navbars/Navbar";
import React from "react";
import Button from "../../../components/Buttons";
import emotion from "../../../images/emotion.png";

function DailyChallenge() {
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F2EFE3'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className="dailyChallenge--text1">Daily challenge</h1>
            <h2 className={"dailyChallenge--text2"}>Name and mimic emotion</h2>
            <img src={emotion} className="emotion--img--recognize" alt="Face with emotion to mimic"/>
            <h2 className={"name--emotion--rfp"}>Name emotion:</h2>
            <Button loc={{position: 'absolute', top: '75%', left: '33%',
                width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA">Happy</Button>
            <Button loc={{position: 'absolute', top: '85%', left: '33%',
                width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA">Sad</Button>
            <Button loc={{position: 'absolute', top: '75%', left: '52%',
                width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA">Anxious</Button>
            <Button loc={{position: 'absolute', top: '85%', left: '52%',
                width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA">Angry</Button>
        </div>
    );
}

export default DailyChallenge;
