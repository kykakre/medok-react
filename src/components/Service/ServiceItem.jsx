import React from "react";
import style from "./Service.module.scss";
export default function ServiceItem(props) {
  return (
    <div className={style.card}>
      <div className={style.cardFlex}>
        <img className={style.cardIcon} src={props.icon} />
        <div>
          <div className={style.cardTitle}>{props.title}</div>
          <div className={style.cardType}>{props.type}</div>
        </div>
      </div>
      <div className="next arrow">
        <div className={style.arrowIcon}></div>
      </div>
    </div>
  );
}
