import React from "react";
import Dropdown from "./Dropdown";
import RecordImg from "../images/record.png"

export default function Header(props) {
  return (
    <div>
      {/* <header className="header">
        <img
          src={RecordImg} alt=""
          className="header--image"
        />
        <h2 className="header--title">Record Collector</h2>

      </header> */}
      <Dropdown selectedMenu={props.selectedMenu} handleChange={props.handleChange} />
    </div>
  )
}