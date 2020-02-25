//Reactライブラリをimport

import React from "react"

import Form from "./form" 
import List from "./list"

//Appコンポーネントの作成 //アロー関数

//const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
//データの定義
const App = () => {
    const [todos, setTodos] = React.useState ([
        "宿題",
        "勉強"
    ])
    return ( //renderに該当する！！new 
             //コンポーネントのreturn内はhtml。jsを記述する時はjsだということをreturnに教える必要がある→{}を使う
            
        <>
            <Form todos={todos} setTodos={setTodos}></Form> 
            <List todos={todos} setTodos={setTodos}></List>
        </> 
        
    ) 
    
}

//Appコンポーネントのエクスポート　
export default App 