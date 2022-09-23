import { connect } from "react-redux";
import DrawerComponent from "./DrawerComponent.jsx";
import {GetServicesPost} from "../../store/slice/serviceSlice.js";
import {GetDoctorPost} from "../../store/slice/doctorSlice.js";
import {GetVisitTypePost} from "../../store/slice/typeSlice.js";
import {GetSpecializationPost} from "../../store/slice/specializationSlice.js";
let mapStateToProps = (state) => {
  console.log(state.specializationReducer.specialization)
  return {
    service: state.serviceReducer.service,
    doctor: state.doctorReducer.doctor.ListOfDoctors,
    doctorSpecial:state.doctorReducer.doctor.SpecializationTitle,
    type: state.typeReducer.type,
    comments: state.commentsReducer.comments,
    specialization:state.specializationReducer.specialization,

  };
};

const DrawerContainer = connect(mapStateToProps, {GetServicesPost , GetDoctorPost, GetVisitTypePost,GetSpecializationPost})(DrawerComponent);
export default DrawerContainer;
