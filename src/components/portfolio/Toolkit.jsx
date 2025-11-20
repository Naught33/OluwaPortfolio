import { asana,
    canva,
    clickup,
    calendar,
    gdocs,
    gdrive,
    gforms,
    gmeet,
    gsheets,
    gslides,
    monday,
    zoom,
    slack } from "../../image_assets";


function Tools(){
    return(
        <>
            <div className="tools">
                <div className="project set">
                    <h3>Project Management</h3>
                    <div className="subset">
                        <img src={asana} alt="asana logo" />
                        <p>Asana</p>
                    </div>

                    <div className="subset">
                        <img src={monday} alt="asana logo" />
                        <p>Monday</p>
                    </div>

                    <div className="subset">
                        <img src={clickup} alt="asana logo" />
                        <p>Clickup</p>
                    </div>
                </div>
                <div className="google set">
                    <h3>Google Workspace</h3>
                    <div className="subset">
                        <img src={gdocs} alt="asana logo" />
                        <p>Docs</p>
                    </div>

                    <div className="subset">
                        <img src={gdrive} alt="asana logo" />
                        <p>Drive</p>
                    </div>

                    <div className="subset">
                        <img src={gforms} alt="asana logo" />
                        <p>Forms</p>
                    </div>

                    <div className="subset">
                        <img src={gsheets} alt="asana logo" />
                        <p>Sheets</p>
                    </div>

                    <div className="subset">
                        <img src={gslides} alt="asana logo" />
                        <p>Slides</p>
                    </div>

                    <div className="subset">
                        <img src={calendar} alt="asana logo" />
                        <p>Calendar</p>
                    </div>
                </div>
                <div className="meeting set">
                    <h3>Meeting Tools</h3>
                    <div className="subset">
                        <img src={zoom} alt="asana logo" />
                        <p>Slack</p>
                    </div>

                    <div className="subset">
                        <img src={gmeet} alt="asana logo" />
                        <p>Google Meet</p>
                    </div>

                    <div className="subset">
                        <img src={slack} alt="asana logo" />
                        <p>Zoom</p>
                    </div>
                </div>
                <div className="graphics set">
                    <h3>Graphics Design</h3>
                    <div className="subset">
                        <img src={canva} alt="asana logo" />
                        <p>Canva</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools;