import React from "react";
import s from "./Friends.module.css";
import ShowFriends from "./ShowFriends";

function Friends() {
  return (
    <div>
      <h3>Friends</h3>
      <div className={s.lineGroup}>
        <ShowFriends />
        <ShowFriends />
      </div>
    </div>
  );
}

export default Friends;
