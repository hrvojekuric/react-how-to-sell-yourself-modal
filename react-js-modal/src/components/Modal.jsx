import React from 'react'
import picture from "../assets/IMG_20221229_162354-min.jpg"

const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className='modalContainer'>
            <img src={picture} alt="" />
            <div className='modalRight'>
                <p onClick={onClose} className='closeBtn'>X</p>
                <div className='content'>
                    <p>Do you want this developer</p>
                    <h1>(very cheap)</h1>
                    <p>for your  team?</p>
                </div>
                <div className='btnContainer'>
                    <button className='btnPrimary'>
                        <span className="bold">YES</span>
                    </button>
                    <button className='btnOutline'>
                        <span className="bold">NO</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
