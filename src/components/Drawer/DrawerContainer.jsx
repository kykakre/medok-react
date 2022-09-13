import { connect } from "react-redux";
import DrawerComponent from "./DrawerComponent.jsx";
import {GetServicesPost} from "../../store/slice/serviceSlice.js";
import {GetDoctorPost} from "../../store/slice/doctorSlice.js";
import {GetVisitTypePost} from "../../store/slice/typeSlice.js";
let mapStateToProps = (state) => {
  return {
    service: state.serviceReducer.service,
    doctor: state.doctorReducer.doctor.ListOfDoctors,
    doctorSpecial:state.doctorReducer.doctor.SpecializationTitle,
    type: state.typeReducer.type,
    comments: state.commentsReducer.comments,

  };
};

const DrawerContainer = connect(mapStateToProps, {GetServicesPost , GetDoctorPost, GetVisitTypePost})(DrawerComponent);
export default DrawerContainer;
