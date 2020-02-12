//Reactライブラリをimport

import React from "react"

import Form from "./form" 
import List from "./list"

//Appコンポーネントの作成 //アロー関数

//const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
const App = () => {
    const [todos, setTodos] = React.useState ([
        "宿題",
        "勉強"
    ])
    return (
        <>
            <Form></Form>
            <List todos={todos}></List>
        </> 
        // returnの中のタグは1つ！！
        
    )
}

//Appコンポーネントのエクスポート
export default App 