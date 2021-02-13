import React from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'
import styled from 'styled-components';

import './app.css'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    background-color: lightGrey;
`

const App = () =>{

const data = [
    {label: 'I learn React', important: true, id: 'wevddsv'}, 
    {label: 'I learn js', important: false, id: 'sdvsdbdfb'},
    {label: 'I learn html css', important: false, id: 'qwfvdssvd'}
];

    return (
        <StyledAppBlock>
            <AppHeader/>
            <div className = "search-panel d-flex">
                <SearchPanel/> 
                <PostStatusFilter/>
            </div>
            <PostList posts = {data}/>
            <PostAddForm/>
        </StyledAppBlock>
    )
}
export default App;