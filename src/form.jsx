//Reactライブラリをimport

import React from "react"

//コンポーネントの作成 

const Form = (props) => {

    //ボタンが押されてsubmitしたときにデータを変更する
    const handleSubmit = (e) =>{
        // ➀ボタンが押されたことを感知する(イベント(e)の入力)
        //preventDefault→デフォルトの動き(リロードしてしまうのを)を止める
        e.preventDefault()
        // ➁入力された値を取り出す e.target.名前(name).valueで名前の取り出しができる

        const title=  e.target.title.value

        // ➂取り出した値をtodosに追加。
        //Reactではstateを直接変更しない
        //stateをコピーする(スライス)
        //Appで
        const newTodos= props.todos.slice()

        //取り出した値の追加
        newTodos.push(title)

        // ➃stateの再定義(setTodosを使う)
        props.setTodos(newTodos)
    }
    return (
        <form action="submit" onSubmit={(e)=>{
            //アロー関数の中は処理
            //引数のeを渡すため、関数定義の中で関数を実行。
            handleSubmit(e)
        }}> 
            <input type="text" name="title" />
            <button>追加</button>
        </form>
    )
}

//Appコンポーネントのエクスポート
export default Form