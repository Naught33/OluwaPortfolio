import BottomNavs from "./custom/Bottomnav.jsx";
import Navigation from "./custom/Navigation.jsx";
import Canvas from "./custom/Canvas.jsx";
import HireMe from "./hireme.jsx";
import { useState } from "react";


function Portfolio({ handleNavigation }){
      // State to control the visibility of the HireMe form
  const [isHireMeVisible, setHireMeVisible] = useState(false);

  // Function to toggle the visibility of the HireMe form
  const toggleHireMeForm = () => {
    setHireMeVisible(!isHireMeVisible);
  };
    const [selectedNav, setSelectedNav] = useState("");
    const handleSelection = (selection) => {
        setSelectedNav(selection);
        console.log(`Received from BottomNavs: ${selection}`);
    };
    return(
        <>
            <div className="portfolio">
                <Navigation pageTitle="Portfolio" destination="Projects" handleNavigation={handleNavigation} toggleHireMeForm={toggleHireMeForm}/>
                <Canvas selectedComponent={selectedNav}/>
                <BottomNavs handleSelection={handleSelection}/>
                {isHireMeVisible && <HireMe />}
            </div>
        </>
    )
}

export default Portfolio;