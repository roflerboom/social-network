import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.noactive)}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : s.noactive)}>
          Messeges
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.active : s.noactive)}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.active : s.noactive)}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.active : s.noactive)}>
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/friends"
          className={(navData) => (navData.isActive ? s.active : s.noactive)}>
          <Friends />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
