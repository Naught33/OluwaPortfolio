import React, { useState, useRef, useEffect } from 'react';
import DataCarousel from "../../DataCarousel.js";
import Travel from '../projects/Travel.jsx';
import EmailManagement from '../projects/Email.jsx';
import Calendar from '../projects/Calendar.jsx';
import Graphics from '../projects/Graphics.jsx';
import Meeting from '../projects/Meeting.jsx';
import Research from '../projects/Research.jsx';
import Videos from '../projects/Videos.jsx';

function DynamicCanvas({ selectedComponent }) {
    const renderComponent = () => {
        switch (selectedComponent) {
            case "Travel Planning":
                return Travel();
            case "Email Management":
                return EmailManagement();
            case "Calendar Management":
                return Calendar();
            case "Research":
                return Research();
            case "Meeting Agenda":
                return Meeting();
            case "Graphics Design":
                return Graphics();  
            case "Video Content":
                return Videos();  
            default:
                return Travel();
        }
    }; 

    const [carouselManager, setCarouselManager] = useState(null); // Store the carousel manager in state
    const [currentElement, setCurrentElement] = useState(null);
    const [presentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        const data = renderComponent(); // Get the new component based on selection
        const newCarouselManager = new DataCarousel(data.length, data); // Create new instance
        setCarouselManager(newCarouselManager); // Update carousel manager
        setCurrentElement(newCarouselManager.currentElement()); // Set current element
        setCurrentPosition(newCarouselManager.currentElementPosition()); // Set position
    }, [selectedComponent]); // Recreate the carousel when selectedComponent changes

    const handleNext = () => {
        if (carouselManager) {
            carouselManager.nextElement();
            setCurrentElement(carouselManager.currentElement());
            setCurrentPosition(carouselManager.currentElementPosition());
        }
    };

    const handlePrev = () => {
        if (carouselManager) {
            carouselManager.prevElement();
            setCurrentElement(carouselManager.currentElement());
            setCurrentPosition(carouselManager.currentElementPosition());
        }
    };

    if (!carouselManager) return null; // Prevent rendering before the carouselManager is set

    const items = () => {
        return carouselManager.getElementCount();
    };

    const indicators = [];

    for (let i = 0; i < items(); i++) {
        indicators.push(
            <div
                key={i}
                className={i === presentPosition ? "position active" : "position"}
            />
        );
    }

    return (
        <>
            <div id="canvas" className="canvas dynamic">
                {currentElement}  {/* Render the current element */}
                <div className="indicator">
                    {indicators}
                </div>
                <button onClick={handleNext} className="right">→</button>
                <button onClick={handlePrev} className="left">←</button>
            </div>
        </>
    );
}

export default DynamicCanvas;
