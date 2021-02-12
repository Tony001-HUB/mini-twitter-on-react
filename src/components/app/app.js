import React from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'

const App = () =>{

const data = [
    {label: 'I learn React', important: true, id: 'wevddsv'}, 
    {label: 'I learn js', important: false, id: 'sdvsdbdfb'},
    {label: 'I learn html css', important: false, id: 'qwfvdssvd'}
];

    return (
        <div className = 'markup-app'>
            <AppHeader/>
            <div className = "search-panel d-flex">
                <SearchPanel/> 
                <PostStatusFilter/>
            </div>
            <PostList posts = {data}/>
            <PostAddForm/>
        </div>
    )
}
export default App;