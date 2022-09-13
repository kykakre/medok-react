import React from "react";
import Title from "../Title/Title";
import DoctorItem from "./DoctorItem";
import style from "./Doctor.module.scss";
export default function Doctor(props) {
  const item = props.doctor.map((e) => (
    <DoctorItem
      Id={e.Id}
      key={e.Id}
      AvatarImagePath={e.AvatarImagePath}
      Name={e.Name}
      Surname={e.Surname}
      PatronymicName={e.PatronymicName}
      WorkStartDate={e.WorkStartDate}
      doctorSpecial={props.doctorSpecial}
      GetVisitTypePost={props.GetVisitTypePost}
      serviceId={props.serviceId}
      setDoctorId={props.setDoctorId}
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
