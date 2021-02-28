import React from 'react'

const TodoList = (props) => {
    const { courses, onTodoClick } = props
    const isCoursesLength = courses.length > 0

    const handleRemoveClick = (index) => {
        if (!onTodoClick) return

        onTodoClick(index)
    }

    const renderCourses = !isCoursesLength
        ? 'Array empty'
        : (
            courses.map((course, index) => {
                return (
                    <li
                        key={index}
                        className="todo-item"
                    >
                        {index + 1}. {course.title} || {course.coin} coin
                        <button
                            type="button"
                            onClick={() => handleRemoveClick(index)}
                        >x</button>
                    </li>
                )
            })
        )

    return (
        <div className="todo-list-container">
            <ul className="todo-list">
                {renderCourses}
            </ul>
        </div>
    )
}

export default TodoList