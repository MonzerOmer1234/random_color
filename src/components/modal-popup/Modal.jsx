import {motion} from 'framer-motion'

export default function Modal({ id, header, body, footer , onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <motion.span whileHover={{color : 'red'}} onClick={onClose} className="close-modal-icon">&times;</motion.span>
          <h1>{header ? header : "Header"}</h1>
        </div>
        <div className="body">
          {body ? body : <div>This is our Modal Body</div>}
        </div>
        <div className="footer">{footer ? footer : "Footer"}</div>
      </div>
    </div>
  );
}
