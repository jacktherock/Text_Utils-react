import React from 'react'

export default function About(props) {

    return (
        <div className="container my-3">
            <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'green' }} >{props.heading}</h1>
            <div className="card" >
                <div className="card-body" >
                    <h5 className="card-title" >Abhijeet Sonawane</h5>
                    <p className="card-text" > <li>Computer Science Student</li></p>
                    <p className="card-text" ><li>Text Utilzation app using React JavaScript.</li></p>
                    <a href="https://github.com/jacktherock" className="btn btn-dark">GitHub</a>
                </div>
            </div>

        </div>

    )
}