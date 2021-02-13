import React from 'react'
import './post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (
        <div className = "bottom-panel d-flex">
            <input
                type = "text"
                placeholder = "Очем вы думаете сейчас? скажите нам!"
                className = "form-control new-post-label"
            />
            <button 
                onClick = {() => onAdd('hello')}
                type = "submit"
                className = "btn btn-outline-secondary"
                >Добавить пост!
            </button>
        </div>
    )
}

export default PostAddForm;