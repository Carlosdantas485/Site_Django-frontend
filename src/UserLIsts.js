import React from "react";
import List from "./List.js";
import "./index.css"
import Login from "./login.js";

export default class UserLists extends React.Component{
    
    state = { lists:[], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ff36b6e43d15d51ac654a0a2f77746e9f92dc726';

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data.results);

        this.setState({lists: data.results, loading: false})
    }

    render()
    {
        const listApi = this.state.lists;
        var token = '';

        if(token === ''){
            return <Login/>
        }

        return (
            <div id="view-list">
                {listApi.map(list => <List key={list.id} listName={list.name} items={list.item_set}/>)}
            </div>  
        )
    }
   
}