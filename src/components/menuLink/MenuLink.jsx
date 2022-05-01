import React from "react";
import "./menuLink.css";
import { useSelector } from "react-redux";

export default function MenuLink({ icon, text }) {
    const name=useSelector((state)=>state.user.userInfo.name)

    return (
    <div className="menuLink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
      {text === "Logout" && `(${name})`}
      </span>
    </div>
  );
}