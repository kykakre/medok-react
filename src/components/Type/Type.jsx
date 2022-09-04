import React from 'react';
import Title from "../Title/Title.jsx";
import TypeBanner from "./TypeBanner.jsx";
import TypeItem from "./TypeItem.jsx";import style from "./Type.module.scss";
import TypeDoctor from "./TypeDoctor.jsx";
const Type = (props) => {

    let typeItem = props.type.map((e)=>(
        <TypeItem id={e.id} key={e.id} title={e.title} subtitle={e.subtitle} icon={e.icon} valute={e.valute} cash={e.cash}/>
    ))
    return (
        <div>
            <Title
                arrow={true}
                title={"Выберите тип приёма"}
                setVisible={props.setVisible}
                visible={props.visible}
            />
            <TypeDoctor doctor={props.doctor[0]}/>
            <TypeBanner/>
            <div className={style.typeContainer}>{typeItem}</div>
        </div>
    );
};

export default Type;