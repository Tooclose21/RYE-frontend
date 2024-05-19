
import '../../styles.css';
import OrangeNavbar from "../../navbars/OrangeNavbar";
import React from "react";
import Button from "../../components/Buttons";
import blueGhost from "../../images/blueGhost.png";

function CharacterCustomization() {
    return (
        <div style={{backgroundColor: '#F2EFE3'}}>
            <OrangeNavbar />
            <img src={blueGhost} className="bghost--img--customize" alt="Blue ghost"/>
            <Button loc={{position: 'absolute', top: '75%', left: '50%'}} color="#88CAFC">Ok</Button>
            <Button loc={{position: 'absolute', top: '75%', left: '70%'}} color="#88CAFC">Cancel</Button>
        </div>
    );
}

export default CharacterCustomization;
