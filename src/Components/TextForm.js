import React, { useState } from 'react'

export default function TextForm(props) {
    const countWords = (text) => {
         const arr = text.split(' ');

  return arr.filter(word => word !== '').length;
        
    }
    const handleUpClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase();

        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLowClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toLowerCase();

        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleClearClick = () => {
        // console.log("uppercase was clicked")
        let newText = '';

        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    const handleExtraSpace = () => {
        // console.log("uppercase was clicked")
        let newText = text.replace(/\s+/g, ' ').trim();

        setText(newText)
        props.showAlert("Extra space removed!","success")
    }
    
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
      <>
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
  
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra spaces</button>
          </div>
          <div className="container my-3">
              <h2>your text summary</h2>
              <p>{countWords(text)} words  and {text.length} characters</p>
              <p>{0.008 * text.split(" ").length} minutes read </p>
              <h2>Preview</h2>
              <p>{text.length>0?text: "enter something in textbox to preview it here"}</p>
          </div>
      </>
  )
}
