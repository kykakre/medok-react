import React from "react";
export default function Title(props, { arrow }) {
  return (
    <div className="header">
      <div className="header__flex">
        {props.arrow ? <div className="header__arrow" /> : ""}
        <div className="header__title">{props.title}</div>
      </div>

      <div
        className="header__icon"
        onClick={() => props.setVisible(!props.visible)}
      />
    </div>
  );
}
