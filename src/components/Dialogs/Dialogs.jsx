import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs({ state }) {
  const dialogsElements = state.dialogsList.map((d) => (
    <DialogItem key={d.key} name={d.name} /> //id={d.id}
  ));

  const messageElements = state.messagesList.map((m) => (
    <Message message={m.message} key={m.key} /> //id={m.id}
  ));

  let newMessageElement = React.createRef();
  const sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <div>
        <textarea
          placeholder="Enter message"
          ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;
