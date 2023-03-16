import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";
import Hobby from "./Hobby";
import Work from "./Work";
import Card from "./Card";

import '../styles/default.css';

function Start() {
    Modal.setAppElement('#root')
    const [modalToShow, setModalToShow] = useState(<Card />);
    const [modalOpen, setModalOpen] = useState(false);
    let cnt = 1;

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       if (cnt === 1) {
    //         setModalToShow(<Work />);
    //         cnt = 2;
    //       }
    //       else {
    //         setModalToShow(<Hobby />);
    //         cnt = 1;
    //       }
    //       console.log(cnt);
    //     }, 2000);
    //     return () => clearInterval(interval);
    //   }, []);

    function closeModal() {
        setModalOpen(false);
    };

    function openModal() {
        setModalOpen(true);
    };

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={openModal}>Åpne</button>
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
        </div>
    )
}

export default Start;