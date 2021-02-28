import { useEffect, useState } from 'react'

const randomColor = () => {
    const firstParam = Math.floor(Math.random() * 256)
    const secondParam = Math.floor(Math.random() * 256)
    const lastParam = Math.floor(Math.random() * 256)
    
    return `rgb(${firstParam}, ${secondParam}, ${lastParam})`
}

const useMagicColor = () => {
    const [color, setColor] = useState('gray')

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor()

            setColor(newColor)
        }, 1000)

        return () => {
            clearInterval(colorInterval)
        }
    }, [])

    return color
}

export default useMagicColor