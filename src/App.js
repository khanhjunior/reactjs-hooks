import React, { useState } from 'react'
import ColorBox from './Components/ColorBox'
import TodoList from './Components/TodoList'
import Create from './Components/Create'
import './App.scss'

const initCourses = [
    {
        title: 'HTML / CSS',
        coin: '100'
    },
    {
        title: 'Javascript',
        coin: '270'
    },
    {
        title: 'ReactJS',
        coin: '360'
    }
]

const App = () => {
    const [courses, setCourses] = useState(initCourses)

    const handleRemoveClick = (index) => {
        const newCourses = [...courses]

        newCourses.splice(index, 1)

        setCourses(newCourses)
    }

    const handleFormSubmit = (value) => {
        const newCourse = {
            title: value,
            coin: Math.floor((Math.random() * 100) * 20)
        }

        const newCourses = [...courses]
        newCourses.push(newCourse)
        
        setCourses(newCourses)
    }

    return (
        <React.Fragment>
            <ColorBox />
            <hr />
            <h1>React Hooks - Todo List - Create & Remove</h1>
            <Create onSubmit={handleFormSubmit} />
            <TodoList
                courses={courses}
                onTodoClick={handleRemoveClick}
            />
        </React.Fragment>
    )
}

export default App