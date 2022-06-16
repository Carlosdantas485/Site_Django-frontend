import React from "react";

export default function Item(props){
    const status = props.status;
    return <li>
        { props.name } 
        <br></br>
            Status:{status ? 
            <div>finalizado</div> : 
            <div>nao finalizado</div>} 
        </li>
}