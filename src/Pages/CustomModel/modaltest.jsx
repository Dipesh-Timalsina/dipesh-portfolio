import React from 'react';
import { useState } from 'react';
import Modal from './modal';
import "./modal.css"
import { Navbar } from '../../components/Navbar/Navbar';
import { Contact } from '../../components/Contact/Contact';


const ModalTest = () => {
    const [showModalPopup, setshowModalPopup] = useState(false);
    
    function handleToogleModelPopup() {
        setshowModalPopup(!showModalPopup)
    }
    function onClose() {
        setshowModalPopup(false)
    }

    return (
      <>
        <Navbar />
        <div className="layout">
          <div className="topsection">
            <div className="btnsection">
              <button className="modalbtn" onClick={handleToogleModelPopup}>
                Open Modal popup
              </button>
              {showModalPopup && (
                <Modal onClose={onClose} body={<div> Customized Body</div>} />
              )}
            </div>
          </div>
            </div>
            <Contact/>
      </>
    );
}

export default ModalTest;