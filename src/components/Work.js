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
        setIndex(index - 1);
        console.log(index);
        if (index < 1) {
            setImageName(imageArray[index][1]);
            setDisplayPrev('none');
            setIndex(index + 1);
        }
        else {
            setImageName(imageArray[index][1]);
            setDisplayNext('block');
        }
    };
    
    const handleNext = () => {
        setIndex(index + 1);
        console.log(index);
        if (index === nrOfImgs) {
            setImageName(imageArray[index][1]);
            setDisplayNext('none');
            setIndex(index -1);
        }
        else {
            setImageName(imageArray[index][1]);
            setDisplayPrev('block');
        }
    };
    
    return (
        <div>
            <div>
                <h1>Arbeidsplasser</h1>
            </div>
            <div className="slideshow-container">
                <div className="myslides fade">
                    <img src={imageName}></img>
                </div>
                <button className="prevbutton" style={{display:displayPrev}} onClick={handlePrevious}>&#10094;</button>
                <button className="nextbutton" style={{display:displayNext}} onClick={handleNext}>&#10095;</button>
            </div>
        </div>
    )
};

export default Work;