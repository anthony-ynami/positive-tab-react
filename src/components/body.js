
import React, { useState, useEffect } from 'react'
import img from './calm.png'

// const express = require("express");
// const app = express();

//request api 



const Body = () => {

    const colorChange = () => {
        let hue = 360 - Math.floor(Math.random() * 360); //gen hue between 0 and 360
        let saturation = 100 - Math.floor(Math.random() * 80); //full saturation
        let lightness = Math.floor(Math.random() * 75); //half lightness
        //putting it all together
        let hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        document.querySelector('#body').style.backgroundColor = hsl;

    }

    useEffect(() => {
        colorChange();
    })


    const [quote, setQuote] = useState(genQuote)

    function genQuote() {
        fetch('https://dulce-affirmations-api.herokuapp.com/affirmation')
            .then(response => {
                return response.text()
            }).then(data => {
                let content = JSON.parse(data)
                var affirm = content[0].phrase;
                console.log(affirm)
                document.querySelector('#quote').innerText = affirm
            })
    }


    const refreshQuote = () => setQuote(genQuote);

    return (
        <div className="container">
            <h1> You Matter </h1>
            <img id="smiley" src={img} alt="smiley" />
            <h3>Please remind yourself</h3>
            <div className="quote-container">
                <p id="quote">{quote}</p>
            </div>
            <div className="button-wrapper">
                <button id="gen" onClick={refreshQuote}>More Positivity</button>
                <button id="color-change" onClick={colorChange}>Change Background</button>
            </div>
        </div>
    )
}


export default Body;