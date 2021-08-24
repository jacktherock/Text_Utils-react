import React from 'react'

export default function About(props) {

     let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        border: '1px solid',
        borderColor:  props.mode === 'dark' ? 'white' : '#042743',
    }

    

    return (
        <div className="container my-3">
            <h1 className="my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>{props.heading}</h1>
            <div className="card"  >
                <div className="card-body" style={myStyle}>
                    <h5 className="card-title" >Abhijeet Sonawane</h5>
                    <p className="card-text" > <li>Computer Science Student</li></p>
                    <p className="card-text" ><li>Text Utilzation app using React JavaScript.</li></p>
                    
                        <a href="https://github.com/jacktherock" className="btn btn-dark" >GitHub</a>
                    
                </div>
            </div>

        </div>

    )
}