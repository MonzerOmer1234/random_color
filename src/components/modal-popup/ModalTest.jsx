import { useState } from "react";
import Modal from "./Modal";
import './modal.css'

export default function ModalTest() {
  const [showModalPop, setShowModalPop] = useState(false);

  function handleToggleModalPopup(){
    setShowModalPop(!showModalPop);
    
  }
  function onClose(){
    setShowModalPop(false)
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {
        showModalPop && <Modal onClose={onClose} id={Math.random()* 100} body={<div>Customized Body</div>}/>
      }
    </div>
  );
}
