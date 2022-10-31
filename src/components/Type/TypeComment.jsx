import React from "react";
import star from "../../assets/img/star.svg";
export default function TypeComment(props) {
console.log(props.Comment)
    const date = props.DateOfCreation ? new Date().getFullYear() - new Date(props.DateOfCreation).getFullYear() : "меньше года";

  function  renderSwitch() {
        switch(props.Rating) {
            case 1:
                return <img src={star} className="comment__star-icon" />;
            case 2:
                return<>
                    <img src={star} className="comment__star-icon" />
                    <img src={star} className="comment__star-icon" />
                </>;
            case 3:
                return<>
                    <img src={star} className="comment__star-icon" />
                    <img src={star} className="comment__star-icon" />
                    <img src={star} className="comment__star-icon" />
                </>;

            case 4:

            case 5:
                return<>
                    <img src={star} className="comment__star-icon" />
                    <img src={star} className="comment__star-icon" />
                    <img src={star} className="comment__star-icon" />
                    <img src={star} className="comment__star-icon" />
                    <img src={star} className="comment__star-icon" />
                </>;


            default:
                return <></>;
        }
    }



  return (
    <div className="comment__card">
      <div className="comment__title">
        <div>
          <div className="comment__title-text">{props.status?props.status:"Врач"}</div>
          <div className="comment__title-name">{props.person?props.person:"Иванов Иван Иванович"}</div>
        </div>
        <div className="comment__star">

            {renderSwitch()}
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
