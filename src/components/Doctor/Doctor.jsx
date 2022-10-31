import React from "react";
import Title from "../Title/Title";
import DoctorItem from "./DoctorItem";
import style from "./Doctor.module.scss";
import Preloader from "../Preloader/Preloader.jsx";
import {GetDoctorsReviewsPost} from "../../store/slice/typeSlice.js";
import SearchDoctors from "../Search/SearchDoctors.jsx";
export default function Doctor(props) {
  const item = props.doctors.map((e) => (
    <DoctorItem
      Id={e.Id}
      key={e.Id}
      CurrentDoctor={e}
      doctorSpecial={props.doctorSpecial}
      GetVisitTypePost={props.GetVisitTypePost}
      GetDoctorsConsultationsByMainTypePost={props.GetDoctorsConsultationsByMainTypePost}
      serviceId={props.serviceId}
      setDoctorId={props.setDoctorId}
      QualificationCategory={props.QualificationCategory}
      ScientificDegree={props.ScientificDegree}
      GetDoctorsReviewsPost={props.GetDoctorsReviewsPost}

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
        <SearchDoctors GetDoctorSearch={props.GetDoctorSearch}/>
      <div className={style.container}>{props.doctorsLoading?<Preloader/>:item}</div>
    </>
  );
}
