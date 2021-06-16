import React, { useState, useEffect } from "react";
import { firebaseDb } from "./firebase";
import { InputArea } from "./components/InputArea";
import { ListArea } from "./components/ListArea";
import  "./App.css";


export const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  
  const list = { name: name, message: message };
  const [messageList, setMessageList] = useState([]);
  
//  firebaseからはじめに持ってくる処理
  useEffect(() => {
    const messageRef = firebaseDb.ref("messageList");
    messageRef.on("value", (snapshot) => {
      console.log(snapshot.val());
      setMessageList(snapshot.val());
    });
  }, []);

  const onClickAdd = () => {
    if (name === "" || message === "") return;

    const newMessageList = [...messageList, list];

    setMessageList(newMessageList);

    const messageRef = firebaseDb.ref("messageList");
    messageRef.set(newMessageList);

    setName("");
    setMessage("");
  };
  


  const onClickDelete = (index) => {
    if(messageList.length !== 1){
      const newMessageList = [...messageList];
      newMessageList.splice(index, 1);
      setMessageList(newMessageList);
      const messageRef = firebaseDb.ref("messageList");
      messageRef.set(newMessageList);
    } else {
        alert("メッセージが1つの場合は削除できません。。。")
    }
  };

  return (
    <div>
       <InputArea
      name={name}
      message={message}
      onChangeName={onChangeName}
      onChangeMessage={onChangeMessage}
      onClickAdd={onClickAdd}
      />

      <ListArea
      messageList={messageList}
      onClickDelete={onClickDelete}
      />
      
    </div>
  );
};
