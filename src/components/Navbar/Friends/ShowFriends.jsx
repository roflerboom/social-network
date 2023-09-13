import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friends.module.css";

function ShowFriends() {
  return (
    <div>
      <NavLink to="#s">
        <>
          <img
            src="https://cs5.livemaster.ru/storage/f9/61/366da4cfb38658e77223f7cabeoj--kartiny-i-panno-tsifrovoj-portret-po-foto-na-zakaz.jpg"
            alt="avatar"
            className={s.avatar}
          />
          <div>Misha</div>
        </>
      </NavLink>
    </div>
  );
}

export default ShowFriends;
