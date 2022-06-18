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
        /* coloca o espaco depois da palavra 'Token' */
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);

        this.setState({lists: data, loading: false})
    }

    render()
    {
        const listApi = this.state.lists;
        var token = localStorage.getItem('token');

        if(!token){
            return <Login/>
        }

        return (
            <div id="view-list">
                {listApi.map(list => <List key={list.id} listName={list.name} items={list.item_set}/>)}
            </div>  
        )
    }
   
}