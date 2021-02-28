import React, { useEffect, useState } from 'react'
import ColorBox from './Components/ColorBox'
import TodoList from './Components/TodoList'
import Create from './Components/Create'
import PostList from './Components/PostListUseEffect'
import Pagination from './Components/Pagination'
import PostFiltersForm from './Components/PostFiltersForm'
import Clock from './Components/ClockCleanUp'
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
    const [postList, setPostList] = useState([])
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    })
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: ''
    })
    const [isClock, setIsClock] = useState(true)

    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const requestUrl = 
                    'http://js-post-api.herokuapp.com/api/posts'
                    + `?_limit=${filters._limit}&_page=${filters._page}&title_like=${filters.title_like}`
                
                const response = await fetch(requestUrl)
                const responseJson = await response.json()

                const { data, pagination } = responseJson

                setPostList(data)
                setPagination(pagination)
            } catch (err) {
                console.error('Failed to fetch post list: ', err.message)
            }
        }

        fetchPostList()
    }, [filters])

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

    const handlePageClick = (newPage) => {
        setFilters({
            ...filters,
            _page: newPage
        })
    }

    const handleFiltersChange = (newFilters) => {
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm
        })
    }

    return (
        <React.Fragment>
            <ColorBox />
            <hr />
            <div>
                <h1>React Hooks - Todo List - Create & Remove</h1>
                <Create onSubmit={handleFormSubmit} />
                <TodoList
                    courses={courses}
                    onTodoClick={handleRemoveClick}
                />
            </div>
            <hr />
            <div>
                <PostFiltersForm onSubmit={handleFiltersChange} />
                <PostList posts={postList} />
                <Pagination pagination={pagination} onPageChange={handlePageClick} />
            </div>
            <hr />
            <h1>React Hooks - Clock Clean Up</h1>
            {isClock && <Clock />}
            <button type="button" onClick={() => setIsClock(!isClock)}>{isClock ? 'Hide' : 'Show'}</button>
        </React.Fragment>
    )
}

export default App