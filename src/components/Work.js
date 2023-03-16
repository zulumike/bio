import React, { useState } from "react";

function Work() {

    let index = 1;
    const [imageName, setImageName] = useState('image1.jpg');
    const nrOfImgs = 3;
    
    const handlePrevious = () => {
        index = index - 1;
        setImageName('../img/work/image' + index.toString() + '.jpg');
    };
    
    const handleNext = () => {
        index = index + 1;
        setImageName('../img/work/image' + index.toString() + '.jpg');
    };
    
    return (
        <div>
            <h1>Arbeidsplasser</h1>
            <div>
                <button onClick={handlePrevious}>Forrige</button>
                <img src={imageName}></img>
                <button onClick={handleNext}>Neste</button>
                <h2>{imageName}</h2>
            </div>
        </div>
    )
};

export default Work;