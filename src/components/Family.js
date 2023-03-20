import React, { useState, useRef } from "react";
import '../styles/default.css';

function Family() {
    const [index, setIndex] = useState(0);
    const [displayPrev, setDisplayPrev] = useState('none');
    const [displayNext, setDisplayNext] = useState('block');
    
    const inputRef = useRef();

    function importAll(r) {
        let images = {};
        // eslint-disable-next-line
        r.keys().map(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../img/family', false, /\.(png|PNG|jpe?g|JPE?G|svg|SVG)$/));
    
    const imageArray = Object.entries(images);
    const nrOfImgs = imageArray.length - 1;
    const [imageName, setImageName] = useState(imageArray[index][1]);
  
    function handlePrev() {
        inputRef.current.focus();
        const newIndex = index -1;
        if (newIndex === 0) {
            setDisplayPrev('none');
        }
        setIndex(newIndex);
        setImageName(imageArray[newIndex][1]);
        setDisplayNext('block');
    };

    function handleNext() {
        inputRef.current.focus();
        let newIndex = index + 1;
        if (newIndex === nrOfImgs) {
            setDisplayNext('none');
        }
        setIndex(newIndex);
        setImageName(imageArray[newIndex][1]);
        setDisplayPrev('block');
    };

    function arrowKeyPress(event) {
        if (event.keyCode === 37 && index > 0) {
            handlePrev();
        };
        if (event.keyCode === 39 && index < nrOfImgs) {
            handleNext();
        };
    };


    return (
        <div className="toppdivs">
            <input onKeyDown={arrowKeyPress} ref={inputRef} autoFocus />
            <div className="slideshow-container">
                <div className="myslides fade">
                    <img src={imageName} alt=''></img>
                </div>
                <button className="prevbutton" style={{display:displayPrev}} onClick={handlePrev}>&#10094;</button>
                <button className="nextbutton" style={{display:displayNext}} onClick={handleNext}>&#10095;</button>
            </div>
        </div>
    )
};

export default Family;