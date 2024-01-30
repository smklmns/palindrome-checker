import React from 'react'
import {useState} from 'react'
import Message from './Message'
import Description from './Description'

function App() {
  const [text, setText] = useState('')
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const palindromeChecker = (e) => {
    e.preventDefault()
    let reg = /[a-z0-9]/
    let backwardArr = []
    let arr = text.
    trim().
    toLowerCase().
    split("").
    filter(item => reg.test(item))

    arr.forEach(item => {
      backwardArr.unshift(item)
    })
    let checker = true
    arr.forEach((item, i) => {
      if(item !== backwardArr[i]) {
        checker = false
      }
    })
    
    checker ? setSuccess(`This is a palindrome`) : setSuccess(null)
    !checker ? setError("This isn't a palindrome") : setError(null)
  }

  return (
  <>
    <form onSubmit={palindromeChecker} className="App">
      <h1>Enter A Palindrome(e.g. eye)</h1>
      <input 
        type="text"
        required 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Message success={success} error={error}/>
      <button className="checkButton" type="submit">Check</button>
      <Description />
    </form>
    
  </>
  );
}

export default App;
