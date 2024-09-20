import { appointment, automation, dataEntry,dbm, graphics, email, events, travel } from "../../image_assets";


function Skills(){
    return(
        <>
        <div className="myskills">
            <div className="skills">
            <div className="skill">
                <img src={automation} alt="automation" />
                <p>Automation</p>
            </div>   

            <div className="skill">
                <img src={dbm} alt="automation" />
                <p>Database Creation</p>
            </div> 

            <div className="skill">
                <img src={dataEntry} alt="automation" />
                <p>Data Entry</p>
            </div> 

            <div className="skill">
                <img src={graphics} alt="automation" />
                <p>Graphics Design</p>
            </div> 

            <div className="skill">
                <img src={email} alt="automation" />
                <p>Email Management</p>
            </div> 

            <div className="skill">
                <img src={travel} alt="automation" />
                <p>Travel Planning</p>
            </div> 

            <div className="skill">
                <img src={events} alt="automation" />
                <p>Calendar Management</p>
            </div> 

            <div className="skill">
                <img src={appointment} alt="automation" />
                <p>Appointment Setting</p>
            </div>          
        </div>
        </div>
        </>
    )
}

export default Skills;