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
          <div className="learnings">
            <h1>Learnings</h1>
            <ol>
              <li>
                Utilized the useState hook to manage the visibility of the modal
                popup (showModalPopup).
              </li>
              <li>
                Toggle Function: Implemented the handleToogleModelPopup function
                to toggle the visibility of the modal popup.
              </li>
              <li>
                Implemented the onClose function to close the modal popup,
                demonstrating how to update state based on user interactions.
              </li>
              <li>
                Conditional Rendering: Applied conditional rendering to display
                the modal popup only when showModalPopup is true.
              </li>
              <li>
                Component Composition: Showed how to compose components by
                integrating the Modal component within the ModalTest component.
                Passed props to the Modal component, including the onClose
                callback and custom body content.
              </li>
              <li>
                /Utilized the useState hook to manage the visibility of the
                modal popup (showModalPopup).
              </li>
            </ol>
          </div>
        </div>
      </>
    );
}

export default ModalTest;