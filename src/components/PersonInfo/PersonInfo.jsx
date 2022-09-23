import React from 'react';
import Title from "../Title/Title.jsx";
import PersonInfoDoctor from "./PersonInfoDoctor.jsx";
import PersonForm from "./PersonForm.jsx";
import PersonDescription from "./PersonDescription.jsx";
import {SendMessagePost} from "../../store/slice/contentSlice.js";

const PersonInfo = (props) => {
    return (
        <>
            <Title
                arrow={true}
                title={"Введите свои данные"}
                setVisible={props.setVisible}
                visible={props.visible}
            />
            <PersonInfoDoctor
                CurrentDoctor={props.CurrentDoctor}
                doctorSpecial={props.doctorSpecial}
                CurrentVisitType={props.CurrentVisitType}/>
            <PersonForm doctorId={props.doctorId} visitId={props.CurrentVisitType?.id} SendMessagePost={props.SendMessagePost}/>
            <PersonDescription/>
        </>
    );
};

export default PersonInfo;