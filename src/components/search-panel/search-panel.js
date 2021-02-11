import React from 'react';
import './search-panel.css'

const SearchPanel = () => {
    return(
        <input
            className = "form-control"
            type = "text"
            placeholder = "Поиск по записям"
        ></input>
    )
}

export default SearchPanel