import { travelBudget,
        travelDestination,
        travelFlight,
        travelItinerary } from "../../image_assets";

function Travel(){
    return[
        <div key="1" className="budget carouselItem">
            <img src={travelBudget} alt="budget" />
            <div className="desc">
                <h2>Budget</h2>
                <p>Take control of your finances with expert budget management. I will help you track expenses, 
                    allocate funds efficiently, and ensure you stay on target without the stress.</p>
                <p>
                    <a style={{marginBlock: "10px"}} target="blank" href="https://docs.google.com/presentation/d/1unPEaNKOVHbXBqx9aAWTv5z22zOi2v-TMkAv0BlpGtw/edit#slide=id.g2ee38bec010_1_44">
                    See full project here →
                    </a>
                </p>
            </div>
            </div>,
        <div key="2" className="destination carouselItem">
            <img src={travelDestination} alt="destination" />
            <div className="desc">
                <h2>Destination</h2>
                <p>Never miss a flight again with streamlined flight information management. 
                    will monitor schedules, 
                    delays, and check-ins, so you always stay updated and prepared.</p>
            </div>
        </div>,
        <div key="3" className="flight carouselItem">
            <img src={travelFlight} alt="flight information" />
            <div className="desc">
                <h2>Flight Information</h2>
                <p>Managing your flights can be stressful, but I am here to make it 
                    effortless. From booking to final landing, I will 
                    ensure your flight details are organized and accessible at all times.</p>
            </div>
        </div>,
        <div key="4" className="itinerary carouselItem">
            <img src={travelItinerary} alt="itinerary" />
            <div className="desc">
                <h2>Itinerary</h2>
                <p>Your travel plans deserve seamless execution. From transportation to 
                    accommodations, will design the perfect
                     itinerary tailored to your preferences and schedule.</p>
            </div>
        </div>
    ]
}

export default Travel;