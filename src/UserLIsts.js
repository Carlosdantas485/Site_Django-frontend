import React from "react";
import List from "./List";

export default class UserLIsts extends React.Component{
    
    state = { lists:null, loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                    'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 769ddbc5b731d3ea185e30256c4e23e5d18240dd';

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists:data, loading: false})
    }
    render()
    {
        return (
            <div>
                <List listName={'minha lista'}/>
                <List listName={'minha lista2'}/>
            </div>  
        )
    }
   
}