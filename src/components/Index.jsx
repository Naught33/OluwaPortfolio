import React, { useState } from 'react';  // Import useState
import '../index.css';
import Navs from './custom/Navs.jsx';
import CustomButton from './custom/Button.jsx';
import { mainimg } from '../image_assets';
import HireMe from './hireme.jsx';

function Index({ handleNavigation }) {
  // State to control the visibility of the HireMe form
  const [isHireMeVisible, setHireMeVisible] = useState(false);

  // Function to toggle the visibility of the HireMe form
  const toggleHireMeForm = () => {
    setHireMeVisible(!isHireMeVisible);
  };

  return (
    <>
      {/* Conditionally render HireMe component */}
      {isHireMeVisible && <HireMe />}

      <div className="container">
        <Navs handleNavigation={handleNavigation} />
        <div className="content">
          <img className='mainimg' src={mainimg} alt="" />
          <h1>Hello, <span className='focusText'>I am Oluwatunmise</span></h1>
          <p>
            A <span className='focusText'>Virtual Assistant</span>.
            My work is to free up your time so that you focus on what is more important.
            I offer <span className='focusText'>Administrative support</span>,
            <span className='focusText'>Email Management</span>,
            <span className='focusText'>Scheduling</span> and
            <span className='focusText'>Data Entry</span> just to mention a few.
          </p>
          <div className="buttons">
            {/* Trigger form visibility toggle on "Hire me" button click */}
            <CustomButton type="hotbtn" function="Hire me" clickhandler={toggleHireMeForm} />
            <CustomButton type="coldbtn" function="Portfolio" clickhandler={() => handleNavigation('portfolio')} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
