import React from "react"

import Item from "./item"

const List= (props) => {
    const items = props.todos.map((todo) =>{
        return (
            <Item todo={todo}></Item>  //Appの宿題"List"を表示
        )

        return (
            <ul>
                {items}
            </ul>
        )
    })
}

export default List