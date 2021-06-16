import React,{memo} from "react";

export const InputArea = memo((props) => {
  const {name,message,onChangeName,onChangeMessage,onClickAdd} = props;
  return (
    <div className="inputArea">
      <h2>Open Chat</h2>
      <input
        id="addName"
        placeholder="名前を入力してください"
        type="text"
        value={name}
        // value={inputName}
        onChange={onChangeName}
      />
      <textarea
        name=""
        id="addMessage"
        cols="40"
        rows="3"
        placeholder="メッセージを入力してください"
        value={message}
        // value={inputMessage}
        onChange={onChangeMessage}
      ></textarea>
      <button onClick={onClickAdd}>送信</button>
    </div>
  );
});
