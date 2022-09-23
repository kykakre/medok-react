import { connect } from "react-redux";
import DrawerComponent from "./DrawerComponent.jsx";
import {GetServicesPost} from "../../store/slice/serviceSlice.js";
import {GetDoctorPost} from "../../store/slice/doctorSlice.js";
import {GetVisitTypePost} from "../../store/slice/typeSlice.js";
import {GetSpecializationPost} from "../../store/slice/specializationSlice.js";
import {GetDoctorsConsultationsByMainTypePost} from "../../store/slice/typeSlice.js";
import {SendMessagePost} from "../../store/slice/contentSlice.js";
let mapStateToProps = (state) => {
  return {
    service: state.serviceReducer.service,
    doctors: state.doctorReducer.doctor.ListOfDoctors,
    CurrentDoctor: state.doctorReducer.CurrentDoctor,
    doctorSpecial:state.doctorReducer.doctor.SpecializationTitle,
    type: state.typeReducer.type,
    comments: state.commentsReducer.comments,
    specialization:state.specializationReducer.specialization,
    consultations:state.typeReducer.Consultations,
    CurrentVisitType:state.typeReducer.CurrentVisitType,
  };
};

const DrawerContainer = connect(mapStateToProps,
    {GetServicesPost,
      GetDoctorPost,
      GetVisitTypePost,
      GetSpecializationPost,
      GetDoctorsConsultationsByMainTypePost,
      SendMessagePost
    })(DrawerComponent);
export default DrawerContainer;
