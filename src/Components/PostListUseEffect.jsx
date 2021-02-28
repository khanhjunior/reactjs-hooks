import React from 'react'

const PostList = (props) => {
    const { posts } = props

    return (
        <div className="post-list-container">
            <h1>React Hooks - Post List useEffect</h1>
            <ul className="post-list">
                {posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    )
}

export default PostList