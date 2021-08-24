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
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard", "success")
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-3">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} placeholder="Type some text here" id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveClick}>Remove Punctuations </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleNewLineRmClick}>Remove New Line </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleNumRmClick}>Remove Numbers </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRmSpcaesClick}>Remove Extra Spaces </button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text </button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-2" onClick={handleCopy}>Copy Text </button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p> <b>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
            </div>

        </>
    )
}
