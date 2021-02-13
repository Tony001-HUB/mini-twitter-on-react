import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';
import { ListGroup } from 'reactstrap';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key = {id} className = 'list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    })
    //if don't use es8 then item.id so next

    return (   
            <ListGroup className="app-list list-group">
                {elements}
            </ListGroup>
    )
}

export default PostList;