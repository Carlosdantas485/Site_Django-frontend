import React from "react";
import Item from "./Item";

export default function List(){
    return (
        <div>
            <h1>MINHA LISTA</h1>
            <ul>
               <Item name={'meu item'}></Item>
               <Item name={'meu item2'}></Item>
            </ul>
        </div>
    )
}