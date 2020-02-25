import React from "react"

import Item from "./item"

const List= (props) => {
    const items = props.todos.map((todo) =>{
        return (
            <Item todo={todo} todos={props.todos} setTodos={props.setTodos}></Item>  
        
        )

        
    })

    return (
        <ul>
            {items}
        </ul>
    )
}

export default List