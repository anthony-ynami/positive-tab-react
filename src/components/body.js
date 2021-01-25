import React, { useState } from 'react'
import img from './calm.png'

const Body = () => {

    const [quote, setQuote] = useState(genQuote());


    function genQuote() {

        var quotes = [
            'Every day and in every way I am getting better and better',
            'I am abundantly joyful and happy',
            'I am so grateful for my life',
            'I find beauty and joy in ordinary things',
            'My life is a joy. I relax easily and open myself up to delightful surprises',
            'My life is a joy filled with love, fun and friendship',
            'I choose love, joy and freedom, open my heart and allow wonderful things to flow into my life',
            'I am free, and always have been. Experiences that made me feel like a victim were only experiences that appeared and disappeared in the arena of consciousness that I am',
        ];
        var randNum = Math.floor(Math.random() * 8);
        var newQuote = quotes[randNum];
        return newQuote
    }

    function refreshQuote(e) {
        setQuote(genQuote)
    }



    return (
        <div className="container">
            <h1> You Matter </h1>
            <img id="smiley" src={img} alt="smiley" />
            <h3>Please remind yourself</h3>
            <p id="quote">{quote}</p>
            <button id="gen" onClick={refreshQuote}>More Positivity</button>
        </div>
    )
}


export default Body;