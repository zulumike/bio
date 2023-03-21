import React, { useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";
import Hobby from "./Hobby";
import Work from "./Work";
import Family from "./Family";
import Results from "./Results";

import '../styles/default.css';
import Questions from "./Questions";

function Start() {
    Modal.setAppElement('#root')
    const [modalToShow, setModalToShow] = useState(<Work />);
    const [modalOpen, setModalOpen] = useState(false);

    let participantName = localStorage.getItem("participantName");

    if (!participantName) {
        participantName = prompt('Skriv inn navnet ditt');
        if (participantName) {
            localStorage.setItem("participantName", participantName);
        }
        window.location.reload(false);
    };

    function closeModal() {
        setModalOpen(false);
    };

    function openModal() {
        setModalOpen(true);
    };

    function openThemeWork() {
        setModalToShow(<Work />)
        openModal();
    }

    function openThemeHobby() {
        setModalToShow(<Hobby />)
        openModal();
    }

    function openThemeFamily() {
        setModalToShow(<Family />)
        openModal();
    }

    function openResult() {
        setModalToShow(<Results />)
        openModal();
    }

    function resetGame() {
        localStorage.clear();
        window.location.reload(false);
    }

    if (participantName === 'ItteAnsvarlig') {
        return (
            <div>
                <div className="themeboxcontainer">
                    <div className="themeboxes" onClick={openThemeFamily}>
                        <p>Familie og oppvekst</p>
                    </div>
                    <div className="themeboxes" onClick={openThemeWork}>
                        <p>Utdanning og arbeidserfaring</p>
                    </div>
                    <div className="themeboxes" onClick={openThemeHobby}>
                        <p>Fritid og hobby</p>
                    </div>
                </div>
                <ReactModal 
                    className='modal'
                    ovarlayClassName='modaloverlay'
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}
                    >
                    {modalToShow}
                </ReactModal>
                <button onClick={openResult}>Resultater</button>
                <button onClick={resetGame}>Reset</button>
            </div>
        )
    };
    return (
        <Questions />
    )
}

export default Start;