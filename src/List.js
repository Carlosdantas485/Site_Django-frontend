import React from "react";
import Item from "./Item";

export default function List(props){
    const items = props.items;
    return (
        <div>
            <h1>{props.listName}</h1>
            <ul>
               {items.map(item => <Item key={item.id} name={item.name} status={item.done}/>)}
            </ul>
        </div>
    )
}