import React from 'react'
import useMagicColor from '../Hooks/useMagicColor'

const MagicColorBox = () => {
    const color = useMagicColor()

    return (
        <div className="colors-box">
            <h1>React Hooks - useMagicColor Custom hooks</h1>
            <div style={{backgroundColor: color}} className="color-box-result"></div>
        </div>
    )
}

export default MagicColorBox