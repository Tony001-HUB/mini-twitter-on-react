import React, {Component} from 'react'
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

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                    {label: 'I learn React', important: true, id: 1}, 
                    {label: 'I learn js', important: false, id: 2},
                    {label: 'I learn html css', important: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) =>{
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1); 

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem = (body) =>{
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render(){
        const {data} = this.state;
        return (
            <StyledAppBlock>
                <AppHeader/>
                <div className = "search-panel d-flex">
                    <SearchPanel/> 
                    <PostStatusFilter/>
                </div>
                <PostList 
                onDelete={this.deleteItem}
                posts = {data}/>
                <PostAddForm
                    onAdd={this.addItem}
                />
            </StyledAppBlock>
        )
    }
}
