import { connect } from "react-redux";
import DrawerComponent from "./DrawerComponent.jsx";
let mapStateToProps = (state) => {
  return {
    service: state.serviceReducer.service,
    doctor: state.doctorReducer.doctor,
    type:state.typeReducer.type,
  };
};

const DrawerContainer = connect(mapStateToProps)(DrawerComponent);
export default DrawerContainer;
