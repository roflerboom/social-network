import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (user) => {
  let path = "/dialogs/" + user.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{user.name}</NavLink>
    </div>
  );
};

export default DialogItem;
