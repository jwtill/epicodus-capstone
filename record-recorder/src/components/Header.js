import React from "react";
import Menu from "./Menu";
import RecordImg from "../images/record.png"

export default function Header(props) {
  return (
    <div>
      <header className="header">
        <img
          src={RecordImg} alt=""
          className="header--image"
        />
        <h1 className="header--title">Record Recorder</h1>
      </header>
      <Menu selectedMenu={props.selectedMenu} handleChange={props.handleChange} />
    </div>
  )
}