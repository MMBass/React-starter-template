import { useState } from "react";

function Modal(props) {

  let [openModal, setOpenModal] = useState(false);

  function handleChange(code) {
  }

  function handleSubmit() {
    if (1) {
      setOpenModal(false);
    }
  }

  return (
    <div className="modalcontainer">
      <div className="modal">
        <div className="close" onClick={() => setOpenModal(false)}><span >&#43;</span></div>
        <h2>Select Format</h2>
        <h3><i>{props.title}</i></h3>
        <div className="content">
           modal content
        </div>
        <div className="buttons">
          <span onClick={() => setOpenModal(false)}>Cancel</span>
          <span onClick={() => handleSubmit()}>Download</span>
        </div>
      </div>
    </div>

  );
}

export default Modal;
