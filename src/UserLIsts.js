import React from "react";
import List from "./List.js";

export default class UserLists extends React.Component{
    
    state = { lists:[], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 769ddbc5b731d3ea185e30256c4e23e5d18240dd';

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data.results);

        this.setState({lists: data.results, loading: false})
    }

    render()
    {
        const listApi = this.state.lists;

        return (
            <div>
                {listApi.map(list => <List key={list.id} listName={list.name}/>)}
            </div>  
        )
    }
   
}