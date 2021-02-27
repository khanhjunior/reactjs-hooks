import React, { useState } from 'react'
import './style.scss'

const getColorFromRandom = () => {
    const firstParam = Math.floor(Math.random() * 256)
    const secondParam = Math.floor(Math.random() * 256)
    const lastParam = Math.floor(Math.random() * 256)
    
    return `rgb(${firstParam}, ${secondParam}, ${lastParam})`
}

const ColorBox = () => {
    const initColor = localStorage.getItem('color-box')
    const [color, setColor] = useState(initColor || 'gray')

    const handleColorBoxClick = () => {
        const newColor = getColorFromRandom()

        setColor(newColor)

        localStorage.setItem('color-box', newColor)
        console.log(localStorage.getItem('color-box'))
    }

    return (
        <div className="colors-box">
            <h1>React Hooks - Random Color-Box</h1>
            <div style={{backgroundColor: color}} className="color-box-result"></div>
            <button onClick={handleColorBoxClick} type="button">Random</button>
        </div>
    )
}

export default ColorBox