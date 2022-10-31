import React, {useEffect} from "react";
import Title from "../Title/Title.jsx";
import TypeBanner from "./TypeBanner.jsx";
import TypeItem from "./TypeItem.jsx";
import style from "./Type.module.scss";
import TypeDoctor from "./TypeDoctor.jsx";
import Preloader from "../Preloader/Preloader.jsx"
import {GetDoctorsConsultationsByMainTypePost} from "../../store/slice/typeSlice.js";
const Type = (props) => {
  let types = [];

  useEffect(()=>{
    types = []
    props.type?.forEach((item)=>{
      types.push(item.MainType)
    })
    props.GetDoctorsConsultationsByMainTypePost(1, props.serviceId,props.doctorId, types);
  }, [props.doctorId, props.type])
  let typeItem = props.consultations.map((e) => (
    <TypeItem
      id={e.Id}
      key={e.Id}
      Title={e.Title}
      Duration={e.Duration}
      ConsultationIconFilePath={e.ConsultationIconFilePath}
      valute={e.valute ?? "руб."}
      Price={e.Price}
    />
  ));

  let notType = (<div className={style.not}>Данный врач не обслуживает пациентов</div> )


    return (
    <div>
      <Title
        arrow={true}
        title={"Выберите тип приёма"}
        setVisible={props.setVisible}
        visible={props.visible}
      />
      {props.getVisitTypePostLoading ? <Preloader/> :
          <>
            <TypeDoctor  GetDoctorsReviewsPost={props.GetDoctorsReviewsPost}  comments={props.comments} CurrentDoctor={props.CurrentDoctor}/>

            <TypeBanner />
            <div className={style.typeContainer}>{typeItem[0]?typeItem:notType} </div>
          </>

      }
    </div>
  );
};
export default Type;
