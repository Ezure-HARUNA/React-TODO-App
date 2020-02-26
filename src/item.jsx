import React from "react"

const Item = (props) => {　//props
    //完了・戻す用のstateを設定
    //真偽値を使う
    const [isDone, setIsDone] = React.useState(false)

    // isDoneによって文字が変わる
    let isDoneState
    if (isDone) { //(isDoneState === trueと同じ意味)
        isDoneState = "戻す"
    } else {
        isDoneState = "完了"
    }
    //＝＝＝const isDoneState = isDone ? "戻す"　:　"完了"


    const handleIsDone = () => {
        // isDoneの真偽値を切り替える
        if (isDone) {
            setIsDone(false)
        } else {
            setIsDone(true)
        }
        //===setIsDone(!isDone)
    }


    //削除ボタンについての処理
    const handeleDelete = () => {
        // todosをコピーする　　//form.jsxの部分と同じ感じで書く
        const deleteTodos=props.todos.slice()
        // todosの該当する部分を削除する
        deleteTodos.splice(props.id, 1)
        // setTodosでtodosを更新
        props.setTodos(deleteTodos)

    }

    

    
    return (
        <li>
            <p>{props.todo}</p>
            <button onClick={handleIsDone}>{isDoneState}</button>
            <button onClick={handeleDelete}>削除</button>
        </li>
        
    )

}

export default Item
