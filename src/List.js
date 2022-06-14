import React from "react";
import Item from "./Item";

export default function List(props){
    return (
        <div>
            <h1>{props.listName}</h1>
            <ul>
               <Item name={'meu item'}></Item>
               <Item name={'meu item2'}></Item>
            </ul>
        </div>
    )
}