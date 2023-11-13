import { useState } from "react";

export const Form = ( {onAddLang} ) => {
    //textステートをuseStateで定義
    const [text, setText] = useState('');

    const submitForm = (event) => {
        // preventDefaultでページ遷移を発生しないようにする
        event.preventDefault();
        onAddLang(text);
    }
    
    return (
    <div>
        <h4>新しい言語の追加</h4>
        <form onSubmit={submitForm}>
            <div>
                {/* 定義したtextをinputのvalueで設定、onChangeのsetTextで用いてtextに反映する */}
                <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)}/>
            </div>
            <div>
                <button>追加</button>
            </div>
        </form>
    </div>
    )
}