import React from 'react'
import {useState} from 'react'

const Description = () => {
  const [checker, changeChecker] = useState(false)
  const dropdown = () => {
   return checker ? "descriptionBoxOpen": "descriptionBoxClosed"
  }
  return (
    <div  className={dropdown()}>
      <button style={{transitionDuration: "1s"}}
        onClick={() => changeChecker(!checker)}
        className="descriptionButton"
        type="button"
      >
        What is Palindrome
        <span className="arrowDown">&#129083;</span>
        </button>
      <p>
        A palindrome is a word or sentence that's spelled 
        the same way both forward and backward, 
        ignoring punctuation, case, and spacing.
      </p>
    </div>
  )
}

export default Description