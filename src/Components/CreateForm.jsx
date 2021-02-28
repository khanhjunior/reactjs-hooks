import React, { useState } from 'react'

const CreateForm = (props) => {
    const { onSubmit } = props
    const [value, setValue] = useState('')

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (!onSubmit) return

        onSubmit(value)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={value} onChange={handleInputChange} />
            <input className="btn btn-submit" type="submit" value="Create"/>
        </form>
    )
}

export default CreateForm