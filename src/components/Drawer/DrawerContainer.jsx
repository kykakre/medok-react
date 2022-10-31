import { connect } from "react-redux";
import DrawerComponent from "./DrawerComponent.jsx";
import {GetServicesPost} from "../../store/slice/serviceSlice.js";
import {GetDoctorPost, GetDoctorSearch} from "../../store/slice/doctorSlice.js";
import {GetDoctorsReviewsPost, GetVisitTypePost} from "../../store/slice/typeSlice.js";
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
    comments: state.typeReducer.comments,
    specialization:state.specializationReducer.specialization,
    consultations:state.typeReducer.Consultations,
    CurrentVisitType:state.typeReducer.CurrentVisitType,
      serviceLoading:state.serviceReducer.isLoading,
      doctorsLoading:state.doctorReducer.isLoading,
      getVisitTypePostLoading:state.typeReducer.isLoading,
      getDoctorsConsultationsByMainTypePostLoading:state.typeReducer.isLoading,
  };
};

const DrawerContainer = connect(mapStateToProps,
    {GetServicesPost,
      GetDoctorPost,
      GetVisitTypePost,
      GetSpecializationPost,
      GetDoctorsConsultationsByMainTypePost,
      SendMessagePost,
        GetDoctorsReviewsPost,
        GetDoctorSearch,

    })(DrawerComponent);
export default DrawerContainer;
