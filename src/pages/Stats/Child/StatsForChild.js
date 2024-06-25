import React, {useState} from "react";
import LightBlueNavbar from "../../../navbars/LightBlueNavbar.js";
import blueGhost from "../../../images/blueGhost.png";
import './StatsForChild.css';
import ComboBox from "../../../components/ComboBox";
import Rectangle from "../../../components/Rectangle";
import Plot from "react-plotly.js"
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import Button from "../../../components/Button";


function StatsForChild() {
    const location = useLocation();
    const navigate = useNavigate();

    const stats = location.state.stats
    const modes = ["MIMIC_FROM_NAME",
        "MIMIC_FROM_PICTURE",
        "RECOGNIZE_FROM_PICTURE"]

    const [selectedValue, setSelectedValue] = useState(modes[0]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const dict = {
        '2024-06-06':
            6.5,
        '2024-06-07':
            4,
        '2024-06-08':
            2,
        '2024-06-09':
            5.333333333333333,
        '2024-06-12':
            5.666666666666667,
    }
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#D2EBFF'}}>
            <LightBlueNavbar/>
            <div className={"statistics--child--message"}>
                <h1 className={"child--statistics--text"}>
                    <span style={{fontSize: "2vw"}}>Welcome to Statistics!</span> <br/>
                    Here you can view your progress and learn everything about the process!
                </h1>
            </div>
            <div className={"child--general--message"}
            >
                <h1 className={"child--general--statistics--text"}>
                    General
                </h1>
            </div>
            <Plot className="stats-child-plot"
                  data={[{
                      x: Object.keys(stats[selectedValue]),
                      y: Object.values(stats[selectedValue]),
                      type: "bar",
                      mode: "markers"
                  }]}
                  layout={{
                      title: "General statistics",
                      font: {
                          size: 24,
                      },
                      xaxis: {title: "Date"},
                      yaxis: {title: "Points"}
                  }}
                  config={{displayModeBar: false, fontSize: '16px'}}></Plot>
            <ComboBox className="comboBox-stats" options={modes} value={selectedValue} handleChange={handleChange}
                      style={{position: 'absolute', top: "88%", left: "65%"}}/>
            <Button loc={{position: 'absolute', top: '85%', left: '82%', width: '10%', height: '7%'}}
                    color="#88CAFC"  onClick={() => navigate('/child-welcome') }>
                Back
            </Button>


            {/*<Rectangle className="child--rectangle1"/>*/}
            {/*<h1 className={"child--period--statistics--text"}>Period</h1>*/}
            {/*<Rectangle className="child--rectangle3"/>*/}
            {/*<h1 className={"child--score--statistics--text"}>Score</h1>*/}
            {/*<Rectangle className="child--rectangle2"/>*/}
            {/*<h1 className={"child--practice--statistics--text"}>Practice time</h1>*/}
            <img src={blueGhost} className="child--ghost--statistics--img" alt="Blue ghost"/>
        </div>
    );
}

export default StatsForChild;