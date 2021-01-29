import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Hello, {currentUser.username}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Login</Link>
        </div>
    );

    return (
        <div className="grid-3Ykf_K heroBackground-3m0TRU">
            <div aria-hidden="true" className="heroImageContainer-36P5yd">
                <img alt="firstElement.png" className="backgroundImages-2rUazg stripe1-3BXB_U" src={window.firstElement}/>
                <img alt="secondElement.png" className="backgroundImages-2rUazg stripe2-8Dj-R4" src={window.secondElement}></img>
                <img alt="thirdElement.png" className="backgroundImages-2rUazg stripe3-2NZ4zi" src={window.thirdElement}></img>
                <img alt="fourthElement.png" className="backgroundImages-2rUazg stripeCute-2yWHX7" src={window.fourthElement}></img>
                <img alt="fifthElement.png" className="backgroundImages-2rUazg island2-2Nb-g5" src={window.fifthElement}></img>
                <img alt="sixthElement.png" className="backgroundImages-2rUazg island1-3TIhuh" src={window.sixthElement}></img>
                <img alt="seventhElement.png" className="backgroundImages-2rUazg cloud4-2BRRU2" src={window.seventhElement}></img>
                <img alt="eigthElement.png" className="backgroundImages-2rUazg cloud5-34_2QW" src={window.eigthElement}></img>
                <img alt="ninthElement.png" className="backgroundImages-2rUazg cloud2Second-Gbh2WA" src={window.ninthElement}></img>
                <img alt="eleventhElement.png" className="backgroundImages-2rUazg cloud1-1oi7Jg" src={window.eleventhElement}></img>
                <img alt="twelthElement png" className="backgroundImages-2rUazg cloud2-2ngq2N" src={window.twelthElement}></img>
                <img alt="thirteenthElement.png" className="backgroundImages-2rUazg cloud3-3IZheo" src={window.thirteenthElement}></img>
                <img alt="fourteenthElement.png" className="backgroundImages-2rUazg cloud6-j2xFjt" src={window.fourteenthElement}></img>
                <img alt="fifteenthElement.png" className="backgroundImages-2rUazg cloud7-29FdT1" src={window.fifteenthElement}></img>
                <img alt="sixteenthElement.png" className="backgroundImages-2rUazg cloud9-16dNGB" src={window.sixteenthElement}></img>
                <img alt="seventeenthElement.png" className="backgroundImages-2rUazg diamond-2IoVJv" src={window.seventeenthElement}></img>
                <img alt="eighteenthElement.png" className="backgroundImages-2rUazg ship-2AEkqt" src={window.eighteenthElement}></img>
                <img alt="nineteenthElement.png" className="backgroundImages-2rUazg cloudCute-s1ak5z" src={window.nineteenthElement}></img>
                <img alt="twentiethElement.png" className="backgroundImages-2rUazg cloud8-3V2ZT2" src={window.twentiethElement}></img>
                <img alt="twentyfirstElement.png" className="backgroundImages-2rUazg cloud10-3dZ5jP" src={window.twentyfirstElement}></img>
                <img alt="twentysecondElement.png" className="backgroundBuildings-1dpPv_" src={window.twentysecondElement}></img>
                <img alt="twentythirdElement.png" className="foregroundLeft-oYeoOv" src={window.twentythirdElement}></img>
                <img alt="twentyfourthElement.png" className="foregroundRight-31UKnq" src={window.twentyfourthElement}></img>
            </div>
        </div>
    );
};