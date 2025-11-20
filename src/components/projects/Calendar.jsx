import { calendarManagement } from "../../image_assets";

function Calendar(){
    return [
        <div className="calenderManagement carouselItem">
            <img src={calendarManagement} alt="calendar" />
            <div className="desc">
                <h2>Calendar</h2>
                <p>Say goodbye to missed deadlines and time conflicts.
                     Let me handle your calendar management so you can 
                     focus on what matters most.</p>
            </div>
        </div>
    ];
}

export default Calendar;