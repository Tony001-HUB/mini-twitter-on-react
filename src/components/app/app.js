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
                    {label: 'I learn React', important: true, like: false, id: 1}, 
                    {label: 'I learn js', important: false, like: false, id: 2},
                    {label: 'I learn html css', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
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

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const indexItem = data[index];
            const newItem = {...indexItem, important: !indexItem.important};

            const before = data.slice(0, index);
            const after = data.slice(index + 1); 

            const newArr = [...before, newItem, ...after]; 

            return {
                data: newArr
            }
        }); 
    }

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const indexItem = data[index];
            const newItem = {...indexItem, like: !indexItem.like};

            const before = data.slice(0, index);
            const after = data.slice(index + 1); 

            const newArr = [...before, newItem, ...after]; 

            return {
                data: newArr
            }
        });
    }

    searchPost = (items, term) => {
        if (term.length === 0){
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) =>{
        this.setState({term})
    }

    filterPost = (items, filter) => {
        if(filter === 'like'){
            return items.filter(item => item.like)
        }else{
            return items;
        }

    }
    
    onFilterSelect = (filter) =>{
        this.setState({filter})
    }

    render(){
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <StyledAppBlock>
                <AppHeader 
                liked = {liked}
                allPosts = {allPosts}
                />
                <div className = "search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}
                    /> 
                    <PostStatusFilter
                    filter = {filter}
                    onFilterSelect = {this.onFilterSelect}
                    />
                </div>
                <PostList 
                onDelete={this.deleteItem}
                posts = {visiblePosts}
                onToggleImportant = {this.onToggleImportant}
                onToggleLiked = {this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </StyledAppBlock>
        )
    }
}
