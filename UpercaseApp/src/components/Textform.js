import React,{useState} from "react";

export default function Textform(props) {
    // Function to convert text to uppercase
    const handeUpClick =()=>{ 
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    // Function to convert text to lowercase
    const handeLowClick =()=>{ 
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    // Function to clear the text
    const handeClear =()=>{ 
        let newtext = '';
        setText(newtext)
    }

    // Function to handle text change in textarea
    const handleOnChange =(event)=>{ 
        console.log('Onchang');
        setText(event.target.value);
    }

    // Function to count the number of sentences in the text
    const countSentences = (text) => { 
      const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
      return sentences.length;
  };

    const [text, setText]=useState('enter text here')
    // setText('new text')
    return (
        <>
        <div>
            <h1>{props.heading} </h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="mybox"
              rows="8"
              ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handeUpClick}>Conver to upercase</button>
          <button className="btn btn-success mx-2" onClick={handeLowClick}>Conver to Lowercase</button>
          <button className="btn btn-danger mx-2" onClick={handeClear}>Clear Text</button>
        </div>

        <div className="container my-3">
          <h1>your text summary</h1>
          <p>{text.split(" ").length} Words and {text.length} characters</p>
          <p>{0.008 * text.split("").length} Minuts read</p>
          <p>{countSentences(text)} Sentences</p>
          <h2>previwe</h2>
          <p>{text}</p>
        </div>
        </>
    );
}