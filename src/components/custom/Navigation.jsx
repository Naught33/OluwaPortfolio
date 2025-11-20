import CustomButton from "./Button.jsx";

function Navigation({destination, pageTitle, handleNavigation, toggleHireMeForm}){
    return(
        <>
        <div className="reusableNavs">
            <h3>{pageTitle}</h3>
            <div className="navigation">
                <p onClick={()=>{handleNavigation('home')}} className="link">Home</p>
                <p onClick={()=>{handleNavigation(destination.toLowerCase())}} className="link">{destination}</p>
                <CustomButton type="hotbtn" function = "Hire Me" clickhandler={toggleHireMeForm}/>
            </div>
        </div>
        </>
    );
}

export default Navigation;