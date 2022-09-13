import React from "react";
import Title from "../Title/Title.jsx";
import TypeBanner from "./TypeBanner.jsx";
import TypeItem from "./TypeItem.jsx";
import style from "./Type.module.scss";
import TypeDoctor from "./TypeDoctor.jsx";
const Type = (props) => {
  let typeItem = props.type.map((e) => (
    <TypeItem
      id={e.id}
      key={e.id}
      Title={e.Title}
      Duration={e.Duration}
      icon={e.icon}
      valute={e.valute}
      cash={e.cash}
    />
  ));

    let notType = (<div className={style.not}>Данный врач не обслуживает пациентов</div> )
    const filterTranslation = props.doctor.filter((e) => {
        return e.Id == props.doctorId;
    });

    return (
    <div>
      <Title
        arrow={true}
        title={"Выберите тип приёма"}
        setVisible={props.setVisible}
        visible={props.visible}
      />
        <TypeDoctor comments={props.comments} doctor={filterTranslation[0]?filterTranslation[0] :  props.doctor} />

      <TypeBanner />
      <div className={style.typeContainer}> {typeItem[0]?typeItem:notType }</div>
    </div>
  );
};
export default Type;
