import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function TextForm(props) {

    // Convert to Uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    // Convert to Lowercase
    const handleLoClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    // Remove punctuations
    const handleRemoveClick = () => {
        let puncs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        let result = text.replace(puncs, '');
        let newText = result;
        setText(newText)
    }

    // Remove New line
    const handleNewLineRmClick = () => {
        let someText = text.replace(/(\n|\r)/gm, "");
        let newText = someText;
        setText(newText)
    }

    // Remove Numbers
    const handleNumRmClick = () => {
        let num = text.replace(/[0-9]/g, "");
        let newText = num;
        setText(newText)
    }

    // Remove Extra Spaces
    const handleRmSpcaesClick = () => {
        let space = text.replace(/\s\s/g, "");
        let newText = space;
        setText(newText)
    }

    // Clear Text
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    // Copy to Clipboard
    const handleCopyClick = ({ alert }) => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }


    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    /* text = "new text"; // wrong way to change text */
    /* setText("new text"); // correct way to change text */

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" type="text" value={text} onChange={handleOnChange} id="myBox" placeholder="Type some text here" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveClick}>Remove Punctuations </button>
                <button className="btn btn-primary mx-1" onClick={handleNewLineRmClick}>Remove New Line </button>
                <button className="btn btn-primary mx-1" onClick={handleNumRmClick}>Remove Numbers </button>
                <button className="btn btn-primary mx-1" onClick={handleRmSpcaesClick}>Remove Extra Spaces </button>
                <div>
                    <button className="btn btn-outline-danger mx-1" onClick={handleClearClick}>Clear Text </button>

                    <CopyToClipboard text={text} onClick={handleCopyClick}>
                        <span>
                            <button className="btn btn-outline-success mx-1 my-2" onClick={handleCopyClick}>Copy to Clipboard </button>
                            <span>{isCopied ? <b>Copied!</b> : false}
                            </span>
                        </span>
                    </CopyToClipboard>
                </div>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
