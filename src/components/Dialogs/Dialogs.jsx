import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Masha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Misha</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Привет, Машенька</div>
        <div className={s.message}>Привет, милый. Как же я тебя люблю!</div>
      </div>
    </div>
  );
}

export default Dialogs;
