import React from 'react'
import PostListItem from '../post-list-item/post-list-item'
import './post-list.css'

const PostList = () => {
    return (
        <div>
            <ul className="app-list list-group">
                <PostListItem/>
                <PostListItem/>
                <PostListItem/>
            </ul>
        </div>
    )
}

export default PostList;