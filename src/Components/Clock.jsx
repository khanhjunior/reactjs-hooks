import React from 'react'
import { useClock } from '../Hooks/useClock'

const Clock = () => {
    const { timeString } = useClock()

    return (
        <div className="clock-container">
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    )
}

export default Clock