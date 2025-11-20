import BottomBtn from "./Bottombtn.jsx";
import { useState } from "react";

function BottomNavs({ handleSelection }) {
    const [selected, setSelected] = useState(null);

    const handleBtnClick = (btnName) => {
        setSelected(btnName); // Update local state
        handleSelection(btnName); // Pass data to parent component
    };

    return (
        <>
            <div className="bottom">
                <BottomBtn name="My Work" handleClick={handleBtnClick} selected={selected==="My Work"}/>
                <BottomBtn name="My Tools" handleClick={handleBtnClick} selected={selected==="My Tools"}/>
                <BottomBtn name="Skills" handleClick={handleBtnClick} selected={selected==="Skills"}/>
                <BottomBtn name="Certificates" handleClick={handleBtnClick} selected={selected==="Certificates"}/>
                <BottomBtn name="Testimonials" handleClick={handleBtnClick} selected={selected==="Testimonials"}/>
                <BottomBtn name="Contacts" handleClick={handleBtnClick} selected={selected==="Contacts"}/>
            </div>
        </>
    );
}

export default BottomNavs;
