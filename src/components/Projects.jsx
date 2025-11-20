import BottomNavs2 from "./custom/Bottomnav2.jsx";
import Navigation from "./custom/Navigation.jsx";
import DynamicCanvas from "./custom/DynamicCanvas.jsx";
import HireMe from "./hireme.jsx";
import { useState } from "react";


function Projects({ handleNavigation }){
      // State to control the visibility of the HireMe form
  const [isHireMeVisible, setHireMeVisible] = useState(false);

  // Function to toggle the visibility of the HireMe form
  const toggleHireMeForm = () => {
    setHireMeVisible(!isHireMeVisible);
  };

    const [selectedNav, setSelectedNav] = useState("");
    const handleSelection = (selection) => {
        setSelectedNav(selection);
        console.log(`Received from BottomNavs2: ${selection}`);
    };
    return(
        <>
            <div className="portfolio">
                <Navigation pageTitle="Projects" destination="Portfolio" handleNavigation={handleNavigation} toggleHireMeForm={toggleHireMeForm}/>
                <DynamicCanvas selectedComponent={selectedNav}/>
                <BottomNavs2 handleSelection={handleSelection}/>
                {isHireMeVisible && <HireMe />}
            </div>
        </>
    )
}

export default Projects;