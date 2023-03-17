import React, { useState } from "react";
import '../styles/default.css';

function Work() {

    const [index, setIndex] = useState(1);
    const [displayPrev, setDisplayPrev] = useState('none');
    const [displayNext, setDisplayNext] = useState('block');
    
    function importAll(r) {
        let images = {};
        r.keys().map(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../img/work', false, /\.(png|jpe?g|svg)$/));
    
    const imageArray = Object.entries(images);
    const nrOfImgs = imageArray.length - 1;

    const [imageName, setImageName] = useState(imageArray[0][1]);
  
    const handlePrevious = () => {
        console.log(index);
        setImageName(imageArray[index][1]);
        if (index < 1) {
            setDisplayPrev('none');
            setIndex(index + 1);
        }
        else {
            setIndex(index - 1);
            setDisplayNext('block');
        }
    };
    
    const handleNext = () => {
        console.log(index);
        setImageName(imageArray[index][1]);
        if (index === nrOfImgs) {
            setDisplayNext('none');
            setIndex(index - 1);
        }
        else {
            setIndex(index + 1);
            setDisplayPrev('block');
        }
    };
    
    return (
        <div>
            <h1>Arbeidsplasser</h1>
            <div>
                <button style={{display:displayPrev}} onClick={handlePrevious}>Forrige</button>
                <img src={imageName}></img>
                <button style={{display:displayNext}} onClick={handleNext}>Neste</button>
            </div>
        </div>
    )
};

export default Work;