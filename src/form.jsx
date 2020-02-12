//Reactライブラリをimport

import React from "react"

//コンポーネントの作成 

const Form = () => {
    return (
        <form action="submit">
            <input type="text"/>
            <button>追加</button>
        </form>
    )
}

//Appコンポーネントのエクスポート
export default Form