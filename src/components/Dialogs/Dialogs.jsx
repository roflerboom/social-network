import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs({ dialogsList, messagesList }) {
  const dialogsElements = dialogsList.map((d) => (
    <DialogItem key={d.key} name={d.name} /> //id={d.id}
  ));

  const messageElements = messagesList.map((m) => (
    <Message message={m.message} key={m.key} /> //id={m.id}
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
}

export default Dialogs;
