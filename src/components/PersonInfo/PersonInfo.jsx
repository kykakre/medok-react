import React from 'react';
import Title from "../Title/Title.jsx";
import PersonInfoDoctor from "./PersonInfoDoctor.jsx";
import PersonForm from "./PersonForm.jsx";
import PersonDescription from "./PersonDescription.jsx";

const PersonInfo = (props) => {
    debugger

    return (
        <>
            <Title
                arrow={true}
                title={"Введите свои данные"}
                setVisible={props.setVisible}
                visible={props.visible}
            />
            <PersonInfoDoctor doctor={props.doctor[props.doctorId]} type={props.type[props.serviceId]}/>
            <PersonForm/>
            <PersonDescription/>
        </>
    );
};

export default PersonInfo;