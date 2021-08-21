import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    /* text = "new text"; // wrong way to change text */
    /* setText("new text"); // correct way to change text */

    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    // Convert to Uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    // Convert to Lowercase
    const handleLoClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    // Remove punctuations
    const handleRemoveClick = () => {
        let puncs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        let result = text.replace(puncs, '');
        let newText = result;
        setText(newText)
        props.showAlert("Removed Punctuations", "success")
    }

    // Remove New line
    const handleNewLineRmClick = () => {
        let someText = text.replace(/(\n|\r)/gm, "");
        let newText = someText;
        setText(newText)
        props.showAlert("Removed New Lines", "success")
    }

    // Remove Numbers
    const handleNumRmClick = () => {
        let num = text.replace(/[0-9]/g, "");
        let newText = num;
        setText(newText)
        props.showAlert("Removed Numbers", "success")
    }

    // Remove Extra Spaces
    const handleRmSpcaesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success")
    }

    // Clear Text
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }

    // Copy Text
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard", "success")
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Type some text here" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveClick}>Remove Punctuations </button>
                <button className="btn btn-primary mx-1" onClick={handleNewLineRmClick}>Remove New Line </button>
                <button className="btn btn-primary mx-1" onClick={handleNumRmClick}>Remove Numbers </button>
                <button className="btn btn-primary mx-1" onClick={handleRmSpcaesClick}>Remove Extra Spaces </button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text </button>
                <button className="btn btn-success mx-1 my-2" onClick={handleCopy}>Copy Text </button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>

        </>
    )
}
