import BottomNavs from "./custom/bottomnav";
import Navigation from "./custom/Navigation";
import Canvas from "./custom/Canvas";
import HireMe from "./hireme";
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