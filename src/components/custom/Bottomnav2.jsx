import BottomBtn from "./Bottombtn.jsx";
import { useState } from "react";

function BottomNavs2({handleSelection}){

    const [selected, setSelected] = useState(null);
    const handleBtnClick = (btnName) => {
        setSelected(btnName); // Update local state
        handleSelection(btnName); // Pass data to parent component
    };

    return(
        <>
            <div className="bottom">
                <BottomBtn name="Travel Planning" handleClick={handleBtnClick} selected={selected==="Travel Planning"}/>
                <BottomBtn name="Email Management" handleClick={handleBtnClick} selected={selected==="Email Management"}/>
                <BottomBtn name="Calendar Management" handleClick={handleBtnClick} selected={selected==="Calendar Management"}/>
                <BottomBtn name="Research" handleClick={handleBtnClick} selected={selected==="Research"}/>
                <BottomBtn name="Meeting Agenda" handleClick={handleBtnClick} selected={selected==="Meeting Agenda"}/>
                <BottomBtn name="Graphics Design" handleClick={handleBtnClick} selected={selected==="Graphics Design"}/>
                <BottomBtn name="Video Content" handleClick={handleBtnClick} selected={selected==="Video Content"}/>
            </div>
        </>
    )
}
export default BottomNavs2;