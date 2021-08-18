import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        })
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'

            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }


    return (
        <div className="container my-3" style={myStyle}>
            <h1 className="my-3" >About Us</h1>
            <div className="card" style={myStyle}>
                <div className="card-body">
                    <h5 className="card-title">Abhijeet Sonawane</h5>
                    <p className="card-text"> <li>Computer Science Student</li></p>
                    <p className="card-text"><li>Text Utilzation app using React JavaScript.</li></p>
                    <a href="https://github.com/jacktherock" className="btn btn-primary">GitHub</a>
                </div>
            </div>
            <button onClick={toggleStyle} type="button" className="btn btn-dark my-3">{btnText}</button>
        </div>

    )
}