import React from "react";
import star from "../../assets/img/star.svg";
export default function TypeComment(props) {

    const date = props.DateOfCreation ? new Date().getFullYear() - new Date(props.DateOfCreation).getFullYear() : "меньше года";
  return (
    <div className="comment__card">
      <div className="comment__title">
        <div>
          <div className="comment__title-text">{props.status?props.status:"Врач"}</div>
          <div className="comment__title-name">{props.person?props.person:"Иванов Иван Иванович"}</div>
        </div>
        <div className="comment__star">
          <img src={star} className="comment__star-icon" />
          <img src={star} className="comment__star-icon" />
          <img src={star} className="comment__star-icon" />
          <img src={star} className="comment__star-icon" />
          <img src={star} className="comment__star-icon" />
        </div>
      </div>
      <div className="comment__text">{props.Comment}</div>
      <div className="comment__info">
        <div className="comment__data">{date?date:"18.05.2014"}</div>
        <div className="comment__avtor">{props.PatientName?props.PatientName:"Сидоров Сидор Сидорович"}</div>
      </div>
    </div>
  );
}
