import React from 'react'
import {FaCheck} from 'react-icons/fa' 

const Message = ({success, error, classname}) => {
  return (
    <div className={classname}>
        <p style={{color: success ? "lightgreen" : "rgb(255, 73, 73)"}}>{success ? success : error}</p>
        <FaCheck className="checkMark" style={{display: success ? "initial" : "none"}}/>
        <span className='crossMark' style={{display: error ? "initial" : "none"}}>&#10006;</span>
    </div>
  )
}

export default Message