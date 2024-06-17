import React from 'react'

const Modal = ( {id ,header, body, footer, onClose}) => {
    


   
    

  return (
    <div id={id || ''} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>

        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p> This is our Modal body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? footer : <h2> This is footer component</h2>}
        </div>
      </div>
    </div>
  );
}

export default Modal;