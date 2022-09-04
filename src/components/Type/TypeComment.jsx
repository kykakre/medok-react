import React from "react";
import star from "../../assets/img/star.svg";
export default function TypeComment(props) {
  return (
    <div className="comment__card">
      <div className="comment__title">
        <div>
          <div className="comment__title-text">{props.status}</div>
          <div className="comment__title-name">{props.person}</div>
        </div>
        <div className="comment__star">
          <img src={star} className="comment__star-icon" />
          <img src={star} className="comment__star-icon" />
          <img src={star} className="comment__star-icon" />
          <img src={star} className="comment__star-icon" />
          <img src={star} className="comment__star-icon" />
        </div>
      </div>
      <div className="comment__text">{props.comment}</div>
      <div className="comment__info">
        <div className="comment__data">{props.date}</div>
        <div className="comment__avtor">{props.personCom}</div>
      </div>
    </div>
  );
}
