import React from "react";
import Title from "../Title/Title";
import DoctorItem from "./DoctorItem";
import style from "./Doctor.module.scss";
export default function Doctor(props) {
  const item = props.doctor.map((e) => (
    <DoctorItem
      id={e.id}
      key={e.id}
      avatar={e.avatar}
      name={e.name}
      srname={e.surname}
      lastname={e.lastname}
      type={e.type}
      experiens={e.experiens}
      degree={e.degree}
      review={e.review}
      grabe={e.grabe}
      category={e.category}

    />
  ));
  return (
    <>
      <Title
        arrow={true}
        title={"Выберите врача"}
        setVisible={props.setVisible}
        visible={props.visible}
      />
      <div className={style.container}>{item}</div>
    </>
  );
}
